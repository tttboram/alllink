$(function () {
    langdrop();
    tabEvent();
    slideMenu();
    initSlick();
    headerScroll();
    slickEvent();
});

//다국어 드롭다운
function langdrop() {
    const dropBtn = $('.language-selector button');
    const dropdown = $('.language-selector');

    dropBtn.on('click', function () {
        dropdown.toggleClass('active');
    });

    $(document).on('click', function (event) {
        if (!$(event.target).closest('.language-selector').length) {
            dropdown.removeClass('active');
        }
    })
}

//메인 컨텐츠 탭

function tabEvent() {

    let tabBtn = $('.tab-list .tab');
    let tabBox = $('.tab-content .cont');

    tabBtn.on('click', function () {
        const idx = $(this).index();
        tabBtn.removeClass('on');
        $(this).addClass('on');
        console.log(idx)
        tabBox.removeClass('on');
        $('.tab-content .cont:eq(' + idx + ')').addClass('on');
    })
}

function slideMenu() {
    $('.nav-btn').on('click', function () {
        if ($(this).hasClass('slide-on')) {
            $('header').removeClass('slide-on');
            $('.nav-btn').removeClass('slide-on');
            $('.side-menu').removeClass('slide-on');
        } else {
            $('header').addClass('slide-on');
            $('.nav-btn').addClass('slide-on');
            $('.side-menu').addClass('slide-on');
        }
    })
}
function initSlick() {
    if (window.innerWidth <= 768) {  // 모바일 화면 (768px 이하)
        // 이미 초기화된 Slick이 있으면 다시 초기화하지 않음
        if (!$('.tab-list').hasClass('slick-initialized')) {
            $('.tab-list').slick({
                infinite: false,
                slidesToScroll: 1,
                arrows: false,
                variableWidth: true,
            });
        }
    } else {
        // 데스크탑 화면에서는 Slick 비활성화
        if ($('.tab-list').hasClass('slick-initialized')) {
            $('.tab-list').slick('unslick');
        }
    }
}

// 페이지 로드 시 Slick 초기화
$(document).ready(initSlick);

// 화면 크기 변경 시 Slick 초기화 여부 재조정
$(window).on('resize', initSlick);

function headerScroll() {
    if (window.innerWidth > 768) {
        var headerHeight = $('header').height();
        $(window).on('scroll', function () {
            if (window.scrollY > headerHeight) {
                $('header').addClass('scroll');
            } else {
                $('header').removeClass('scroll');
            }
        })
    } else {
        $('header').removeClass('scroll');
    }
}

function slickEvent() {
    $('.service-slide').slick({
        dots:true,
        arrows:false,
    });
}
