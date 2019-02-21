/**
 * Created by 路人甲 on 30/1/2019.
 */
$(function(){
    $(".header_43 .right-nav .li, .header_43 .nav .li").mouseenter(function(){
        $(this).find(".subnav").fadeIn();
    }).mouseleave(function(){
        $(this).find(".subnav").stop(true, true).fadeOut();
    });
    $(".header_43 .right-nav .profile-info").mouseenter(function(){
        var SubLiNum = $(this).find(".snav").length;
        var SubNavHeight = 36*SubLiNum+300;
        $(this).find(".subnav").fadeIn();
        $(this).addClass("on");
    }).mouseleave(function(){
        $(this).find(".subnav").stop(true, true).fadeOut();
        $(this).removeClass("on");
    });
});