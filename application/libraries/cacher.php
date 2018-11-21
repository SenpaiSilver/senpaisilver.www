<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Cacher
{
    private $_driver;

    public function __construct()
    {
        $this->_CI = get_instance();
        $this->_CI->load->driver('cache', array('adapter' => 'apc', 'backup' => 'file'));
        $this->_driver = &$this->_CI->cache;
    }

    public function get()
    {
    }

    public function save()
    {
    }
}