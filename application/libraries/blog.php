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
            $d->excerpt->rendered = preg_replace('/<a href="[^"]+" class="more-link">.*/i', "", $d->excerpt->rendered);
            if (strpos($d->excerpt->rendered, "<p>") === 0 && strpos($d->excerpt->rendered, "</p>") != (strlen($d->excerpt->rendered) - 4))
                $d->excerpt->rendered .= "</p>";
        }

        $this->_CI->cache->save($hash, $data, 300);
        return ($data);
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