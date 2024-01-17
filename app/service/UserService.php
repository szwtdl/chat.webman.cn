<?php

namespace app\service;

use app\model\User;

class UserService extends CommonService
{
    protected $modelClass = User::class;

    public function create(array $data): bool
    {
        return true;
//        $model = new User();
//        $model->username = $data['username'];
//        $model->password = password_hash($data['password'], PASSWORD_DEFAULT);
//        $model->created_at = date('Y-m-d H:i:s');
//        $model->updated_at = date('Y-m-d H:i:s');
//        return $model->save();
    }
}