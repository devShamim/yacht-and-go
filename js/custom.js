$(document).ready(function () {

    "use strict";

    //Intro Slider
    $('.intro-slider').owlCarousel({
        autoplay: true,
        autoplayHoverPause: true,
        items: 1,
        loop: true,
        nav: true,
        dots: true,
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        responsive: {
            1200: {
                nav: true
            },
            480: {
                nav: false
            }
        }
    });

    //.sri-carousel
    $('.sri-carousel').owlCarousel({
        autoplay: true,
        autoplayHoverPause: true,
        items: 1,
        loop: true,
        nav: false,
        dots: true,
        animateIn: "fadeIn",
        animateOut: "fadeOut"
    });

    //Testimonial Slider
    $('.testimonial-slider').owlCarousel({
        items: 2,
        loop: true,
        margin: 30,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            1200: {
                items: 2
            },
            600: {
                items: 1
            },
            0: {
                items: 1
            }
        }
    });

    //Yacht Image Slider
    $('.yacht-image-slider').owlCarousel({
        autoplay: true,
        items: 1,
        loop: true,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            1200: {
                items: 1
            },
            600: {
                items: 1
            },
            0: {
                items: 1
            }
        }
    });

    //Team Slider (About Us Page)
    $('.teams-carousel').owlCarousel({
        items: 4,
        margin: 30,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            1200: {
                items: 4
            },
            600: {
                items: 2,
                nav: false
            },
            0: {
                items: 1,
                nav: false
            }
        }
    });

    //Testimonial (About Us Page)
    $('.aut-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            1200: {
                items: 1
            },
            600: {
                items: 1
            },
            0: {
                items: 1
            }
        }
    });

    //jQuery Counter
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    //Sticky Menu
    $(".header-main").sticky({ topSpaing: 0 });

    //Video Popup
    $('.video-btn').magnificPopup({
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>',
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'http://www.youtube.com/embed/%id%?autoplay=1'
                }
            },
            srcAction: 'iframe_src'
        }
    });

    //Back To Top
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }

    //Mean Menu
    jQuery('header nav').meanmenu();

    //Intro Video
    jQuery(function () {
        jQuery("#intro-video").YTPlayer();
    });

    // Simple Timer
    $('#timer-wrapper').syotimer({
        year: 2019,
        month: 4,
        day: 1,
        hour: 12,
        minute: 30
    });

    $(window).on('load', function (e) {
        setTimeout(function () {
            $('.spinner').fadeOut("slow");
            setTimeout(function () {
                $('#prelaoder').fadeOut("slow");
                setTimeout(function () {
                    $('.content-block').addClass('animated fadeInDown').fadeIn("slow");
                    $('#footer').fadeIn('slow');
                }, 900);
            }, 700);
        }, 700);
    });
    
    //DatePicker
    $( "#pick-start-date" ).datepicker();


});