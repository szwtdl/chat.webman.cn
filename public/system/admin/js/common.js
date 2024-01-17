;!function () {
    var laytpl, stepTab, element, form, upload, laydate, repeat_flag = false;//防重复标识
    var specSearchableSelectArr = [];//规格项下拉搜索集合
    var specValueSearchableSelectArr = [];//规格值下拉搜索集合
    var goodsSpecFormat = [];//商品规格格式
    var goodsSkuData = [];//商品sku列表
    const GOODS_SPEC_MAX = 4;//规格项数量
    var goodsContent;//商品详情
    var goodsAttrFormat = [];//商品参数json
    var goodsImage = [];//商品主图
    const GOODS_IMAGE_MAX = 10;//商品主图数量
    const GOODS_SKU_MAX = 10;//商品SKU数量
    var attribute_img_type = 0;//规格项是否保存图片
    var sku_sort = [];
    var coupon_id = []; //社群二维码
    layui.use(['layer', 'form', 'upload', 'laytpl', 'dropdown', 'laydate', 'element', 'carousel', 'util', 'table'], function () {
        var $ = layui.jquery
        var util = layui.util
            , element = layui.element
            , layer = layui.layer
            , laytpl = layui.laytpl
            , table = layui.table
            , upload = layui.upload
            , dropdown = layui.dropdown
            , laydate = layui.laydate
            , form = layui.form;
        var isShow = false, area = '700px,650px';
        element.on('nav(layadmin-system-side-menu)', function (elem) {
            $("#LAY_app").removeClass('layadmin-side-shrink');
            isShow = false;
        });
        laydate.render({
            elem: '#start_time'
            , type: 'date'
        });
        laydate.render({elem: '#end_time'});
        upload.render({
            elem: '.upload' //绑定元素
            , url: uploadUrl
            , accept: 'file'
            , exts: uploadExt
            , size: uploadSize
            , headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
            , data: {name: 'files'}
            , before: function (obj) {
                layer.load();
            }
            , done: function (res) {
                $("input[name=photo]").val(res.url);
                layer.closeAll('loading'); //关闭loading
            }
            , choose: function (obj) {
                obj.preview(function (index, file, result) {
                    $(".upload").attr('src', result);
                })
            }
            , error: function (e) {
                layer.closeAll('loading'); //关闭loading
            }
        });
        util.event("layadmin-event", {
            flexible: function () {
                var w = $(window).width();
                if (w < 1200) {
                    console.log(isShow);
                    if (isShow === false) {
                        isShow = true;
                        $("#LAY_app_flexible").removeClass('layui-icon-shrink-right');
                        $("#LAY_app_flexible").addClass("layui-icon-spread-left");
                        $("#LAY_app").addClass('layadmin-side-spread-sm');
                    } else {
                        isShow = false;
                        $("#LAY_app_flexible").removeClass('layui-icon-spread-left');
                        $("#LAY_app_flexible").addClass("layui-icon-shrink-right");
                        $("#LAY_app").removeClass('layadmin-side-spread-sm');
                    }
                } else {
                    if (isShow === false) {
                        isShow = true;
                        $("#LAY_app_flexible").removeClass('layui-icon-shrink-right');
                        $("#LAY_app_flexible").addClass("layui-icon-spread-left");
                        $("#LAY_app").addClass('layadmin-side-shrink');
                    } else {
                        isShow = false;
                        $("#LAY_app_flexible").removeClass('layui-icon-spread-left');
                        $("#LAY_app_flexible").addClass("layui-icon-shrink-right");
                        $("#LAY_app").removeClass('layadmin-side-shrink');
                    }
                }
            },
            fullscreen: function () {
                var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
                if (fullscreenElement == null) {
                    entryFullScreen();
                } else {
                    exitFullScreen();
                }
            },
            refresh: function () {
                window.location.reload();
            },
            logout: function () {
                window.location.href = $(this).attr('lay-href');
            },
            cache: function () {
                window.location.href = $(this).attr('lay-href');
            },
            user: function () {
                var tmp = $(this).attr('lay-data'), open = $(this).attr('lay-open');
                area = tmp === undefined ? area : tmp;
                console.log(Boolean(open));
                layer.open({
                    type: 2,
                    maxmin: false,
                    title: $(this).attr('lay-title'),
                    area: area.split(','),
                    content: $(this).attr('lay-href')
                });
            },
            pass: function () {
                layer.open({
                    type: 2,
                    title: '修改密码',
                    area: ['450px', '450px'],
                    content: $(this).attr('lay-href')
                })
            },
            shade: function () {
                isShow = false;
                $("#LAY_app_flexible").removeClass('layui-icon-spread-left');
                $("#LAY_app_flexible").addClass("layui-icon-shrink-right");
                $("#LAY_app").removeClass('layadmin-side-spread-sm');
            },
            media: function () {
                layer.open({
                    type: 1,
                    title: '本地上传',
                    area: ['580px', '430px'],
                    content: $('#multuple_html'),
                    btn: ['提交', '返回']
                });
            }
        });
        util.event('lay-active', {
            add: function () {
                var tmp = $(this).attr('lay-data'), open = $(this).attr('lay-open');
                area = tmp === undefined ? area : tmp;
                layer.open({
                    type: 2,
                    maxmin: Boolean(open),
                    title: $(this).attr('lay-title'),
                    area: area.split(','),
                    content: $(this).attr('lay-href')
                });
            },
            install: function () {
                $.ajax({
                    url: $(this).attr('lay-href'),
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    },
                    method: 'POST',
                    dataType: 'json',
                    success: function (res) {
                        layer.msg(res.msg, {icon: res.code === 201 ? 5 : 1, time: 1500}, function () {
                            window.location.reload();
                        })
                    },
                    error: function () {
                        layer.msg("请求失败", {icon: 5, time: 1500});
                    }
                });
            },
            uninstall: function () {
                var url = $(this).attr('lay-href');
                layer.confirm($(this).attr('lay-title'), {icon: 3, title: '提示'}, function () {
                    $.ajax({
                        url: url,
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        },
                        method: 'POST',
                        dataType: 'json',
                        success: function (res) {
                            layer.msg(res.msg, {icon: res.code === 201 ? 5 : 1, time: 1500}, function () {
                                window.location.reload();
                            });
                        },
                        error: function () {
                            layer.msg("请求失败", {icon: 5, time: 1500});
                        }
                    });
                });
            },
            edit: function () {
                var tmp = $(this).attr('lay-data'),
                    open = $(this).attr('lay-open') !== "0";
                area = tmp === undefined ? area : tmp;
                layer.open({
                    type: 2,
                    maxmin: open,
                    title: $(this).attr('lay-title'),
                    area: area.split(','),
                    content: $(this).attr('lay-href'),
                })
            }
        });
        table.on('tool(table)', function (obj) {
            var data = obj.data, event = obj.event, tr = obj.tr;
            switch (event) {
                case 'edit':
                    var tmp = $(this).attr('lay-data'),
                        open = $(this).attr('lay-open') !== "0";
                    area = tmp === undefined ? area : tmp;
                    layer.open({
                        type: 2,
                        maxmin: open,
                        title: $(this).attr('lay-title'),
                        area: area.split(','),
                        content: $(this).attr('lay-href') + '?id=' + data.id,
                    })
                    break;
                case 'delete':
                    var url = $(this).attr('lay-href');
                    layer.confirm($(this).attr('lay-title'), {icon: 3, title: '提示'}, function () {
                        $.ajax({
                            url: url,
                            headers: {
                                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                            },
                            method: 'POST',
                            dataType: 'json',
                            data: {id: data.id},
                            success: function (res) {
                                layer.msg(res.msg, {icon: res.code === 201 ? 5 : 1})
                            },
                            error: function () {
                                layer.msg("请求失败", {icon: 5, time: 1500});
                            }
                        });
                    });
                    break;
            }
        });
        form.on('submit(form)', function (data) {
            $.ajax({
                url: $(this).attr('lay-href'),
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                method: 'POST',
                dataType: 'json',
                data: data.field,
                success: function (res) {
                    layer.msg(res.msg, {icon: res.code === 201 ? 5 : 1})
                },
                error: function (err) {
                    var errors = err.responseJSON.errors;
                    var form_errors = '';
                    $.each(errors, function (i) {
                        form_errors += '<div>' + errors[i] + '</div>';
                    });
                    layer.msg(form_errors, {icon: 5, time: 1500});
                }
            });
            return false;
        });
        form.on('submit(filter)', function (data) {
            table.reload('table', {
                url: $(this).data('lay-href')
                , where: data.field
                , page: {curr: 1}
            });
            return false;
        });
        table.on('row(table)', function (obj) {
            console.log(obj.tr) //得到当前行元素对象
            console.log(obj.data) //得到当前行数据
        });
        $("body").on("click", ".js-add-goods-image", function () {
            openAlbum(function (data) {
                for (var i = 0; i < data.length; i++) {
                    if (goodsImage.length < GOODS_IMAGE_MAX) goodsImage.push(data[i].url);
                }
                refreshGoodsImage();
            }, GOODS_IMAGE_MAX, 1);
        });


        // $(".js-add-goods-image").on('click', function () {
        //     layer.open({
        //         type: 2,
        //         title: '素材管理',
        //         fixed: false, //不固定
        //         area: ['950px', '600px'],
        //         content: ["/admin/media/list", 'no'],
        //         btn: ['保存', '返回'],
        //         yes: function (index, layero) {
        //             var iframeWin = window[layero.find('iframe')[0]['name']];
        //             iframeWin.getCheckItem(function (obj) {
        //                 if (typeof callback == "string") {
        //                     try {
        //                         eval(callback + '(obj)');
        //                         layer.close(index);
        //                     } catch (e) {
        //                         console.error('回调函数' + callback + '未定义');
        //                     }
        //                 } else if (typeof callback == "function") {
        //                     callback(obj);
        //                     layer.close(index);
        //                 }
        //
        //             });
        //         }
        //     })
        // });

        /**
         * 打开相册
         * display_type img-选择图片，icon-选择icon
         */
        function openAlbum(callback, imgNum = 9999, is_thumb = 0, type = 'img', display_type = "img") {
            layer.open({
                    type: 2,
                    // closeBtn: 0,
                    title: '素材管理',
                    area: ['950px', '600px'],
                    fixed: false, //不固定
                    btn: ['保存', '返回'],
                    content: ["/admin/media/list", 'no'],
                    // content: ns.url("shop/album/album?imgNum=" + imgNum + "&is_thumb=" + is_thumb + '&type=' + type + '&site_id=' + ns_url.siteId + '&app_module=' + ns_url.appModule + '&display_type=' + display_type),
                    yes: function (index, layero) {
                        var iframeWin = window[layero.find('iframe')[0]['name']];//得到iframe页的窗口对象，执行iframe页的方法：
                        iframeWin.getCheckItem(function (obj) {
                            if (typeof callback == "string") {
                                try {
                                    eval(callback + '(obj)');
                                    layer.closeAll('iframe');
                                } catch (e) {
                                    console.error('回调函数' + callback + '未定义');
                                }
                            } else if (typeof callback == "function") {
                                callback(obj);
                                layer.closeAll('iframe');
                            }
                            layer.closeAll('iframe');
                        });
                    },
                    cancel: function(index, layero, that){
                        layer.closeAll('iframe');
                    },
                });
        }

        //渲染商品主图列表
        function refreshGoodsImage() {
            var goods_image_template = $("#goodsImage").html();
            var data = {
                list: goodsImage,
                max: GOODS_IMAGE_MAX
            };
            laytpl(goods_image_template).render(data, function (html) {
                $(".js-goods-image").html(html);
                //加载图片放大
                // loadImgMagnify();
                if (goodsImage.length) {
                    //预览
                    $(".js-goods-image .js-preview").click(function () {
                        $(this).parent().prev().find("img").click();
                    });
                    //图片删除
                    $(".js-goods-image .js-delete").click(function () {
                        var index = $(this).attr("data-index");
                        goodsImage.splice(index, 1);
                        refreshGoodsImage();
                    });

                    // 拖拽
                    // $('.js-goods-image .upload_img_square_item').arrangeable({
                    //     //拖拽结束后执行回调
                    //     callback: function (e) {
                    //         var indexBefore = $(e).attr("data-index");//拖拽前的原始位置
                    //         var indexAfter = $(e).index();//拖拽后的位置
                    //         var temp = goodsImage[indexBefore];
                    //         goodsImage[indexBefore] = goodsImage[indexAfter];
                    //         goodsImage[indexAfter] = temp;
                    //         refreshGoodsImage();
                    //     }
                    // });
                }

                //最多传十张图
                if (goodsImage.length < GOODS_IMAGE_MAX) {
                    $(".js-add-goods-image").show();
                } else {
                    $(".js-add-goods-image").hide();
                }

                // 清空规格的图片
                for (var i = 0; i < goodsSkuData.length; i++) {
                    if (goodsSkuData[i].sku_images.length == 0) goodsSkuData[i].sku_image = '';
                }

            });
        }
    });
}();

// 进入全屏
function entryFullScreen() {
    var docE = document.documentElement;
    if (docE.requestFullScreen) {
        docE.requestFullScreen();
    } else if (docE.mozRequestFullScreen) {
        docE.mozRequestFullScreen();
    } else if (docE.webkitRequestFullScreen) {
        docE.webkitRequestFullScreen();
    }
}

// 退出全屏
function exitFullScreen() {
    var docE = document;
    if (docE.exitFullscreen) {
        docE.exitFullscreen();
    } else if (docE.mozCancelFullScreen) {
        docE.mozCancelFullScreen();
    } else if (docE.webkitCancelFullScreen) {
        docE.webkitCancelFullScreen();
    }
}

