<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends MY_Controller
{
	public function __construct()
	{
		parent::__construct();
	}

	public function index()
	{
		$this->_data["badges_url"] = [
			"Blog"    => "https://blog.senpaisilver.com/",
			"Twitter" => "https://twitter.com/SenpaiSilver",
			"YouTube" => "https://youtube.com/SenpaiSilver",
			"GitHub"  => "https://github.com/SenpaiSilver",
			"Steam"   => "http://steamcommunity.com/id/senpaisilver/",
		];

		$this->load->view('base/head', $this->_data);
		$this->load->view('home/index', $this->_data);
		$this->load->view('base/footer', $this->_data);
	}
}
