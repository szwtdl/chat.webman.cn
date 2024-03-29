layui.define(["index", "layim"], function (e) {
    var a = layui.$, t = (layui.admin, layui.element, layui.router(), layui.layim),
        n = ["\u60a8\u597d\uff0c\u6211\u73b0\u5728\u6709\u4e8b\u4e0d\u5728\uff0c\u4e00\u4f1a\u518d\u548c\u60a8\u8054\u7cfb\u3002", "\u4f60\u6ca1\u53d1\u9519\u5427\uff1fface[\u5fae\u7b11] ", "\u8fd9\u662f\u4e00\u6bb5\u6f14\u793a\u6d88\u606f face[\u54c8\u54c8] ", "\u6f14\u793a\u6d88\u606f face[\u5fc3] face[\u5fc3] face[\u5fc3] ", "face[\u5a01\u6b66] face[\u5a01\u6b66] face[\u5a01\u6b66] face[\u5a01\u6b66] ", "<\uff08@\uffe3\ufe36\uffe3@\uff09>", "\u4f60\u8981\u548c\u6211\u8bf4\u8bdd\uff1f\u4f60\u771f\u7684\u8981\u548c\u6211\u8bf4\u8bdd\uff1f\u4f60\u786e\u5b9a\u81ea\u5df1\u60f3\u8bf4\u5417\uff1f\u4f60\u4e00\u5b9a\u975e\u8bf4\u4e0d\u53ef\u5417\uff1f\u90a3\u4f60\u8bf4\u5427\uff0c\u8fd9\u662f\u81ea\u52a8\u56de\u590d\u3002", "face[\u9ed1\u7ebf]  \u4f60\u6162\u6162\u8bf4\uff0c\u522b\u6025\u2026\u2026", "(*^__^*) face[\u563b\u563b]"];
    t.config({
        init: {url: layui.setter.base + "json/layim/getList.js", data: {}},
        members: {url: layui.setter.base + "json/layim/getMembers.js", data: {}},
        uploadImage: {url: "", type: ""},
        uploadFile: {url: "", type: ""},
        isAudio: !0,
        isVideo: !0,
        tool: [{alias: "code", title: "\u4ee3\u7801", icon: "&#xe64e;"}],
        initSkin: "3.jpg",
        msgbox: "/layim/demo/msgbox.html",
        find: "/layim/demo/find.html",
        chatLog: "/layim/demo/chatlog.html"
    }), t.on("online", function (e) {
        layer.msg(e)
    }), t.on("sign", function (e) {
        layer.msg(e)
    }), t.on("tool(code)", function (e) {
        layer.prompt({
            title: "\u63d2\u5165\u4ee3\u7801 - \u5de5\u5177\u680f\u6269\u5c55\u793a\u4f8b",
            formType: 2,
            shade: 0
        }, function (a, t) {
            layer.close(t), e("[pre class=layui-code]" + a + "[/pre]")
        })
    }), t.on("ready", function (e) {
        t.msgbox(5)
    }), t.on("sendMessage", function (e) {
        var a = e.to;
        "friend" === a.type && t.setChatStatus('<span style="color:#FF5722;">\u5bf9\u65b9\u6b63\u5728\u8f93\u5165\u3002\u3002\u3002</span>'), setTimeout(function () {
            var e = {};
            "group" === a.type ? e = {
                username: "\u6a21\u62df\u7fa4\u5458" + (100 * Math.random() | 0),
                avatar: layui.cache.dir + "images/face/" + (72 * Math.random() | 0) + ".gif",
                id: a.id,
                type: a.type,
                content: n[9 * Math.random() | 0]
            } : (e = {
                username: a.name,
                avatar: a.avatar,
                id: a.id,
                type: a.type,
                content: n[9 * Math.random() | 0]
            }, t.setChatStatus('<span style="color:#FF5722;">\u5728\u7ebf</span>')), t.getMessage(e)
        }, 1e3)
    }), t.on("members", function (e) {
    }), t.on("chatChange", function (e) {
        var a = e.data.type;
        console.log(e.data.id), "friend" === a || "group" === a && t.getMessage({
            system: !0,
            id: e.data.id,
            type: "group",
            content: "\u6a21\u62df\u7fa4\u5458" + (100 * Math.random() | 0) + "\u52a0\u5165\u7fa4\u804a"
        })
    });
    var a = layui.jquery, i = {
        chat: function () {
            t.chat({
                name: "\u5c0f\u95f2",
                type: "friend",
                avatar: "//tva3.sinaimg.cn/crop.0.0.180.180.180/7f5f6861jw1e8qgp5bmzyj2050050aa8.jpg",
                id: 1008612
            }), layer.msg("\u4e5f\u5c31\u662f\u8bf4\uff0c\u6b64\u4eba\u53ef\u4ee5\u4e0d\u5728\u597d\u53cb\u9762\u677f\u91cc")
        }, message: function () {
            t.getMessage({
                username: "\u8d24\u5fc3",
                avatar: "//tp1.sinaimg.cn/1571889140/180/40030060651/1",
                id: "100001",
                type: "friend",
                content: "\u55e8\uff0c\u4f60\u597d\uff01\u6b22\u8fce\u4f53\u9a8cLayIM\u3002\u6f14\u793a\u6807\u8bb0\uff1a" + (new Date).getTime(),
                timestamp: (new Date).getTime()
            })
        }, messageAudio: function () {
            t.getMessage({
                username: "\u6797\u5fc3\u5982",
                avatar: "//tp3.sinaimg.cn/1223762662/180/5741707953/0",
                id: "76543",
                type: "friend",
                content: "audio[http://gddx.sc.chinaz.com/Files/DownLoad/sound1/201510/6473.mp3]",
                timestamp: (new Date).getTime()
            })
        }, messageVideo: function () {
            t.getMessage({
                username: "\u6797\u5fc3\u5982",
                avatar: "//tp3.sinaimg.cn/1223762662/180/5741707953/0",
                id: "76543",
                type: "friend",
                content: "video[http://www.w3school.com.cn//i/movie.ogg]",
                timestamp: (new Date).getTime()
            })
        }, messageTemp: function () {
            t.getMessage({
                username: "\u5c0f\u9171",
                avatar: "//tva1.sinaimg.cn/crop.7.0.736.736.50/bd986d61jw8f5x8bqtp00j20ku0kgabx.jpg",
                id: "198909151014",
                type: "friend",
                content: "\u4e34\u65f6\uff1a" + (new Date).getTime()
            })
        }, add: function () {
            t.add({
                type: "friend",
                username: "\u9ebb\u82b1\u75bc",
                avatar: "//tva1.sinaimg.cn/crop.0.0.720.720.180/005JKVuPjw8ers4osyzhaj30k00k075e.jpg",
                submit: function (e, a, t) {
                    layer.msg("\u597d\u53cb\u7533\u8bf7\u5df2\u53d1\u9001\uff0c\u8bf7\u7b49\u5f85\u5bf9\u65b9\u786e\u8ba4", {
                        icon: 1,
                        shade: .5
                    }, function () {
                        layer.close(t)
                    })
                }
            })
        }, addqun: function () {
            t.add({
                type: "group",
                username: "LayIM\u4f1a\u5458\u7fa4",
                avatar: "//tva2.sinaimg.cn/crop.0.0.180.180.50/6ddfa27bjw1e8qgp5bmzyj2050050aa8.jpg",
                submit: function (e, a, t) {
                    layer.msg("\u7533\u8bf7\u5df2\u53d1\u9001\uff0c\u8bf7\u7b49\u5f85\u7ba1\u7406\u5458\u786e\u8ba4", {
                        icon: 1,
                        shade: .5
                    }, function () {
                        layer.close(t)
                    })
                }
            })
        }, addFriend: function () {
            var e = {
                type: "friend",
                id: 1234560,
                username: "\u674e\u5f66\u5b8f",
                avatar: "//tva4.sinaimg.cn/crop.0.0.996.996.180/8b2b4e23jw8f14vkwwrmjj20ro0rpjsq.jpg",
                sign: "\u5168\u7403\u6700\u5927\u7684\u4e2d\u6587\u641c\u7d22\u5f15\u64ce"
            };
            t.setFriendGroup({
                type: e.type,
                username: e.username,
                avatar: e.avatar,
                group: t.cache().friend,
                submit: function (a, n) {
                    t.addList({
                        type: e.type,
                        username: e.username,
                        avatar: e.avatar,
                        groupid: a,
                        id: e.id,
                        sign: e.sign
                    }), layer.close(n)
                }
            })
        }, addGroup: function () {
            layer.msg("\u5df2\u6210\u529f\u628a[Angular\u5f00\u53d1]\u6dfb\u52a0\u5230\u7fa4\u7ec4\u91cc", {icon: 1}), t.addList({
                type: "group",
                avatar: "//tva3.sinaimg.cn/crop.64.106.361.361.50/7181dbb3jw8evfbtem8edj20ci0dpq3a.jpg",
                groupname: "Angular\u5f00\u53d1",
                id: "12333333",
                members: 0
            })
        }, removeFriend: function () {
            layer.msg("\u5df2\u6210\u529f\u5220\u9664[\u51e4\u59d0]", {icon: 1}), t.removeList({
                id: 121286,
                type: "friend"
            })
        }, removeGroup: function () {
            layer.msg("\u5df2\u6210\u529f\u5220\u9664[\u524d\u7aef\u7fa4]", {icon: 1}), t.removeList({
                id: 101,
                type: "group"
            })
        }, setGray: function () {
            t.setFriendStatus(168168, "offline"), layer.msg("\u5df2\u6210\u529f\u5c06\u597d\u53cb[\u9a6c\u5c0f\u4e91]\u7f6e\u7070", {icon: 1})
        }, unGray: function () {
            t.setFriendStatus(168168, "online"), layer.msg("\u6210\u529f\u53d6\u6d88\u597d\u53cb[\u9a6c\u5c0f\u4e91]\u7f6e\u7070\u72b6\u6001", {icon: 1})
        }, kefu1: function () {
            t.chat({
                name: "\u5728\u7ebf\u5ba2\u670d\u4e00",
                type: "kefu",
                avatar: "//tp1.sinaimg.cn/5619439268/180/40030060651/1",
                id: 1111111
            })
        }, kefu2: function () {
            t.chat({
                name: "\u5728\u7ebf\u5ba2\u670d\u4e8c",
                type: "kefu",
                avatar: "//tp1.sinaimg.cn/5619439268/180/40030060651/1",
                id: 2222222
            })
        }, mobile: function () {
            var e = layui.device(), a = "/layim/demo/mobile.html";
            if (e.android || e.ios) return location.href = a;
            var t = layer.open({
                type: 2,
                title: "layim \u79fb\u52a8\u7248\u6f14\u793a",
                content: a,
                area: ["375px", "667px"],
                shadeClose: !0,
                shade: .8,
                end: function () {
                    layer.close(t + 2)
                }
            })
        }
    };
    a(".LAY-senior-im-chat-demo .layui-btn").on("click", function () {
        var e = a(this).data("type");
        i[e] ? i[e].call(this) : ""
    }), e("im", {})
});