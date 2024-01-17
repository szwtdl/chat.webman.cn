'use strict';
(function () {
    layui.use(['layer', 'form', 'util'], function () {
        var $ = layui.jquery,
            layer = layui.layer,
            form = layui.form;
        var install_config = [];
        form.on('submit(form)', function (data) {
            $.ajax({
                method: "POST",
                url: "/install/install/check",
                success: function (res) {
                    install_config['db'] = data.field;
                },
                error: function (err) {
                    console.log(err);
                }
            })
            return false;
        });
    });
})();