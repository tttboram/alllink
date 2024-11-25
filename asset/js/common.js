$(function () {
  langdrop();
  tabEvent();
  slideMenu();
  initSlick();
  headerScroll();
  slickEvent();
  serviceTab();
  MapShow();
  popupEvent();
  popupClose();
  moveToTop();
  topbtnFade();
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
  });
}

function slideMenu() {
  $('.nav-btn').on('click', function () {
    if ($(this).hasClass('slide-on')) {
      $('header').removeClass('slide-on');
      $('.nav-btn').removeClass('slide-on');
      $('.side-menu').removeClass('slide-on');
      $('body').css('overflow', 'auto');
      $('body').css('overflow', 'auto');
    } else {
      $('header').addClass('slide-on');
      $('.nav-btn').addClass('slide-on');
      $('.side-menu').addClass('slide-on');
      $('body').css('overflow', 'hidden');

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
    $(window).on('scroll', function () {
      if (window.scrollY > 80) {
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
  $('.service-tab').slick({
    slidesToshow:2,
    infinite:false,
    variableWidth: true,
    focusOnSelect: true,
    asNavFor:'.service-slide'
  });
  $('.service-slide').slick({
    dots: true,
    arrows: false,
    asNavFor:'.service-tab'
  });
}

function serviceTab(){
  $('.service-tab li').on('click',function(){
    $('.service-tab li').removeClass('on');
    $(this).addClass('on');
  });
};

function MapShow() {
  var mapContainer = $('#map')[0], // 지도를 표시할 div
    mapOption = {
      center: new kakao.maps.LatLng(37.505624, 127.024373), // 지도의 중심좌표
      level: 3 // 지도의 확대 레벨
    };

  var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

  // 마커가 표시될 위치입니다 
  var markerPosition = new kakao.maps.LatLng(37.505624, 127.024373);

  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({
    position: markerPosition
  });

  // 마커가 지도 위에 표시되도록 설정합니다
  marker.setMap(map);

  // 지도 위의 마커를 제거하려면 아래 코드를 사용하세요
  // marker.setMap(null);
}

function popupEvent() {
  $('.popup-btn').on('click', function () {
    $('.popup').css({
      "top": (($(window).height() - $('.popup').outerHeight()) / 2 + $(window).scrollTop()) + "px",
      "left": (($(window).width() - $('.popup').outerWidth()) / 2 + $(window).scrollLeft()) + "px",
    });
    $('.popup').css('display', 'block');
    $('.dimmed').css('display', 'block');
  });

};


function popupClose() {
  $('.popup .close-btn').on('click', function () {
    $('.popup').css('display', 'none');
    $('.dimmed').css('display', 'none');
  })
}

function moveToTop() {
  $('.top-button').click(function () {
    $('html,body').animate({ scrollTop: 0 }, '300');
  })
}

function topbtnFade() {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $('.top-button').fadeIn();
    } else {
      $('.top-button').fadeOut();
    }
  })
}