//header ----------------------------------------------------------------------------/////////////////////////////////////////////////////////////

//scroll > AD show hide
var sect1Top = $('#sect1').offset().top
$(window).scroll(function () {
    var windowTop = $(this).scrollTop()
    if (windowTop > sect1Top) {
        $('.AD').slideUp()
    } else if (windowTop === 0) {
        $('.AD').slideDown()

    }
})

//AD btnClose
$('.btnClose').click(function () {
    $('.AD').slideUp()
})


// selectCatagory btn click > ul show
$('.ts_btn').click(function () {
    $('.selectCatagory ul').fadeToggle()
})

// selectCatagory >ul.textDeco, top > ul.utill textDeco
$('.textDeco li a').mouseenter(function () {
    $(this).css({
        'text-decoration': 'underline'
    })
})
$('.textDeco li a').mouseleave(function () {
    $('.textDeco li a').css({
        'text-decoration': 'none'
    })
})

//header menu
$('li.lv1').mouseenter(function () {
    $(this).find('ul.lv2').stop().slideDown()
})
$('li.lv1').mouseleave(function () {
    $('ul.lv2').stop().slideUp()
})

//mobileMenu show hide
$('.bar').click(function(){
            $('.mobileNav').animate({'left':'0%'})
})

$('.btnClose').click(function(){
            $('.mobileNav').animate({'left':'-24%'})
})
    
//#sect1 ----------------------------------------------------------------------------/////////////////////////////////////////////////////////////

// .mySwuper slide
var swiper1 = new Swiper(".mySwiper1", {
    loop: true,
    speed: 1200,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
})

// #sect2 ----------------------------------------------------------------------------/////////////////////////////////////////////////////////////

// tabMenu li
$('.tabMenu li').click(function (e) {
    $('.tabMenu li').removeClass('on')
    $(this).addClass('on')

    e.preventDefault()
    //tabItem show hide
    var idx = $(this).index()
    $('.tabItem').stop().hide()
    $('.tabItem').stop().eq(idx).fadeIn(500)
})


deviceCheck()


$(window).resize(function () {
    deviceCheck()
})

function deviceCheck() {
    var wid = $(this).width()
    // console.log(wid)

    //패드, 데스크탑
    if (wid > 768) {
        pc()

        //모바일
    } else {
        mobile()
    }
}

function pc() {

    
    // thumbnail.. travel...
    $('.thumbnail li').click(function (e) {
        e.preventDefault()
        $(this).addClass('on')
        $('.thumbnail li').animate({'width':'264px'},100)
        $('.thumbnail li').find('.txt_wrap').stop().animate({'opacity':'0'},0)

        $(this).stop().animate({'width':'600px'},100)
        $(this).find('.txt_wrap').stop().animate({'opacity':'1'},1000)
        $(this).find('.txt_wrap').addClass('depth')

    })
    $('.thumbnail2 li').click(function (e) {
        e.preventDefault()
        $(this).addClass('on')
        $('.thumbnail2 li').animate({'width':'264px'},100)
        $('.thumbnail2 li').find('.txt_wrap').stop().animate({'opacity':'0'},0)

        $(this).stop().animate({'width':'600px'},100)
        $(this).find('.txt_wrap').stop().animate({'opacity':'1'},1000)

    })
    $('.thumbnail3 li').click(function (e) {
        e.preventDefault()
        $(this).addClass('on')
        $('.thumbnail3 li').animate({'width':'264px'},100)
        $('.thumbnail3 li').find('.txt_wrap').stop().animate({'opacity':'0'},0)

        $(this).stop().animate({'width':'600px'},100)
        $(this).find('.txt_wrap').stop().animate({'opacity':'1'},1000)

    })
    $('.thumbnail4 li').click(function (e) {
        e.preventDefault()
        $(this).addClass('on')
        $('.thumbnail4 li').animate({'width':'264px'},100)
        $('.thumbnail4 li').find('.txt_wrap').stop().animate({'opacity':'0'},0)

        $(this).stop().animate({'width':'600px'},100)
        $(this).find('.txt_wrap').stop().animate({'opacity':'1'},1000)

    })
    $('.thumbnail5 li').click(function (e) {
        e.preventDefault()
        $(this).addClass('on')
        $('.thumbnail5 li').animate({'width':'264px'},100)
        $('.thumbnail5 li').find('.txt_wrap').stop().animate({'opacity':'0'},0)

        $(this).stop().animate({'width':'600px'},100)
        $(this).find('.txt_wrap').stop().animate({'opacity':'1'},1000)

    })
    $('.thumbnail6 li').click(function (e) {
        e.preventDefault()
        $(this).addClass('on')
        $('.thumbnail6 li').animate({'width':'264px'},100)
        $('.thumbnail6 li').find('.txt_wrap').stop().animate({'opacity':'0'},0)

        $(this).stop().animate({'width':'600px'},100)
        $(this).find('.txt_wrap').stop().animate({'opacity':'1'},1000)

    })
  // #sect6

    var stopId=0;
    stopId= setInterval(bannerRotate,50)

    function bannerRotate(){
        $('.cardRotate').animate({rotate:'+=10deg'},'50','linear', 'infinite')
        
    }
    $('.cardContainer').mouseenter(function(){
        $('.cardRotate').stop(1,0)
        clearInterval(stopId)    })

    $('.cardContainer').mouseleave(function(){
        stopId= setInterval(bannerRotate,50)
    })

    }
function mobile() {
    $('.tabItem li').click(function (e) {
    e.preventDefault()

    $('.tabItem li').find('.txt_wrap').stop().animate({'opacity':'0'})
    $('.tabItem li').removeClass()
    $('.tabItem li').find('.txt_wrap').removeClass('depth')

    })
}








// section 3,4,5 에 대한 자바 스크립트 


//베스트 셀러 탭메뉴
$('.tab_tit li').click(function (e) {
    e.preventDefault()
    $('.tab_tit li').find('a').removeClass('on')
    $(this).find('a').addClass('on')
    var idx = $(this).index()
    $('.books_wrap').hide()
    $('.books_wrap').eq(idx).fadeIn(1000)

})

//책 위에 마우스 이벤트 발생 
$('li a.bestBook').mouseenter(function () {
    $('li a.bestBook').removeClass('on')
    $(this).addClass('on')
}).mouseleave(function () {
    $('li a.bestBook').removeClass('on')
})


//스와이퍼 2 설정 
var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // scrollbar: {
    //     el: ".swiper-scrollbar",
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
})


//슬라이드 바우스 엔터하면 스탑 제어 
$('.newBook').mouseenter(function () {
    swiper1.autoplay.stop()
}).mouseleave(function () {
    swiper1.autoplay.start()
})


//스와이퍼 3 설정
var swiper3 = new Swiper(".mySwiper3", {
    effect: "fade",
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: true,
    loop: true,
});

// 탑으로가기  up------------------
$('btnScrollUp a').click(function (e) {
    e.preventDefault()
    home()
})

function home() {
    $('html, body').stop().animate({
        'scrollTop': '0'
    })

}

//마우스 휠이벤트
// $('section').mousewheel(function (event, delta) {
//     if (delta > 0) {
//         var prev = $(this).prev().offset().top
//         $('html, body').stop().animate({
//             'scrollTop': prev
//         }, 500, 'linear')
//     } else if (delta < 0) {
//         var next = $(this).next().offset().top
//         $('html, body').stop().animate({
//             'scrollTop': next
//         }, 500, 'linear')
//         $('span.up img').css({
//             'display': 'block'
//         })
//     }
// })