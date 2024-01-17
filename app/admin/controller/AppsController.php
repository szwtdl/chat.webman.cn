<?php

namespace app\admin\controller;

use support\Request;
use support\Response;

class AppsController extends BaseController
{
    public function index(Request $request):Response
    {
        return view('apps/index');
    }

    public function result(Request $request):Response
    {
        return view('apps/result');
    }

    public function create(Request $request):Response
    {
        return view('apps/create');
    }

    public function save(Request $request):Response
    {
        return view('apps/save');
    }

    public function edit(Request $request):Response
    {
        return view('apps/edit');
    }

    public function update(Request $request):Response
    {
        return view('apps/update');
    }

    public function delete(Request $request):Response
    {
        return view('apps/delete');
    }
}