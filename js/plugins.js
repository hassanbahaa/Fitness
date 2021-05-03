$(window).on("load", function () {
    'use strict';
    $(".pre-container").fadeOut(1000, function () {
        $(".preloader").fadeOut(500, function () {
            $("body").css("overflow", "auto");
        });
    });
    
});


$(document).ready(function(){


    $(".ham-burger").click(function(){
        $(".nav").toggleClass("open")
        $(this).toggleClass("active");
    })
    // close nav bar after select item
    $(".nav").children("ul").click(function(){
        $(".nav").removeClass("open")
        $(".ham-burger").removeClass("active");
    })

   $(".accordian-container").click(function(){
    $(".accordian-container").children(".body").slideUp();
    $(".accordian-container").removeClass("active")
    $(".accordian-container").children(".head").children(".fa").removeClass("rotate-arrow-down")
    $(this).children(".body").slideDown();
    $(this).addClass("active")
    $(this).children(".head").children(".fa").addClass("rotate-arrow-down")
    })

    // Go to Top

    var btn = $('.btn-box');

    $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
    });

    btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
    });



})


