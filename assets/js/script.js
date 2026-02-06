
window.onscroll = function() {myFunction()};

var nav = document.querySelector("header");
var header = document.querySelector(".for-fixed");

var prt = nav.parentElement;

var sticky = nav.offsetTop+100;
function myFunction() {
    var wdth = window.innerWidth
    if(wdth<787){
        if (window.pageYOffset > sticky) {
            nav.classList.add("sticky");
            prt.classList.add('menu-change');
            header.style.paddingTop = '0';

        } else {
            nav.classList.remove("sticky");
            prt.classList.remove('menu-change');
            header.style.paddingTop = '0';
        }
    }else{
        if (window.pageYOffset > sticky) {
            nav.classList.add("sticky");
            prt.classList.add('menu-change');
            $('body').css({'margin-top':'60px'})
        } else {
            nav.classList.remove("sticky");
            prt.classList.remove('menu-change');
            $('body').css({'margin-top':'0'})

        }
    }

}



$(document).ready(function () {
    $('.manufacturers-brands_item').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,

        responsive: [
            {
                breakpoint: 999999,
                settings: "unslick",
            },
            {
                breakpoint: 992,
                settings: 'slick',
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        ]
    });
});





$(document).ready(function () {
    var time = 0;
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if (window.innerHeight < 380) {
        }
        if ($(this).hasClass('close-menu')) {
            $('.menu-cnt').addClass('transition-menu');
            $('.menu-header-mobile').css({'max-width': '100%', transition: '0.3s'})
            $('body').addClass('body_fix');
            var menu_li = $(".sidenav>ul>li");
            $(menu_li).each(function () {
                time++;
                $(this).css({'transition-delay': '0.' + time + 's'});
                $(this).addClass('anim-menu');
                $('.menu-cnt').addClass('transition-menu');
            })
        } else {
            $('.menu-cnt').addClass('menu-width');
            $('body').removeClass('body_fix');
            $('.menu-cnt').removeClass('transition-menu')
            time = 0;
            var menu_lis = $(".sidenav ul li");
            $(menu_lis).each(function () {
                if ($(this).hasClass('anim-menu')) {
                    $(this).removeClass('anim-menu');
                    $(this).css({'opacity': '1', transition: '0.2s'})
                }
            })
        }

    });

    $('.for-mobile-bg').on('click', function () {
        if ($('.open-menu').hasClass('close-menu')) {
            $('.open-menu').removeClass('close-menu')
        }
        $('.menu-cnt').css({width: '0%'});
        $('body').removeClass('body_fix');
        time = 0;
        var menu_li = $(".sidenav ul li");
        $(menu_li).each(function () {
            if ($(this).hasClass('anim-menu')) {
                $(this).removeClass('anim-menu');
                $(this).css({'opacity': '0', transition: '0.2s'})
            }
        })
    })
});



$('.reviews-customers_slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  swipeToSlide: true,
   responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
   
  ]
});


