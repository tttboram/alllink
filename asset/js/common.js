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
  moveToContent();
  dropBtnClicked();
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
    };
  });
};

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

//모바일 사이드 메뉴 
function slideMenu() {
  $('.nav-btn').on('click', function () {
    if ($(this).hasClass('slide-on')) {
      $('header').removeClass('slide-on');
      $('.nav-btn').removeClass('slide-on');
      $('.side-menu').removeClass('slide-on');
      $('html').css('overflow', 'auto');
    } else {
      $('header').addClass('slide-on');
      $('.nav-btn').addClass('slide-on');
      $('.side-menu').addClass('slide-on');
      $('html').css('overflow', 'hidden');

    };
  });
};

//모바일 사이드메뉴 위치이동
function moveToContent() {
  var move_btn = $('.side-menu .menu a');
  move_btn.on('click',function(){
    $('.side-menu').removeClass('slide-on');
    $('header').removeClass('slide-on');
    $('html').css('overflow', 'auto');
  });
};


//sector-tab의 탭메뉴 슬라이드
function initSlick() {
  if (window.innerWidth <= 560) {  // 슬라이드 총 길이 이하
    // 이미 초기화된 Slick이 있으면 다시 초기화하지 않음
    if (!$('.tab-list').hasClass('slick-initialized')) {
      $('.tab-list').slick({
        infinite: false,
        slidesToScroll: 1,
        arrows: false,
        variableWidth: true,
      });
    };
  } else {
    // 데스크탑 화면에서는 Slick 비활성화
    if ($('.tab-list').hasClass('slick-initialized')) {
      $('.tab-list').slick('unslick');
    };
  };
};

// 페이지 로드 시 Slick 초기화
$(document).ready(initSlick);

// 화면 크기 변경 시 Slick 초기화 여부 재조정
$(window).on('resize', initSlick);


//해더 스크롤 이벤트
function headerScroll() {
  if (window.innerWidth > 768) {
    // 새로고침 후 scroll 상태를 localStorage에서 가져오기
    const isScrolled = localStorage.getItem('headerScrolled') === 'true';

    // 페이지 로드 시 scroll 클래스 상태 적용
    if (isScrolled) {
      $('header').addClass('scroll');
    }

    $(window).on('scroll', function () {
      if (window.scrollY > 80) {
        // 스크롤 시 scroll 클래스 추가
        $('header').addClass('scroll');
        localStorage.setItem('headerScrolled', 'true'); // 스크롤 상태 저장
      } else {
        // 스크롤이 80px 이하일 때 scroll 클래스 제거
        $('header').removeClass('scroll');
        localStorage.setItem('headerScrolled', 'false'); // 스크롤 상태 제거
      }
    });
  } else {
    $('header').removeClass('scroll');
    localStorage.setItem('headerScrolled', 'false'); // 모바일에서 scroll 클래스 제거
  }
};

//sector-service 슬릭이벤트
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
};

//sector-service 탭메뉴 이벤트
function serviceTab(){
  $('.service-tab li').on('click',function(){
    $('.service-tab li').removeClass('on');
    $(this).addClass('on');
  });
};


//카카오맵
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


//팝업창 띄우기
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

//팝업창 닫기 버튼
function popupClose() {
  $('.popup .close-btn').on('click', function () {
    $('.popup').css('display', 'none');
    $('.dimmed').css('display', 'none');
  });
};


//최상단 이동 버튼 (모바일)
function moveToTop() {
   if(window.innerWidth < 768){
    $('.top-button').click(function () {
      $('html,body').animate({ scrollTop: 0 }, '300');
    });
   };
};

//최상단 버튼 페이드인,아웃 효과
function topbtnFade() {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $('.top-button').fadeIn();
    } else {
      $('.top-button').fadeOut();
    }
  });
};

//외국어 선택 드롭다운
function dropBtnClicked() {
  $('.language-dropdown li').on('click',function(){
    var lang = $(this).text();
    $('.language-dropdown li').removeClass('clicked');
    $(this).addClass('clicked');
    $('.language-name').text(lang);
  });
}