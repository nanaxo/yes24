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
$('header nav').mouseenter(function () {
    $('header .lv2').stop().slideDown()
    $('.navBg').stop().slideDown()
})
$('header nav').mouseleave(function () {
    $('header .lv2').stop().slideUp()
    $('.navBg').stop().slideUp()
})

//#sect1 ----------------------------------------------------------------------------/////////////////////////////////////////////////////////////

// .mySwuper slide
var swiper1 = new Swiper(".mySwiper1", {
    loop: true,
    speed: 1800,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //   },
});

// .pageBtn
$('a.prev').click(function (e) {
    e.preventDefault()
    swiper.slidePrev(500)
})

$('a.next').click(function (e) {
    e.preventDefault()
    swiper.slideNext(500)
})

$('a.play').click(function (e) {
    e.preventDefault()
})

//autoplay stop toggle btn
var sw = 0
$('.play').click(function (e) {
    e.preventDefault()
    sw = !sw;
    if (sw) {
        swiper.autoplay.stop()
        $(this).addClass('on')
    } else {
        swiper.autoplay.start()
        $(this).removeClass('on')
    }
})

// #sect2 ----------------------------------------------------------------------------/////////////////////////////////////////////////////////////

// tabMenu li
$('.tabMenu li').click(function (e) {
    $('.tabMenu li').removeClass('on')
    $(this).addClass('on')

    e.preventDefault()
    //tabItem show hide
    var idx = $(this).index()
    $('.tabItem').hide()
    $('.tabItem').stop().eq(idx).fadeIn(1000)
})


deviceCheck()


//화면 리사이즈 이벤트가 발생하면 디바이스 위드 체크, 바아이콘 초기화
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
    // thumbnail
    $('.thumbnail li').mouseenter(function () {
        $('.thumbnail li').removeClass()
        $(this).addClass('on')
    })
    $('.thumbnail li').mouseleave(function () {
        $('.thumbnail li').removeClass()
        $(this).addClass('stay')

    })
    $('.thumbnail2 li').mouseenter(function () {
        $('.thumbnail2 li').removeClass()
        $(this).addClass('on')
    })
    $('.thumbnail2 li').mouseleave(function () {
        $('.thumbnail2 li').removeClass()
        $(this).addClass('stay')

    })
}

function mobile() {
    // $('.thumbnail li').removeClass()
    // $('.thumbnail2 li').removeClass()
    // $('.txt_wrap').css({'display':'none'})
}


// #sect6----------------------------------------------------------------------------/////////////////////////////////////////////////////////////
//offset 위치값 구하기
var sect6Top = $('#sect6').offset().top
// console.log('sect6='+sect6Top) //1770


//scroll event---------------------------------------------------------------------------
$(window).scroll(function () {
    //현재 스크롤값 구하기
    var windowTop = $(this).scrollTop()
    $('h3').text(windowTop)

    if (windowTop > sect6Top - 500) { //섹션6-500한 위치를 지나면
        $('h3').text('도착')
        $('#sect6 h2').animate({
            'opacity': '1',
            'margin-top': '-2%'
        }, 1000, function () {
            $('#sect6 .cardContainer li:nth-child(1)').animate({
                'opacity': '1',
                'margin-top': '-2%'
            }, 300, function () {
                $('#sect6 .cardContainer li:nth-child(2)').animate({
                    'opacity': '1',
                    'margin-top': '-2%'
                }, 300, function () {
                    $('#sect6 .cardContainer li:nth-child(3)').animate({
                        'opacity': '1',
                        'margin-top': '-2%'
                    }, 300, function () {
                        $('#sect6 .cardContainer li:nth-child(4)').animate({
                            'opacity': '1',
                            'margin-top': '-2%'
                        }, 300, function () {

                        })
                    })
                })
            })
        })
    } else if (windowTop < sect6Top) { //섹션6-500한 위치보다 스크롤 위로 올라가면            안먹고있음!!!!!!!!
        $('$sect6 .mainTxt').animate({
            'opacity': '0',
            'margin-top': '0%'
        }, 1000, function () {
            $('#sect6 .cardContainer li:nth-child(1)').animate({
                'opacity': '0',
                'margin-top': '0%'
            }, 300, function () {
                $('#sect6 .cardContainer li:nth-child(2)').animate({
                    'opacity': '0',
                    'margin-top': '0%'
                }, 300, function () {
                    $('#sect6 .cardContainer li:nth-child(3)').animate({
                        'opacity': '0',
                        'margin-top': '0%'
                    }, 300, function () {
                        $('#sect6 .cardContainer li:nth-child(4)').animate({
                            'opacity': '0',
                            'margin-top': '0%'
                        }, 300, function () {

                        })
                    })
                })
            })
        })
    }

})

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
    slidesPerView: 4,
    spaceBetween: 20,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
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