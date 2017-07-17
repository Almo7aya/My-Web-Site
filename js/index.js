/*
    With The Name Of God!

    my web site V 0.0.1

    simple website for me By Ali Almohaya using FlexBox // DiskTop First
    29/6/2017
*/


$(function () {

    $(window).on('load', function () {
        $('.loader').fadeOut(900);
    });

    //inti nice scroll lib
    $("html").niceScroll({
        cursorcolor: "#7f8d9a",
        cursorwidth: "6px",
        cursorborderradius: 0,
        cursorborder: "1px solid #FFF"
    });

    // to set the header to the window height
    if ($(window).height() > 500) {
        $('header').height($(window).height());
        $('header .container').height($(window).height());
    } else {
        $('header').height(500);
        $('header .container').height(500);
    }

    
    // ######################################

    // to set the animate button
    (function ($) {
        var $img = $('.img'),
            $ul = $('nav ul'),
            status = false;
        $img.on('click', function () {

            if (! $img.hasClass('down')) {
                $img.toggleClass('active');
                $ul.stop(true, true);
                $ul.find('li').stop(true, true);
                if (! status) {
                    if ($window.width() > 540) {
                    $ul.animate({
                        width: 400,
                        padding: '0'
                    },400,function () {
                        $ul.find('li').slideDown(400);
                    });
                    } else {

                    $ul.animate({
                        width: "330px",
                        padding: '0'
                    },400,function () {
                        $ul.find('li').slideDown(400);
                    });

                    }

                    status = true;
                } else {
                    $ul.find('li').slideUp(400 ,function () {
                        $ul.animate({
                            width: 0,
                            padding: '10px'
                        },400);
                    });
                    status = false;
                }
            } else {
                scrollTo(0);
            }
        });
        function scrollTo(where) {
            $('html, body').animate({
                scrollTop: where
            }, 1200);
        }
        $lis = $ul.find('li');
        $lis.on('click', function () {
            var targetScrollTop = $($(this).data('class')).offset().top;
            scrollTo(targetScrollTop);
        });

        // For window scrolling
        var $window = $(window);
        var icoHeight = $img.offset().top;
        $window.on('scroll', function () {
            var winScroll = $window.scrollTop();

            if ($img.hasClass('active')) {
                $img.click();
            }

            // get the icon offset
            if ( winScroll >= icoHeight ) {
                $img.addClass('down');
                $img.css('top', winScroll - icoHeight);
            } else {
                $img.removeClass('down');
            }
        });
        var $imgWrapper = $('.imgWrapper');

    
        if ($window.width() < 1200 && $window.width() > 768) {
            $imgWrapper.height($('.card').height());
        } else {
            $imgWrapper.height('100%');
        }

        var hightCard = $('.card').height();
        $imgWrapper.find('img').height(hightCard);
    

        $window.on('resize', function () {
            if ($window.width() < 1200 && $window.width() > 768) {
                $imgWrapper.height($('.card').height()).find('img').height($('.card').height());
            } else {
                $imgWrapper.height('100%').find('img').height('100%');
            }
        });
    })(jQuery);
    // ######################################
});