<?php

namespace app\admin\controller;

use support\Request;
use support\Response;

class UserBillController extends BaseController
{
    public function index(Request $request): Response
    {
        return view('users/bill/index');
    }

    public function result(Request $request):Response
    {
        return view('users/bill/result');
    }

    public function edit(Request $request):Response
    {
        return view('users/bill/edit');
    }
}