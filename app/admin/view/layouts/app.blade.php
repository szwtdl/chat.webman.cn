<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <title>@yield('title')</title>
    @section('stylesheet')
        <link rel="stylesheet" href="/system/layui/css/layui.css" media="all">
        <link rel="stylesheet" href="/system/admin/css/admin.css" media="all">
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