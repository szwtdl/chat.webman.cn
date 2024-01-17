<?php

namespace app\controller;

use support\Response;

abstract class Controller
{

    /**
     * 统一响应格式
     * @param int $code
     * @param string $msg
     * @param array $data
     * @return Response
     */
    public static function Json(int $code = 0, string $msg = "ok", array $data = []): Response
    {
        return new Response(200, ['Content-Type' => 'application/json'], json_encode([
            'code' => $code,
            'msg' => $msg,
            'data' => $data
        ], JSON_UNESCAPED_UNICODE));
    }

    /**
     * 响应成功
     * @param array $data
     * @param string $msg
     * @param int $code
     * @return Response
     */
    public static function success(array $data = [], string $msg = "ok", int $code = 0): Response
    {
        return self::Json($code, $msg, $data);
    }

    /**
     * 响应失败
     * @param array $data
     * @param string $msg
     * @param int $code
     * @return Response
     */
    public static function fail(array $data = [], string $msg = "fail", int $code = 1): Response
    {
        return self::Json($code, $msg, $data);
    }
}