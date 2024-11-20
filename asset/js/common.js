$(function(){
    langdrop();
    tabEvent();
});

//다국어 드롭다운
function langdrop(){
    const dropBtn = $('.language-selector button');
    const dropdown = $('.language-selector');

    dropBtn.on('click',function(){
        dropdown.toggleClass('active');
    });

    $(document).on('click',function(event){
        if(!$(event.target).closest('.language-selector').length){
            dropdown.removeClass('active');
        }
    })
}

//메인 컨텐츠 탭

function tabEvent(){
   
    let tabBtn = $('.tab-list .tab');
    let tabBox = $('.tab-content .cont');

    tabBtn.on('click',function(){
        const idx = $(this).index();
        tabBtn.removeClass('on');
        $(this).addClass('on');
        console.log(idx)
        tabBox.removeClass('on');
        $('.tab-content li:eq('+idx+')').addClass('on');
    })
}