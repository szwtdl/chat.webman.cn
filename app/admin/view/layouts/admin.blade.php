@extends("layouts.app")
@section("title")
    后台管理系统
@endsection
@section("content")
    <div id="LAY_app">
        <div class="layui-layout layui-layout-admin">
            <div class="layui-header">
                <!-- 头部区域 -->
                <ul class="layui-nav layui-layout-left">
                    <li class="layui-nav-item layadmin-flexible" lay-unselect>
                        <a href="javascript:;" layadmin-event="flexible" title="侧边伸缩">
                            <i class="layui-icon layui-icon-shrink-right" id="LAY_app_flexible"></i>
                        </a>
                    </li>
                    <li class="layui-nav-item layui-hide-xs" lay-unselect>
                        <a href="/" title="前台">
                            <i class="layui-icon layui-icon-website"></i>
                        </a>
                    </li>
                    <li class="layui-nav-item" lay-unselect>
                        <a href="javascript:;" layadmin-event="refresh" title="刷新">
                            <i class="layui-icon layui-icon-refresh-3"></i>
                        </a>
                    </li>
                    <li class="layui-nav-item layui-hide-xs" lay-unselect>
                        <!--                    <input type="text" placeholder="搜索..." autocomplete="off" class="layui-input layui-input-search"-->
                        <!--                           layadmin-event="serach" lay-action="template/search.html?keywords=">-->
                    </li>
                    <span class="layui-nav-bar" style="left: 192px; top: 48px; width: 0px; opacity: 0;"></span>
                </ul>
                <ul class="layui-nav layui-layout-right" lay-filter="layadmin-layout-right">

                    {{--                    <li class="layui-nav-item" lay-unselect>--}}
                    {{--                        <a lay-href="" layadmin-event="message" lay-text="消息中心">--}}
                    {{--                            <i class="layui-icon layui-icon-notice"></i>--}}
                    {{--                            <!-- 如果有新消息，则显示小圆点 -->--}}
                    {{--                            <span class="layui-badge-dot"></span>--}}
                    {{--                        </a>--}}
                    {{--                    </li>--}}
                    <li class="layui-nav-item layui-hide-xs" lay-unselect>
                        <a href="javascript:;" layadmin-event="theme">
                            <i class="layui-icon layui-icon-theme"></i>
                        </a>
                    </li>
                    <li class="layui-nav-item layui-hide-xs" lay-unselect>
                        <a href="javascript:;" layadmin-event="note">
                            <i class="layui-icon layui-icon-note"></i>
                        </a>
                    </li>
                    <li class="layui-nav-item layui-hide-xs" lay-unselect>
                        <a href="javascript:;" layadmin-event="fullscreen">
                            <i class="layui-icon layui-icon-screen-full"></i>
                        </a>
                    </li>
                    <li class="layui-nav-item" lay-unselect>
                        <a href="javascript:;">
                            <cite>{{ isset($admin['username']) ?? 'sss' }}</cite>
                        </a>
                        <dl class="layui-nav-child">
                            <dd><a lay-href="/admin/admin/show">基本资料</a></dd>
                            <dd><a lay-href="/admin/admin/password">修改密码</a></dd>
                            <hr>
                            <dd style="text-align: center;"><a onclick="top.location.href='/admin/logout'">退出</a></dd>
                        </dl>
                    </li>

                    <li class="layui-nav-item layui-hide-xs" lay-unselect>
                        <a href="javascript:;" layadmin-event="about_info"><i
                                    class="layui-icon layui-icon-more-vertical"></i></a>
                    </li>
                    <li class="layui-nav-item layui-show-xs-inline-block layui-hide-sm" lay-unselect>
                        <a href="javascript:;" layadmin-event="more"><i class="layui-icon layui-icon-more-vertical"></i></a>
                    </li>
                </ul>
            </div>
            <!-- 侧边菜单 -->
            <div class="layui-side layui-side-menu">
                <div class="layui-side-scroll">
                    <div class="layui-logo">
                        <span>OpenAI 管理系统</span>
                    </div>

                    <ul class="layui-nav layui-nav-tree" lay-shrink="all" id="LAY-system-side-menu"
                        lay-filter="layadmin-system-side-menu">
                        <li data-name="home" class="layui-nav-item layui-nav-itemed layui-this">
                            <a lay-href="/admin/console" lay-tips="主页" lay-direction="2">
                                <i class="layui-icon layui-icon-home"></i>
                                <cite>控制台</cite>
                            </a>
                        </li>
                        <li data-name="order" class="layui-nav-item">
                            <a href="javascript:;" lay-tips="账号" lay-direction="2">
                                <i class="layui-icon layui-icon-user"></i>
                                <cite>账号管理</cite>
                                <i class="layui-icon layui-icon-down layui-nav-more"></i></a>
                            <dl class="layui-nav-child">
                                <dd><a lay-href="/admin/admin/index">管理账号</a></dd>
                                <dd><a lay-href="/admin/users/index">会员管理</a></dd>
                            </dl>
                        </li>
                        <li data-name="order" class="layui-nav-item">
                            <a href="javascript:;" lay-tips="订单" lay-direction="2">
                                <i class="layui-icon layui-icon-diamond"></i>
                                <cite>订单管理</cite>
                                <i class="layui-icon layui-icon-down layui-nav-more"></i></a>
                            <dl class="layui-nav-child">
                                <dd><a lay-href="/admin/users/order/index">会员订单</a></dd>
                            </dl>
                        </li>
                        <li data-name="order" class="layui-nav-item">
                            <a href="javascript:;" lay-tips="应用" lay-direction="2">
                                <i class="layui-icon layui-icon-app"></i>
                                <cite>应用管理</cite>
                                <i class="layui-icon layui-icon-down layui-nav-more"></i></a>
                            <dl class="layui-nav-child">
                                <dd><a lay-href="/admin/users/order/index">会员订单</a></dd>
                            </dl>
                        </li>
                        <li data-name="set" class="layui-nav-item">
                            <a href="javascript:;" lay-tips="设置" lay-direction="2">
                                <i class="layui-icon layui-icon-set"></i>
                                <cite>系统设置</cite>
                                <i class="layui-icon layui-icon-down layui-nav-more"></i></a>
                            <dl class="layui-nav-child">
                                <dd><a lay-href="/admin/system/set">系统设置</a></dd>
                                <dd><a lay-href="/admin/whitelist/index">IP白名单</a></dd>
                                <dd><a lay-href="/admin/system/clear">清空系统</a></dd>
                            </dl>
                        </li>
                        <span class="layui-nav-bar" style="top: 515px; height: 0px; opacity: 0;"></span>
                    </ul>
                </div>
            </div>
            <!-- 页面标签 -->
            <div class="layadmin-pagetabs" id="LAY_app_tabs">
                <div class="layui-icon layadmin-tabs-control layui-icon-prev" layadmin-event="leftPage"></div>
                <div class="layui-icon layadmin-tabs-control layui-icon-next" layadmin-event="rightPage"></div>
                <div class="layui-icon layadmin-tabs-control layui-icon-down">
                    <ul class="layui-nav layadmin-tabs-select" lay-filter="layadmin-pagetabs-nav">
                        <li class="layui-nav-item" lay-unselect>
                            <a href="javascript:;"></a>
                            <dl class="layui-nav-child layui-anim-fadein">
                                <dd layadmin-event="closeThisTabs"><a href="javascript:;">关闭当前标签页</a></dd>
                                <dd layadmin-event="closeOtherTabs"><a href="javascript:;">关闭其它标签页</a></dd>
                                <dd layadmin-event="closeAllTabs"><a href="javascript:;">关闭全部标签页</a></dd>
                            </dl>
                        </li>
                    </ul>
                </div>
                <div class="layui-tab" lay-unauto lay-allowClose="true" lay-filter="layadmin-layout-tabs">
                    <ul class="layui-tab-title" id="LAY_app_tabsheader">
                        <li lay-id="/admin/console" lay-attr="/admin/console" class="layui-this"><i
                                    class="layui-icon layui-icon-home"></i></li>
                    </ul>
                </div>
            </div>
            <!-- 主体内容 -->
            <div class="layui-body" id="LAY_app_body">
                <div class="layadmin-tabsbody-item layui-show">
                    <iframe src="/admin/console" frameborder="0" class="layadmin-iframe"></iframe>
                </div>
            </div>
            <!-- 辅助元素，一般用于移动设备下遮罩 -->
            <div class="layadmin-body-shade" layadmin-event="shade"></div>
        </div>
    </div>
@endsection
@section("javascript")
    @parent
    <script type="text/javascript">
        layui.config({
            base: '/system/layuiadmin/' //静态资源所在路径
        }).extend({
            index: 'lib/index' //主入口模块
        }).use("index");
    </script>
@endsection