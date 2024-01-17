<?php

namespace app\admin\controller;


use support\Request;
use support\Response;

class LoginController extends BaseController
{
    public function login(Request $request): Response
    {
        return view('login');
    }

    public function check(Request $request): Response
    {
        return self::success();
    }

    public function logout(Request $request): Response
    {
        return view('logout');
    }
}