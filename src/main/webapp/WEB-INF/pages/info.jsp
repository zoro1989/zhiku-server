<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@include file="./layout/tag.jsp"%>
<!DOCTYPE HTML>
<html>
<head>
    <%@ include file="./layout/header.jsp"%>
    <link rel="stylesheet" href="${baseurl}/css/jquery-accordion-menu.css">
    <link rel="stylesheet" href="${baseurl}/css/info.css">
</head>
<body>
<c:set var="index" scope="session" value="${navIndex}"/>
<div class="fh5co-loader"></div>

<div id="page">
    <%@ include file="./layout/nav.jsp"%>
    <header id="fh5co-header" class="fh5co-cover fh5co-cover-sm bg-image2" role="banner" data-stellar-background-ratio="0.5">
        <div class="overlay"></div>
    </header>
    <div id="fh5co-blog">
        <div class="container">
            <div class="menu-box">
                <div id="jquery-accordion-menu" class="jquery-accordion-menu red">
                    <div class="jquery-accordion-menu-header" id="form"></div>
                    <ul id="demo-list">
                        <c:forEach items="${infoList}" var="it">
                            <li><a href="#"><i class="fa fa-cog"></i>${it.infoTitle} </a>
                                <c:if test="${it.infoItems != null && fn:length(it.infoItems) gt 0}">
                                    <ul class="submenu">
                                        <c:forEach items="${it.infoItems}" var="item">
                                            <li data-id="${item.id}"><a href="#">${item.infoTitle} </a></li>
                                        </c:forEach>
                                    </ul>
                                </c:if>
                            </li>
                        </c:forEach>
                    </ul>
                    <div class="jquery-accordion-menu-footer">
                        stable (v1.0.3)
                    </div>
                </div>
            </div>
            <div class="info-box">
                <iframe id="markdown-iframe" width="100%" height="100%" style="min-height: calc(100vh - 150px)" frameborder="0" scrolling="no" src="/admin/index.html#markdown-info-show?infoId=${infoList[0].infoItems[0].id}"></iframe>
            </div>
        </div>



    </div>
    <%@ include file="./layout/copyright.jsp"%>
</div>

<%@ include file="./layout/footerCommon.jsp"%>
<script src="${baseurl}/js/jquery-accordion-menu.js"></script>
<script type="text/javascript">

    $(function(){
        //顶部导航切换
        $("#demo-list li").click(function(){
            $("#demo-list li.active").removeClass("active")
            $(this).addClass("active");
        })
        $.expr[":"].Contains = function(a, i, m) {
            return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
        };
        jQuery("#jquery-accordion-menu").jqueryAccordionMenu();
        filterList($("#form"), $("#demo-list"));
        $(".menu-box .submenu li").click(function () {
            var infoId = $(this).attr("data-id")
            $("#markdown-iframe").attr("src", "/admin/index.html#markdown-info-show?infoId="+infoId)
            var iframe = document.getElementById('markdown-iframe');
            iframe.style.height = "0px";
            document.getElementById('markdown-iframe').contentWindow.location.reload(true);
        })

        var minHeight = $(window).height();
        startInit('markdown-iframe', minHeight);
    })
    var browserVersion = window.navigator.userAgent.toUpperCase();
    var isOpera = browserVersion.indexOf("OPERA") > -1 ? true : false;
    var isFireFox = browserVersion.indexOf("FIREFOX") > -1 ? true : false;
    var isChrome = browserVersion.indexOf("CHROME") > -1 ? true : false;
    var isSafari = browserVersion.indexOf("SAFARI") > -1 ? true : false;
    var isIE = (!!window.ActiveXObject || "ActiveXObject" in window);
    var isIE9More = (! -[1, ] == false);
    var refreshInterval = null;
    function reinitIframe(iframeId, minHeight) {
        try {
            var iframe = document.getElementById(iframeId);
            var bHeight = 0;
            if (isChrome == false && isSafari == false)
                bHeight = iframe.contentWindow.document.body.scrollHeight;

            var dHeight = 0;
            if (isFireFox == true)
                dHeight = iframe.contentWindow.document.documentElement.offsetHeight + 2;
            else if (isIE == false && isOpera == false)
                dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
            else if (isIE == true && isIE9More) {//ie9+
                var heightDeviation = bHeight - eval("window.IE9MoreRealHeight" + iframeId);
                if (heightDeviation == 0) {
                    bHeight += 3;
                } else if (heightDeviation != 3) {
                    eval("window.IE9MoreRealHeight" + iframeId + "=" + bHeight);
                    bHeight += 3;
                }
            }
            else//ie[6-8]、OPERA
                bHeight += 3;

            var height = Math.max(bHeight, dHeight);
            if (height < minHeight) height = minHeight;
            iframe.style.height = height + "px";
            $('.info-box').height(height);
        } catch (ex) { }
    }
    function startInit(iframeId, minHeight) {
        // eval("window.IE9MoreRealHeight" + iframeId + "=0");
        if (refreshInterval) {
            window.clearInterval(refreshInterval);
        }
        refreshInterval = window.setInterval("reinitIframe('" + iframeId + "'," + minHeight + ")", 100);
    }
    function filterList(header, list) {
        //@header 头部元素
        //@list 无需列表
        //创建一个搜素表单
        var form = $("<form>").attr({
            "class":"filterform",
            action:"#"
        }), input = $("<input>").attr({
            "class":"filterinput",
            type:"text"
        });
        $(form).append(input).appendTo(header);
        $(input).change(function() {
            var filter = $(this).val();
            if (filter) {
                var $matches = $(list).find("a:Contains(" + filter + ")").parent();
                if($matches.parent().hasClass("submenu")) {
                    $matches.parent().parent().slideDown();
                    $matches.slideDown();
                } else {
                    $("li", list).not($matches).slideUp();
                    $matches.slideDown();
                }
            } else {
                $(list).find("li").slideDown();
            }
            return false;
        }).keyup(function() {
            $(this).change();
        });
    }
</script>
</body>
</html>

