layui.define(["form", "upload"], function (t) {
    var i = layui.$, e = layui.layer, a = (layui.laytpl, layui.setter, layui.view, layui.admin), n = layui.form,
        s = layui.upload;
    i("body");
    n.verify({
        nickname: function (t, i) {
            return new RegExp("^[a-zA-Z0-9_\u4e00-\u9fa5\\s\xb7]+$").test(t) ? /(^\_)|(\__)|(\_+$)/.test(t) ? "\u7528\u6237\u540d\u9996\u5c3e\u4e0d\u80fd\u51fa\u73b0\u4e0b\u5212\u7ebf'_'" : /^\d+\d+\d$/.test(t) ? "\u7528\u6237\u540d\u4e0d\u80fd\u5168\u4e3a\u6570\u5b57" : void 0 : "\u7528\u6237\u540d\u4e0d\u80fd\u6709\u7279\u6b8a\u5b57\u7b26"
        },
        pass: [/^[\S]{6,12}$/, "\u5bc6\u7801\u5fc5\u987b6\u523012\u4f4d\uff0c\u4e14\u4e0d\u80fd\u51fa\u73b0\u7a7a\u683c"],
        repass: function (t) {
            if (t !== i("#LAY_password").val()) return "\u4e24\u6b21\u5bc6\u7801\u8f93\u5165\u4e0d\u4e00\u81f4"
        }
    }), n.on("submit(set_website)", function (t) {
        return e.msg(JSON.stringify(t.field)), !1
    }), n.on("submit(set_system_email)", function (t) {
        return e.msg(JSON.stringify(t.field)), !1
    }), n.on("submit(setmyinfo)", function (t) {
        return e.msg(JSON.stringify(t.field)), !1
    });
    var r = i("#LAY_avatarSrc");
    s.render({
        url: "/api/upload/", elem: "#LAY_avatarUpload", done: function (t) {
            0 == t.status ? r.val(t.url) : e.msg(t.msg, {icon: 5})
        }
    }), a.events.avartatPreview = function (t) {
        var i = r.val();
        e.photos({photos: {title: "\u67e5\u770b\u5934\u50cf", data: [{src: i}]}, shade: .01, closeBtn: 1, anim: 5})
    }, n.on("submit(setmypass)", function (t) {
        return e.msg(JSON.stringify(t.field)), !1
    }), t("set", {})
});