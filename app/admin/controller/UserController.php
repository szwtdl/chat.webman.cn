<?php

namespace app\admin\controller;

use support\Request;
use support\Response;

class UserController extends BaseController
{
    public function index(Request $request):Response
    {
        return view('users/index');
    }

    public function result(Request $request):Response
    {
        return view('users/result');
    }

    public function create(Request $request):Response
    {
        return view('users/create');
    }

    public function save(Request $request):Response
    {
        return view('users/save');
    }

    public function edit(Request $request):Response
    {
        return view('users/edit');
    }

    public function update(Request $request):Response
    {
        return view('users/update');
    }

    public function delete(Request $request):Response
    {
        return view('users/delete');
    }

}