<?php

namespace app\service;

abstract class CommonService
{
    protected $model;
    protected $modelClass;

    public function __construct()
    {
        if (!$this->modelClass) {
            $this->model = new $this->modelClass();
        }
    }

    public function __call($name, $arguments)
    {
        return call_user_func_array([$this->model, $name], $arguments);
    }

    public static function __callStatic($name, $arguments)
    {
        return call_user_func_array([new static(), $name], $arguments);
    }

    public function add(array $data): bool
    {
        return $this->model->add($data);
    }
}