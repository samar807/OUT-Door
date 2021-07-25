$(document).ready(function () {
    $('.btn-search').click(function () {
        $('nav').addClass('fade');
        $('.btn-search').addClass('fadeout');
        $('.input-search').addClass('input-open');
        $('button').addClass('btn-open');
        $('form').addClass('open')
    });
    $('button').click(function () {
        $('nav').removeClass('fade');
        $('.btn-search').removeClass('fadeout');
        $('.input-search').removeClass('input-open');
        $('form').removeClass('open');
        $('button').removeClass('btn-open');
    });
    // 
    $('.scroll').click(function () {
        $('html').addClass('active')
    });
    $('.close-scroll').click(function () {
        $('html').removeClass('active')
    });
    
    $('.toggle').click(function () {
        $('.toggle').toggleClass('active');
        $('.header').addClass('clip-path');
        $('.slide-bar').addClass('open');
        $('nav').addClass('left');
        $('.search').addClass('left');

    });
    // toggle overflow
    $('.toggle').click(function () {
        $('html').addClass('active')
    });
    $('.open-search').click(function () {
        $('html').removeClass('active')
    });
    $('.open-search').click(function () {
        $('.header').removeClass('clip-path');
        $('.slide-bar').removeClass('open');
        $('nav').removeClass('left');

        $('button').removeClass('btn-open');
    });
    $('.close-search').click(function () {
        $('.form').addClass('open');
    });
    $('.open-search-form').click(function () {
        $('.form').removeClass('open');
        $('.search').removeClass('left');
        
    });
// Document Animation
    $(".scroll-btn").on("click", function() {
        $("html, body").animate({
        scrollTop: $(".about-us").offset().top
        }, 1000)
    });
    $(window).on("scroll", function() {
        if($(window).scrollTop() >= $("navbar").innerHeight()){
            $("navbar").addClass("scroll")
        }else{
            $("navbar").removeClass("scroll")
        }
      });
      $(window).on('scroll', function () {
        if ($(this).scrollTop() > 300) {
            $('.toggle').addClass('add');
        }
        else {
            $('.toggle').removeClass('add')
        }
    });
    })
