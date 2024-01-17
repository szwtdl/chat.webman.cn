<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="renderer" content="webkit">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>@yield('title')</title>
    @section('stylesheet')
        <link rel="stylesheet" href="/system/layui/css/layui.css" media="all">
        <link rel="stylesheet" href="/system/admin/css/admin.css" media="all">
        <style>
            html{
                background-color: #ffffff!important;
            }
        </style>
    @show
</head>
<body class="layui-layout-body">
@yield('content')
@section('javascript')
    <script type="text/javascript" src="/system/layui/layui.js"></script>
    <script type="text/javascript" src="/system/admin/js/jquery-2.1.1.min.js"></script>
@show
</body>
</html>