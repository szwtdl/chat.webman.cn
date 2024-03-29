layui.define(function (e) {
    var a = layui.admin;
    layui.use(["admin", "carousel"], function () {
        var e = layui.$, a = (layui.admin, layui.carousel), l = layui.element, t = layui.device();
        e(".layadmin-carousel").each(function () {
            var l = e(this);
            a.render({
                elem: this,
                width: "100%",
                arrow: "none",
                interval: l.data("interval"),
                autoplay: l.data("autoplay") === !0,
                trigger: t.ios || t.android ? "click" : "hover",
                anim: l.data("anim")
            })
        }), l.render("progress")
    }), layui.use(["carousel", "echarts"], function () {
        var e = layui.$, a = (layui.carousel, layui.echarts), l = [], t = [{
            title: {subtext: "\u5b8c\u5168\u5b9e\u51b5\u7403\u5458\u6570\u636e", textStyle: {fontSize: 14}},
            tooltip: {trigger: "axis"},
            legend: {x: "left", data: ["\u7f57\u7eb3\u5c14\u591a", "\u820d\u666e\u7434\u79d1"]},
            polar: [{
                indicator: [{text: "\u8fdb\u653b", max: 100}, {
                    text: "\u9632\u5b88",
                    max: 100
                }, {text: "\u4f53\u80fd", max: 100}, {text: "\u901f\u5ea6", max: 100}, {
                    text: "\u529b\u91cf",
                    max: 100
                }, {text: "\u6280\u5de7", max: 100}], radius: 130
            }],
            series: [{
                type: "radar",
                center: ["50%", "50%"],
                itemStyle: {normal: {areaStyle: {type: "default"}}},
                data: [{
                    value: [97, 42, 88, 94, 90, 86],
                    name: "\u820d\u666e\u7434\u79d1"
                }, {value: [97, 32, 74, 95, 88, 92], name: "\u7f57\u7eb3\u5c14\u591a"}]
            }]
        }], i = e("#LAY-index-pageone").children("div"), n = function (e) {
            l[e] = a.init(i[e], layui.echartsTheme), l[e].setOption(t[e]), window.onresize = l[e].resize
        };
        i[0] && n(0)
    }), layui.use(["carousel", "echarts"], function () {
        var e = layui.$, a = (layui.carousel, layui.echarts), l = [], t = [{
            tooltip: {trigger: "axis"},
            calculable: !0,
            legend: {data: ["\u8bbf\u95ee\u91cf", "\u4e0b\u8f7d\u91cf", "\u5e73\u5747\u8bbf\u95ee\u91cf"]},
            xAxis: [{
                type: "category",
                data: ["1\u6708", "2\u6708", "3\u6708", "4\u6708", "5\u6708", "6\u6708", "7\u6708", "8\u6708", "9\u6708", "10\u6708", "11\u6708", "12\u6708"]
            }],
            yAxis: [{
                type: "value",
                name: "\u8bbf\u95ee\u91cf",
                axisLabel: {formatter: "{value} \u4e07"}
            }, {type: "value", name: "\u4e0b\u8f7d\u91cf", axisLabel: {formatter: "{value} \u4e07"}}],
            series: [{
                name: "\u8bbf\u95ee\u91cf",
                type: "line",
                data: [900, 850, 950, 1e3, 1100, 1050, 1e3, 1150, 1250, 1370, 1250, 1100]
            }, {
                name: "\u4e0b\u8f7d\u91cf",
                type: "line",
                yAxisIndex: 1,
                data: [850, 850, 800, 950, 1e3, 950, 950, 1150, 1100, 1240, 1e3, 950]
            }, {
                name: "\u5e73\u5747\u8bbf\u95ee\u91cf",
                type: "line",
                data: [870, 850, 850, 950, 1050, 1e3, 980, 1150, 1e3, 1300, 1150, 1e3]
            }]
        }], i = e("#LAY-index-pagetwo").children("div"), n = function (e) {
            l[e] = a.init(i[e], layui.echartsTheme), l[e].setOption(t[e]), window.onresize = l[e].resize
        };
        i[0] && n(0)
    }), layui.use(["carousel", "echarts"], function () {
        var e = layui.$, a = (layui.carousel, layui.echarts), l = [], t = [{
            title: {text: "\u8bbf\u5ba2\u5730\u533a\u5206\u5e03", subtext: "\u4e0d\u5b8c\u5168\u7edf\u8ba1"},
            tooltip: {trigger: "item"},
            dataRange: {orient: "horizontal", min: 0, max: 6e4, text: ["\u9ad8", "\u4f4e"], splitNumber: 0},
            series: [{
                name: "\u8bbf\u5ba2\u5730\u533a\u5206\u5e03",
                type: "map",
                mapType: "china",
                selectedMode: "multiple",
                itemStyle: {normal: {label: {show: !0}}, emphasis: {label: {show: !0}}},
                data: [{name: "\u897f\u85cf", value: 60}, {name: "\u9752\u6d77", value: 167}, {
                    name: "\u5b81\u590f",
                    value: 210
                }, {name: "\u6d77\u5357", value: 252}, {name: "\u7518\u8083", value: 502}, {
                    name: "\u8d35\u5dde",
                    value: 570
                }, {name: "\u65b0\u7586", value: 661}, {name: "\u4e91\u5357", value: 8890}, {
                    name: "\u91cd\u5e86",
                    value: 10010
                }, {name: "\u5409\u6797", value: 5056}, {name: "\u5c71\u897f", value: 2123}, {
                    name: "\u5929\u6d25",
                    value: 9130
                }, {name: "\u6c5f\u897f", value: 10170}, {name: "\u5e7f\u897f", value: 6172}, {
                    name: "\u9655\u897f",
                    value: 9251
                }, {name: "\u9ed1\u9f99\u6c5f", value: 5125}, {
                    name: "\u5185\u8499\u53e4",
                    value: 1435
                }, {name: "\u5b89\u5fbd", value: 9530}, {name: "\u5317\u4eac", value: 51919}, {
                    name: "\u798f\u5efa",
                    value: 3756
                }, {name: "\u4e0a\u6d77", value: 59190}, {name: "\u6e56\u5317", value: 37109}, {
                    name: "\u6e56\u5357",
                    value: 8966
                }, {name: "\u56db\u5ddd", value: 31020}, {name: "\u8fbd\u5b81", value: 7222}, {
                    name: "\u6cb3\u5317",
                    value: 3451
                }, {name: "\u6cb3\u5357", value: 9693}, {name: "\u6d59\u6c5f", value: 62310}, {
                    name: "\u5c71\u4e1c",
                    value: 39231
                }, {name: "\u6c5f\u82cf", value: 35911}, {name: "\u5e7f\u4e1c", value: 55891}]
            }]
        }], i = e("#LAY-index-pagethree").children("div"), n = function (e) {
            l[e] = a.init(i[e], layui.echartsTheme), l[e].setOption(t[e]), window.onresize = l[e].resize
        };
        i[0] && n(0)
    }), layui.use("table", function () {
        var e = (layui.$, layui.table);
        // e.render({
        //     elem: "#LAY-index-prograss",
        //     url: layui.setter.base + "json/console/prograss.js",
        //     cols: [[{type: "checkbox", fixed: "left"}, {field: "prograss", title: "\u4efb\u52a1"}, {
        //         field: "time",
        //         title: "\u6240\u9700\u65f6\u95f4"
        //     }, {
        //         field: "complete", title: "\u5b8c\u6210\u60c5\u51b5", templet: function (e) {
        //             return "\u5df2\u5b8c\u6210" == e.complete ? '<del style="color: #5FB878;">' + e.complete + "</del>" : "\u8fdb\u884c\u4e2d" == e.complete ? '<span style="color: #FFB800;">' + e.complete + "</span>" : '<span style="color: #FF5722;">' + e.complete + "</span>"
        //         }
        //     }]],
        //     skin: "line"
        // })
    }), a.events.replyNote = function (e) {
        var a = e.data("id");
        layer.prompt({title: "\u56de\u590d\u7559\u8a00 ID:" + a, formType: 2}, function (e, a) {
            layer.msg("\u5f97\u5230\uff1a" + e), layer.close(a)
        })
    }, e("sample", {})
});