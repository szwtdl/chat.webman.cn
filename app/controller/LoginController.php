<?php

namespace app\controller;

use support\Request;
use support\Response;

class LoginController extends Controller
{

    public function login(Request $request): Response
    {
        return view('login/login');
    }

    public function register(Request $request): Response
    {
        return view('login/register');
    }

    public function logout(Request $request): Response
    {
        return view('login/logout');
    }

    public function reset(Request $request):Response
    {
        return view('login/reset');
    }
}