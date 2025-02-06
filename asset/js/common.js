$(function () {
  menuToggle();
  menuListColor();
  popupPosition();
  popupEvent();
  popupClose();
  slickEvent();
  setting();
  settingCancel();
  settingChange();
  scrollEvent();
  backBtn();
  countBox();

  //체크박스 체크 여부에 따라 버튼 컬러 변경
  var checkBtn = $('.checkbox');
  function checkComplete() {
    if (checkBtn.length === checkBtn.filter(':checked').length) {
      console.log('완료')
      $('.btn.bottom.black').css('backgroundColor', '#222');
    }
  }

  checkBtn.on('change', checkComplete);
});

//헤더 메뉴리스트 열기,닫기
function menuToggle() {
  $(document).on('click', '*', function (e) {
    if (!$(this).hasClass('icon more')) {
      $('.menu-list').css('display', 'none');
    } else {
      e.stopPropagation()
      $('.menu-list').css('display', 'block');
    }
  })
}

function menuListColor() {
  // 모바일 터치 이벤트 처리
  $('.menu-list li').on('touchstart click', function () {
    $(this).addClass('on');
  });

  $('.menu-list li').on('touchend', function () {
    $(this).removeClass('on');
  });

  // 데스크탑 마우스 이벤트 처리
  $('.menu-list li').on('mouseenter', function () {
    $(this).addClass('on');
  });

  $('.menu-list li').on('mouseleave', function () {
    $(this).removeClass('on');
  });
}

//팝업창 띄우기
function popupPosition() {
  $('.popup').css({
    "top": (($(window).height() - $('.popup').outerHeight()) / 2 + $(window).scrollTop()) + "px",
    "left": (($('body').width() - $('.popup').outerWidth()) / 2 + $(window).scrollLeft()) + "px",
  });
};

function popupEvent() {
  var popupBtn = $('.popup-open a');

  popupBtn.on('click', function () {

    var targetPopup = $(this).data('target');
    $('.' + targetPopup).css('display', 'block');
    $('.dimmed').css('display', 'block');
  })
}

function popupClose() {
  var popupClose = $('.popup-cont .close');

  popupClose.on('click', function () {
    $('.popup').css('display', 'none');
    $('.dimmed').css('display', 'none');
  })
}


//슬릭
function slickEvent() {
  $('.reciept-slide').slick();
}

//설정
function setting() {
  var settingBtn = $('.setting-area>div .btn');
  settingBtn.on('click', function () {
    $(this).css('display', 'none');
    $(this).parent().children('.ing').css('display', 'flex');

    if ($(this).hasClass('naver')) {
      $('.state .naver').css('display', 'flex');
      $('.kakao-btn').css('display', 'none');
    } else {
      $('.state .kakao').css('display', 'flex');
      $('.naver-btn').css('display', 'none');
    }
  })
}

//설정 해제
function settingCancel() {
  var cancelBtn = $('.ing .cancel');
  cancelBtn.on('click', function () {
    console.log($(this));
    $(this).parent('.ing').css('display', 'none');
    $(this).parent().parent().children('.btn').css('display', 'flex');

    if ($(this).parent().hasClass('naver')) {
      $('.state .naver').css('display', 'none');
    } else {
      $('.state .kakao').css('display', 'none');
    }
  })
}

//변경버튼 
function settingChange() {
  var changeBtn = $('.default .change');
  changeBtn.on('click', function () {
    $('.setting-area').toggleClass('on');
    if ($(this).is('button')) {
      if ($('.setting-area').hasClass('on')) {
        $(this).text('완료');
      } else {
        $(this).text('변경');
      }
    } else {
      $(this).toggleClass('on');
    }
  })
}

//높이값 크로스 브라우징 
function setFullHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', setFullHeight);
setFullHeight();


//이용약관 스크롤 끝나면 버튼 컬러 바뀌는 기능
function scrollEvent() {
  $('.sector-terms').scroll(function () {
    if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
      $('.btn.black a').css('backgroundColor', "#222");
    }else {
      $('.btn.black a').css('backgroundColor', "#888");
    }
  })
}

//뒤로가기 버튼
function backBtn(){
  $('.back').on('click',function(){
    window.history.back();
  });
}

//카운드다운

function countBox() {
  const countDownDate = Date.now() + 24 * 60 * 60 * 1000; // 24시간 후

  const updateCountdown = () => {
    const distance = countDownDate - Date.now();
    if (distance < 0) {
      $('.wood-countdown p').text("EXPIRED");
      return clearInterval(timer);
    }

    const hours = Math.floor(distance / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $('.wood-countdown p').text(`${hours}  :  ${minutes}  :  ${seconds}`);
  };

  const timer = setInterval(updateCountdown, 1000);
  updateCountdown();
}


