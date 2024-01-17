<?php

namespace app\controller;

use support\Request;
use support\Response;

class UserController extends Controller
{
    public function index(Request $request): Response
    {
        return view('user/index', [
            'name' => "world"
        ]);
    }
}