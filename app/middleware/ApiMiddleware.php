<?php
namespace app\middleware;

use Webman\MiddlewareInterface;
use Webman\Http\Response;
use Webman\Http\Request;

class ApiMiddleware implements MiddlewareInterface
{
    public function process(Request $request, callable $next) : Response
    {
        return $next($request);
    }
    
}
