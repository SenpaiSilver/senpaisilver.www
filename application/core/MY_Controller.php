<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class MY_Controller extends CI_Controller
{
	protected $_data = [];

	public function __construct()
	{
		parent::__construct();

		$this->load->driver('cache', array('adapter' => 'apc', 'backup' => 'file'));
	}
}
