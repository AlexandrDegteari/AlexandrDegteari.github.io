// var swiper = new Swiper('.swiper-container', {
//     slidesPerView: 3,
//     spaceBetween: 1,
//     slidesPerGroup: 1,
//     loop: true,
//     loopFillGroupWithBlank: true,
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
// });

$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        slidesPerView: 3,
        spaceBetween: 1,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
});

$(function () {



    /*
    if ($('.js-cols').length > 0) {
        $('.js-cols').responsiveEqualHeightGrid();  
    }
    */


    $(window).on('scroll', function(e) {
        var left = $(this).scrollLeft();
        $('#headerbar').css('left', -left);
    });  

    setHeaderWidth();
    $(window).on('resize', function () {
        setHeaderWidth();
    });


    /*
    if (jQuery().tooltip) {
        var Tooltip = $('[data-toggle="tooltip"]').tooltip({
            container: 'body',
            delay: {
                "show": 100,
                "hide": 10
            },
            trigger: 'hover'
        });
    } */   


    var go_top = $('#go-top'),
        header = $('#header'),
        footer = $('#footer');
    function goTop() {
        var windowTop = $(window).scrollTop();
        var offset_footer;
        var footer_h = footer.height();
        offset_footer = footer.offset().top - $(window).height();

        var startShow = 50;

        if (windowTop > startShow) {
            go_top.addClass('fixed');
            go_top.css('bottom', 25)
            if(!go_top.is(':visible')){
                go_top.stop().fadeIn();
            }
        }

        if (windowTop > offset_footer) {
            go_top.removeClass('fixed');
            go_top.css('bottom', windowTop - offset_footer + 15);
            if(!go_top.is(':visible')){
                go_top.stop().fadeIn();
            }
        }

        else if (windowTop < startShow) {
            go_top.stop().fadeOut();
            //go_top.css()
        }
    }

    go_top.on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({scrollTop: 0}, 1500, 'easeInOutCubic');
    });

    goTop();
    $(window).on('resize scroll', function () {
        goTop();
    });




});

function setHeaderWidth(){
    if (winSize() > 1024) {
        $('.header-content').css({
            width: winSize() + 'px'
        });
    }
    else {
        $('.header-content').css({
            'width': '1024px'
        });        
    }
}

function winSize() {
    return $(window).width();
}

$(document).ready(function () {
    $(window).on('scroll', function () {
        var scrTop = $(window).scrollTop();
        $('.cloud').each(function() {
            var elOffsetTop = $(this).offset().top;
            if(scrTop > elOffsetTop - 260) {
                $(this).addClass('show');

            }
        })

        if (scrTop > 0) {
            $('#headerbar').addClass('solid');
        } else {
            $('#headerbar').removeClass('solid');
        }
    });

    $('.b-section-13b .swiper-slide').each(function () {
        $(this).click(function () {
            var popup = $(this).data('popup');
            $('.b-section-13b .overlay').show();
            $(popup).show();
            $('#headerbar').hide();
            $('body').addClass('noscroll');

        })
    });

    $('.popup_slider .close').click(function () {
        $(this).parents('.popup_slider').hide();
        $('.b-section-13b .overlay').hide();
        $('#headerbar').show()
        $('body').removeClass('noscroll');
    })
    $('.b-section-13b .overlay').click(function () {
        $('.popup_slider').hide();
        $('.b-section-13b .overlay').hide();
        $('#headerbar').show()
        $('body').removeClass('noscroll');
    })
})

