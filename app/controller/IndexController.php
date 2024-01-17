<?php

namespace app\controller;

use support\Request;
use support\Response;

class IndexController extends Controller
{
    public function index(Request $request):Response
    {
        return view('index/index',[
            'name' => "world"
        ]);
    }
}
