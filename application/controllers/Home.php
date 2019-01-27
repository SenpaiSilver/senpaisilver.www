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
		// $this->_data["badges_url"] = [
		// 	"Blog"    => (object) ["icon" => "", "url" => "https://blog.senpaisilver.com/"],
		// 	"Twitter" => (object) ["icon" => "", "url" => "https://twitter.com/SenpaiSilver"],
		// 	"YouTube" => (object) ["icon" => "", "url" => "https://youtube.com/SenpaiSilver"],
		// 	"GitHub"  => (object) ["icon" => "", "url" => "https://github.com/SenpaiSilver"],
		// 	"Steam"   => (object) ["icon" => "", "url" => "http://steamcommunity.com/id/senpaisilver/"],
		// ];
		$this->_data["timeline"] = $this->twitter->get_user_timeline([
			"screen_name"     => "SenpaiSilver",
			"count"           => 16,
			"exclude_replies" => true,
			"include_rts"     => true,
		]);
		$this->_data["blog"] = $this->blog->get_feed([
			"per_page" => 8,
		]);

		$this->_data["youtube"] = $this->youtube->get_latest_uploads();

		$this->load->view('base/head', $this->_data);
		$this->load->view('home/index', $this->_data);
		$this->load->view('base/footer', $this->_data);
	}
}
