<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Youtube
{
    private $_CI;
    private $_apikey;
    private $_channelid;
    private $_base = "https://www.googleapis.com/youtube/";
    private $_version = "3";

    private $_headers;

    public function __construct()
    {
        $this->_CI = get_instance();
        $this->_CI->load->driver('cache', array('adapter' => 'apc', 'backup' => 'file'));
        $this->_apikey    = $this->_CI->config->item("youtube_apikey")?? "";
        $this->_channelid = $this->_CI->config->item("youtube_channelid")?? "";

        $this->_headers = [
            "User-Agent: senpaisilver.com YouTube feed",
        ];
    }

    public function get_latest_uploads()
    {
        $hash = "youtube_latestuploads." . $this->_channelid;

        $data = $this->_CI->cache->get($hash);
        if ($data === false)
        {
            $data = [];
            $endpoint_channel = $this->_build_url("channels", [
                "part" => "contentDetails",
                "id"   => $this->_channelid,
                "key"  => $this->_apikey,
            ]);

            $channel_details = json_decode($this->_CI->curl->get($endpoint_channel));
            if ($channel_details == false || !property_exists($channel_details, "items"))
                return ([]);

            $endpoint_uploads = $this->_build_url("playlistItems", [
                "part"       => "snippet",
                "playlistId" => $channel_details->items[0]->contentDetails->relatedPlaylists->uploads,
                "maxResults" => 16,
            ]);

            $uploads = json_decode($this->_CI->curl->get($endpoint_uploads));
            if ($uploads == false || !property_exists($uploads, "items"))
                return ([]);


            foreach ($uploads->items as $item)
            {
                if ($item->kind === "youtube#playlistItem")
                {
                    $data[] = (object) [
                        "id"          => $item->id,
                        "videoid"     => $item->snippet->resourceId->videoId,
                        "title"       => $item->snippet->title,
                        "uploaded"    => $item->snippet->publishedAt,
                        "description" => $item->snippet->description,
                        "thumbnails"  => $item->snippet->thumbnails,
                        "url"         => "https://www.youtube.com/watch?v=".$item->snippet->resourceId->videoId,
                        "shorturl"    => "https://youtu.be/".$item->snippet->resourceId->videoId,
                    ];
                }
            }
            $this->_CI->cache->save($hash, $data, 300);
        }
        return ($data);
    }

    private function _build_url($endpoint, $params = null, $version = true)
    {
        $url = $this->_base;
        if ($version)
            $url .= "v" . $this->_version . "/";
        $url .= $endpoint . "?";

        if ($params != null)
        {
            if (!isset($params["key"]))
                $params["key"] = $this->_apikey;
            $url .= http_build_query($params);
        }

        return ($url);
    }
}