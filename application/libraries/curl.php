<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Curl
{
    private $_CI;
    private $_ch = null;
    private $_lastcode = -1;
    private $_useragent = "CodeIgniter Twitter Library";

    public function __construct()
    {
        $this->_CI = get_instance();
        $this->_ch = curl_init();

        curl_setopt_array($this->_ch, [
            CURLOPT_USERAGENT      => $this->_useragent,
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_SSL_VERIFYPEER => 1,
            // CURLOPT_SSL_VERIFYHOST => 2,
            // CURLOPT_CAINFO         => "https://api.twitter.com",
        ]);
    }

    public function __destruct()
    {
        curl_close($this->_ch);
    }

    public function get($url, $params = [], $header = [])
    {
        if (count($params))
            $url .= "?" . http_build_query($params);

        curl_setopt_array($this->_ch, [
            CURLOPT_URL        => $url,
            CURLOPT_HTTPHEADER => $header,
            CURLOPT_POST       => 0,
        ]);

        $success = curl_exec($this->_ch);
        $this->_lastcode = curl_getinfo($this->_ch, CURLINFO_HTTP_CODE);

        return ($success);
    }

    public function post($url, $params = [], $header = [])
    {
        curl_setopt_array($this->_ch, [
            CURLOPT_URL        => $url,
            CURLOPT_HTTPHEADER => $header,
            CURLOPT_POST       => 1,
            CURLOPT_POSTFIELDS => $params,
            CURLOPT_VERBOSE    => 1,
            // CURLOPT_HEADER     => 1,
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_SSL_VERIFYPEER => 0,
        ]);

        $success = curl_exec($this->_ch);
        $this->_lastcode = curl_getinfo($this->_ch, CURLINFO_HTTP_CODE);

        // var_dump($url);
        // var_dump($params);
        // var_dump($header);
        // var_dump($success);
        // var_dump(curl_error($this->_ch));

        // var_dump(curl_getinfo($this->_ch, CURLINFO_HEADER_SIZE));

        return ($success);
    }

    public function &get_curl()
    {
        return ($this->_ch);
    }
}