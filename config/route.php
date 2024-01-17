<?php
/**
 * This file is part of webman.
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the MIT-LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @author    walkor<walkor@workerman.net>
 * @copyright walkor<walkor@workerman.net>
 * @link      http://www.workerman.net/
 * @license   http://www.opensource.org/licenses/mit-license.php MIT License
 */

use Webman\Route;
use app\middleware\AdminMiddleware;
use app\middleware\ApiMiddleware;

Route::get("/", ["app\\controller\\IndexController", "index"])->name("index");


Route::group("/user/", function () {
    Route::get("register", ["app\\controller\\LoginController", "register"])->name("user.register");
    Route::get("password/reset", ["app\\controller\\LoginController", "reset"])->name("user.password.reset");
    Route::get("login", ["app\\controller\\LoginController", "login"])->name("user.login");
    Route::get("logout", ["app\\controller\\LoginController", "logout"])->name("user.logout");
});

Route::group("/admin/", function () {
    Route::get("login", ["app\\admin\\controller\\LoginController", "login"])->name("admin.login");
    Route::get("logout", ["app\\admin\\controller\\LoginController", "logout"])->name("admin.logout");
    Route::post("check", ["app\\admin\\controller\\LoginController", "check"])->name("admin.check");

    Route::get("welcome", ["app\\admin\\controller\\IndexController", "welcome"])->name("admin.welcome")->middleware(AdminMiddleware::class);
    Route::any("console", ["app\\admin\\controller\\IndexController", "console"])->name("admin.console")->middleware(AdminMiddleware::class);

    Route::group("users/", function () {
        Route::get("index", ["app\\admin\\controller\\UserController", "index"])->name("admin.user.list");
        Route::get("result", ["app\\admin\\controller\\UserController", "result"])->name("admin.user.result");
        Route::get("create", ["app\\admin\\controller\\UserController", "create"])->name("admin.user.create");
        Route::post("save", ["app\\admin\\controller\\UserController", "save"])->name("admin.user.save");
        Route::get("edit", ["app\\admin\\controller\\UserController", "edit"])->name("admin.user.edit");
        Route::post("update", ["app\\admin\\controller\\UserController", "update"])->name("admin.user.update");
        Route::post("delete", ["app\\admin\\controller\\UserController", "delete"])->name("admin.user.delete");

        Route::group("bill/", function () {
            Route::get("index", ["app\\admin\\controller\\UserBillController", "index"])->name("admin.user.bill.list");
            Route::get("result", ["app\\admin\\controller\\UserBillController", "result"])->name("admin.user.bill.result");
            Route::get("edit", ["app\\admin\\controller\\UserBillController", "edit"])->name("admin.user.bill.edit");
        });

    })->middleware(AdminMiddleware::class);

    Route::group("apps/", function () {
        Route::get("index", ["app\\admin\\controller\\AppsController", "index"])->name("admin.apps.list");
        Route::get("result", ["app\\admin\\controller\\AppsController", "result"])->name("admin.apps.result");
        Route::get("create", ["app\\admin\\controller\\AppsController", "create"])->name("admin.apps.create");
        Route::post("save", ["app\\admin\\controller\\AppsController", "save"])->name("admin.apps.save");
        Route::get("edit", ["app\\admin\\controller\\AppsController", "edit"])->name("admin.apps.edit");
        Route::post("update", ["app\\admin\\controller\\AppsController", "update"])->name("admin.apps.update");
        Route::post("delete", ["app\\admin\\controller\\AppsController", "delete"])->name("admin.apps.delete");
    })->middleware(AdminMiddleware::class);

    Route::group("admin/", function () {
        Route::get("index", ["app\\admin\\controller\\AdminController", "index"])->name("admin.account.list");
        Route::get("result", ["app\\admin\\controller\\AdminController", "result"])->name("admin.account.result");
        Route::get("create", ["app\\admin\\controller\\AdminController", "create"])->name("admin.account.create");
        Route::post("save", ["app\\admin\\controller\\AdminController", "save"])->name("admin.account.save");
        Route::get("edit", ["app\\admin\\controller\\AdminController", "edit"])->name("admin.account.edit");
        Route::post("update", ["app\\admin\\controller\\AdminController", "update"])->name("admin.account.update");
        Route::post("delete", ["app\\admin\\controller\\AdminController", "delete"])->name("admin.account.delete");
    })->middleware(AdminMiddleware::class);
});