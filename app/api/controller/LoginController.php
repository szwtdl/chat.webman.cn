<?php

namespace app\api\controller;

use support\Request;
use support\Response;

class LoginController extends BaseController
{

    public function login(Request $request):Response
    {
        return view('login');
    }

    public function logout(Request $request):Response
    {
        return self::success();
    }
}