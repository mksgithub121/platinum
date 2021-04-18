$(function () {

    //header button
    $(".header_section .btn_head").on("click", function () {
        $(".side_btn_head").slideToggle();
    });
    //Search button
    $(".item_input1").on("click", function () {
        $(".side_btn_search1").slideToggle();
    });
    $(".item_input2").on("click", function () {
                $(".side_btn_search2").slideToggle();
    });





    // // preloader code  here
    // $(window).on("load", function () {
    //     $(".preloader").addClass("complete");
    // });

    // //    scroll animation aos plugin code  here 
    // AOS.init();

    // //  Sticky menu js code  here 
    // //  scroll down to hide navbar and scroll top to show navbar

    // var prevScrollpos = window.pageYOffset;
    // window.onscroll = function () {
    //     var currentScrollPos = window.pageYOffset;
    //     if (prevScrollpos > 50 && prevScrollpos > currentScrollPos) {
    //         $(".header_section").addClass("sticky");
    //     } else {
    //         $(".header_section").removeClass("sticky");
    //     }
    //     prevScrollpos = currentScrollPos;
    // }


    // //  scroll down to show navbar 

    // $(window).on("scroll", function () {
    //     var scrollAmount = $(window).scrollTop();
    //     if (scrollAmount > 200) {
    //         $(".header_section").addClass("sticky");
    //     } else {
    //         $(".header_section").removeClass("sticky");
    //     }
    // });

    // // Back To Top button  here
    // $(window).on("scroll", function () {
    //     var scrollAmount = $(window).scrollTop();
    //     if (scrollAmount > 200) {
    //         $(".backToTop").slideDown();

    //     } else {
    //         $(".backToTop").slideUp();
    //     }
    // });
    // $(".backToTop i").on("click", function () {
    //     $("html,body").animate({
    //         scrollTop: 0
    //     }, 1500);
    // });
    // //  Smooth section scroll code  here 
    // $(".header_section .menu ul li a").on('click', function (e) {
    //     e.preventDefault();
    //     var target = this.hash;
    //     var $target = $(target);
    //     $('html, body').stop().animate({
    //         'scrollTop': $target.offset().top
    //     }, 1000, 'swing', function () {
    //         // window.location.hash = target;
    //     });
    // });


});