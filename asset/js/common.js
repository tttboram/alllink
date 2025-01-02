$(function () { 
  menuToggle();
  menuListColor();
  popupPosition();
  popupEvent();
  popupClose();
  slickEvent();
  setting() ;
  settingCancel();
  settingChange();
 
});

 //헤더 메뉴리스트 열기,닫기
function menuToggle() {
  $(document).on('click','*',function(e){
    if(!$(this).hasClass('icon more')){
      $('.menu-list').css('display','none');
    }else {
      e.stopPropagation()
      $('.menu-list').css('display','block');
    }
  })
}

function menuListColor() {
  $('.menu-item li').on('mouseenter touchstart',function (){
    $(this).addClass('on');
  });
  $('.menu-item li').on('mouseleave touchend',function (){
    $('.menu-item li').removeClass('on');
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
  
  popupBtn.on('click',function(){
    
    var targetPopup = $(this).data('target');
    $('.'+targetPopup).css('display','block');
    $('.dimmed').css('display','block');
  })
}

function popupClose() {
  var popupClose = $('.popup-cont .close');

  popupClose.on('click', function(){
    $('.popup').css('display','none');
    $('.dimmed').css('display','none');
  })
}


//슬릭
function slickEvent() {
  $('.reciept-slide').slick();
}

//설정
function setting() {
  var settingBtn = $('.setting-area>div .btn');
  settingBtn.on('click',function(){
    $(this).css('display','none');
    $(this).parent().children('.ing').css('display','flex');

    if($(this).hasClass('naver')){
      $('.state .naver').css('display','flex');
    }else{
      $('.state .kakao').css('display','flex');
    }
  })
}

//설정 해제
function settingCancel() {
  var cancelBtn =$('.ing .cancel');
    cancelBtn.on('click',function(){console.log($(this));
    $(this).parent('.ing').css('display','none');
    $(this).parent().parent().children('.btn').css('display','flex');

    if($(this).parent().hasClass('naver')){
      $('.state .naver').css('display','none');
    }else{
      $('.state .kakao').css('display','none');
    }
  })
}

//변경버튼 
function settingChange() {
  var changeBtn = $('.default .change');
  changeBtn.on('click',function(){
    $('.setting-area').toggleClass('on');
    if($(this).is('button')){
      if($('.setting-area').hasClass('on')){
        $(this).text('완료');
      }else {
        $(this).text('변경');
      }
    }else {
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



