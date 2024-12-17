$(function () {
  
  popupEvent();
  popupClose();
  slickEvent();
  setting() ;
  settingCancel();
  settingChange();
});



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
    popupPosition();
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
        $(this).text('취소');
      }else {
        $(this).text('변경');
      }
    }else {
      $(this).css('transform','rotate(-180deg)')
    }
  })
}
