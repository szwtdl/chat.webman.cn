<?php

namespace process;

use Workerman\Connection\AsyncTcpConnection;
use Workerman\Connection\TcpConnection;
use Workerman\Protocols\Http\Request;

class Proxy
{

    public function onMessage(TcpConnection $connection, Request $request)
    {
        $replace = [
            'api.example.com' => 'api.openai.com',
        ];
        $host = $request->host(true);
        if (!isset($replace[$host])) {
            return $connection->send(response('404 not found', 404));
        }
        $host = $replace[$host];
        $buffer = (string)$request;
        $con = new AsyncTcpConnection("tcp://$host:443", ['ssl' => [
            'verify_peer' => false
        ]]);
        $buffer = preg_replace("/Host: ?(.*?)\r\n/", "Host: $host\r\n", $buffer);
        $con->transport = 'ssl';
        $connection->protocol = null;
        $con->send($buffer);
        $con->pipe($connection);
        $connection->pipe($con);
        $con->connect();
    }
}