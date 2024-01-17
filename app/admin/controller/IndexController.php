<?php

namespace app\admin\controller;

use support\Request;
use support\Response;

class IndexController extends BaseController
{
    public function welcome(Request $request): Response
    {
        return view('layouts/admin',[
            'admin' => [
                'username' => "admin"
            ]
        ]);
    }

    public function console(Request $request): Response
    {
        return view('console',[
            'admin' => [
                'username' => "admin"
            ]
        ]);
    }
}