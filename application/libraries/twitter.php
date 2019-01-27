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
            $d->text_html = preg_replace('#\s+https?://t.co/[a-z0-9]+$#i', '', $d->text);
            $d->text_html = htmlentities($d->text_html);
            $d->link = "https://twitter.com/".urlencode(property_exists($d, "retweeted_status") ? $d->retweeted_status->user->screen_name : $d->user->screen_name)."/status/".$d->id;

            foreach ($d->entities->user_mentions as $user)
            {
                $d->text_html = str_replace("@".$user->screen_name, '<a href="https://twitter.com/'.urlencode($user->screen_name).'">@'.htmlentities($user->screen_name).'</a>', $d->text_html);
            }
            foreach ($d->entities->hashtags as $hashtag)
            {
                $d->text_html = str_replace("#".$hashtag->text, '<a href="https://twitter.com/hashtag/'.urlencode($hashtag->text).'">#'.htmlentities($hashtag->text).'</a>', $d->text_html);
            }
            foreach ($d->entities->urls as $url)
            {
                $d->text_html = str_replace($url->url, '<a href="'.$url->expanded_url.'">'.$url->expanded_url.'</a>', $d->text_html);
            }
            if (property_exists($d->entities, "media")) foreach ($d->entities->media as $media)
            {
                $d->text_html = str_replace($media->url, '<a href="'.$media->expanded_url.'">'.$media->expanded_url.'</a>', $d->text_html);
            }
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