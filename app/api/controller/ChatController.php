<?php

namespace app\api\controller;

use support\Request;
use support\Response;

class ChatController extends BaseController
{
    public function index(Request $request):Response
    {
        return view('chat');
    }

    public function send(Request $request):Response
    {
        return self::success();
    }
}