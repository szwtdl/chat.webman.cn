<?php

namespace app\admin\controller;

use support\Request;
use support\Response;

class AdminController extends BaseController
{
    public function index(Request $request): Response
    {
        return view('admin/index');
    }

    public function result(Request $request): Response
    {
        return view('admin/result');
    }

    public function create(Request $request): Response
    {
        return view('admin/create');
    }

    public function save(Request $request): Response
    {
        return view('admin/save');
    }

    public function edit(Request $request): Response
    {
        return view('admin/edit');
    }

    public function update(Request $request):Response
    {
        return view('admin/update');
    }

    public function delete(Request $request): Response
    {
        return view('admin/delete');
    }
}