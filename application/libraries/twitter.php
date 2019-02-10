<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Twitter
{
    private $_CI;
    private $_access;
    private $_secret;
    private $_token;
    private $_base = "https://api.twitter.com/";
    private $_version = "1.1";

    private $_headers;

    public function __construct()
    {
        $this->_CI = get_instance();
        $this->_CI->load->driver('cache', array('adapter' => 'apc', 'backup' => 'file'));
        $this->_access = $this->_CI->config->item("twitter_access")?? "";
        $this->_secret = $this->_CI->config->item("twitter_secret")?? "";
        $this->_token  = $this->_CI->cache->get("twitter_token");

        $this->_headers = [
            "User-Agent: senpaisilver.com Twitter feed",
            // "Host"            => "api.twitter.com",
        ];
        if ($this->_token != null)
            $this->_headers[] = "Authorization: Bearer ".$this->_token;
    }

    public function get_user_timeline($params)
    {
        $endpoint = $this->_build_url("statuses/user_timeline.json");

        $hash = "twiter_user_timeline.".sha1($endpoint);
        $data = $this->_CI->cache->get($hash);
        if ($data === false)
            $data = [];
        else
            return ($data);

        if ($this->_token != null || $this->_authenticate())
        {
            $data = $this->_CI->curl->get($endpoint, $params, $this->_headers);
        }
        $data = json_decode($data);

        foreach ($data as &$d)
        {
            $tweet = new stdClass();

            $tweet->text_html = preg_replace('#\s+https?://t.co/[a-z0-9]+$#i', '', $d->text);
            $tweet->text_html = htmlentities($tweet->text_html);
            $tweet->link = "https://twitter.com/".urlencode(property_exists($d, "retweeted_status") ? $d->retweeted_status->user->screen_name : $d->user->screen_name)."/status/".$d->id;

            $tweet->datetime = $d->created_at;
            $tweet->author = (object) [
                "name"        => $d->user->name,
                "screen_name" => $d->user->screen_name,
                "link"        => "https://twitter.com/".$d->user->screen_name,
                "location"    => $d->user->location,
                "description" => $d->user->description,
                "created"     => $d->user->created_at,
                "profile"     => (object) [
                    "picture"    => str_replace("_normal.jpg", ".jpg", $d->user->profile_image_url_https),
                    "background" => $d->user->profile_background_image_url_https,
                ],
            ]; // user
            $tweet->media = []; // entities->media[]->media_url_https

            foreach ($d->entities->user_mentions as $user)
            {
                $tweet->text_html = str_replace("@".$user->screen_name, '<a href="https://twitter.com/'.urlencode($user->screen_name).'">@'.htmlentities($user->screen_name).'</a>', $tweet->text_html);
                $tweet->text_html = htmlspecialchars_decode($tweet->text_html);
            }
            foreach ($d->entities->hashtags as $hashtag)
            {
                $tweet->text_html = str_replace("#".$hashtag->text, '<a href="https://twitter.com/hashtag/'.urlencode($hashtag->text).'">#'.htmlentities($hashtag->text).'</a>', $tweet->text_html);
            }
            foreach ($d->entities->urls as $url)
            {
                $tweet->text_html = str_replace($url->url, '<a href="'.$url->expanded_url.'">'.$url->expanded_url.'</a>', $tweet->text_html);
            }

            if (property_exists($d->entities, "media"))
            {
                foreach ($d->entities->media as $media)
                {
                    $tweet->text_html = str_replace($media->url, '<a href="'.$media->expanded_url.'">'.$media->expanded_url.'</a>', $tweet->text_html);
                    $tweet->media[] = (object) [
                        "url"      => $media->media_url_https,
                        "expanded" => $media->expanded_url,
                        "type"     => $media->type,
                        "sizes"    => $media->sizes,
                    ];
                }
            }

            if (property_exists($d, "retweeted_status"))
            {
                $tweet->author = (object) [
                    "name"        => $d->retweeted_status->user->name,
                    "screen_name" => $d->retweeted_status->user->screen_name,
                    "link"        => "https://twitter.com/".$d->retweeted_status->user->screen_name,
                    "location"    => $d->retweeted_status->user->location,
                    "description" => $d->retweeted_status->user->description,
                    "created"     => $d->retweeted_status->user->created_at,
                    "profile"     => (object) [
                        "picture"    => str_replace("_normal.jpg", ".jpg", $d->retweeted_status->user->profile_image_url_https),
                        "background" => $d->retweeted_status->user->profile_background_image_url_https,
                    ],
                ];
            }

            $tweet->text_html = nl2br($tweet->text_html);

            // var_dump($d);
            // var_dump($tweet,0);
            $d = $tweet;
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

    private function _authenticate()
    {
        $success = $this->_CI->curl->post($this->_build_url("oauth2/token", false), "grant_type=client_credentials", ["Authorization: Basic ".base64_encode(urlencode($this->_access).":".urlencode($this->_secret))]);

        $success = json_decode($success);

        if ($success == false || $success === "null" || !property_exists($success, "access_token"))
            return (false);

        $this->_token = $success->access_token;
        $this->_headers[] = "Authorization: Bearer ".$this->_token;
        $this->_CI->cache->save('twitter_token', $this->_token, 300);
        return (true);
    }
}