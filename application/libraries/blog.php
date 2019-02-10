<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Blog
{
    private $_CI;
    private $_base = "https://blog.senpaisilver.com/wp-json/wp/v";
    private $_version = "2";

    private $_headers;

    public function __construct()
    {
        $this->_CI = get_instance();
        $this->_headers = [
            "User-Agent: senpaisilver.com Blog feed",
        ];
    }

    /**
     * Check the official documentation for a full list of parameters:
     * https://developer.wordpress.org/rest-api/reference/posts/#list-posts
     */
    public function get_feed($params = [])
    {
        $endpoint = $this->_build_url("posts");

        $hash = "blog_posts.".sha1($endpoint);
        $data = $this->_CI->cache->get($hash);
        if ($data === false)
            $data = [];
        else
            return ($data);

        $data = $this->_CI->curl->get($endpoint, $params, $this->_headers);
        $data = json_decode($data);
        if ($data === null)
            return ([]);

        foreach ($data as &$d)
        {
            $post = new stdClass();

            $post->type = $d->type;
            $post->title = $d->title->rendered;
            $post->link = $d->link;
            $post->permalink = $d->guid->rendered;

            $post->excerpt = preg_replace('/<a href="[^"]+" class="more-link">.*/i', "", $d->excerpt->rendered);
            if (strpos($d->excerpt->rendered, "<p>") === 0 && strpos($d->excerpt->rendered, "</p>") != (strlen($d->excerpt->rendered) - 4))
                $d->excerpt->rendered .= "</p>";

            $datetime = explode("T", $d->date);
            $post->datetime = (object) [
                "date" => $datetime[0],
                "time" => $datetime[1]
            ];

            $datetime = explode("T", $d->date_gmt);
            $post->datetime_gmt = (object) [
                "date" => $datetime[0],
                "time" => $datetime[1]
            ];

            $datetime = explode("T", $d->modified);
            $post->modified = (object) [
                "date" => $datetime[0],
                "time" => $datetime[1]
            ];

            $datetime = explode("T", $d->modified_gmt);
            $post->modified_gmt = (object) [
                "date" => $datetime[0],
                "time" => $datetime[1]
            ];

            $post->rendered = $d->content->rendered;
            $post->featured = $this->_get_featuredmedia($d->_links->{"wp:featuredmedia"});

            $d = $post;
        }

        $this->_CI->cache->save($hash, $data, 300);
        return ($data);
    }

    private function _get_featuredmedia($endpoint)
    {
        $media = [];

        foreach ($endpoint as $e)
        {
            if ($e->embeddable)
            {
                $data = $this->_CI->curl->get($e->href, [], $this->_headers);
                $data = json_decode($data);
                if ($data !== null)
                {
                    $media[] = (object) [
                        "title"      => $data->title->rendered,
                        "link"       => $data->guid->rendered,
                        "caption"    => $data->caption->rendered,
                        "thumbnails" => (object) [
                            "smaller" => $data->media_details->sizes->thumbnail->source_url,
                            "small"   => $data->media_details->sizes->medium->source_url,
                            "medium"  => $data->media_details->sizes->medium_large->source_url,
                            "large"  => $data->media_details->sizes->large->source_url,
                        ]
                    ];
                }
            }
        }
        return ($media);
    }

    private function _build_url($endpoint, $version = true)
    {
        $url = $this->_base;
        if ($version)
            $url .= $this->_version . "/";
        $url .= $endpoint;
        return ($url);
    }
}