(function( $ ) {

    $.fn.scrollReveal = function() {

        //get viewport size
        var windowHeight = $(window).height(),//윈도우높이값
            windowWidth = $(window).width(),//윈도우가로값(예비용)
            initialScroll = $(window).scrollTop(),//스크롤위치값
            items = $('.js-reveal'),//등장액션대상 클래스요소
            items2 = $('.js-reveal2'),//등장액션대상 클래스요소2
            scroll;//이동시 스크롤위치값

        //hide anything not in the viewport
        // 윈도우 높이값 보다 클때(즉, 화면에서 보이지 않는경우)
        // 초기클래스 주기(숨기고 위치이동한 클래스)
        // each() 메서드로 선택된 모든 클래스 대상요소를 돌아준다!
        items.each(function(){
            if($(this).offset().top >= windowHeight){
                $(this).addClass('js-reveal--hidden');
            }
        }); /////////// each 메서드 /////////////////// 
        
        // 다른 등장액션 셋팅!
        items2.each(function(){
            if($(this).offset().top >= windowHeight){
                $(this).addClass('js-reveal2--hidden');
            }
        }); /////////// each 메서드 ///////////////////
        //hide anything not in the viewport
        
        // 등장위치를 조정하는 값(화면높이에서 뺄값)
        let gap = 100;
        // -> 효과는 화면아래에서 얼마나 여유공간을 둘 것인가임!

        //on scroll
        //실제 스크롤 이벤트가 발생할때 처리
        $(window).scroll(function (event) {
            //get the current scroll position
            scroll = $(window).scrollTop();//스크롤 위치값
            //show anything that is now in view (scroll + windowHeight)
            // 대상요소를 돌면서 위치값이 화면아래에서 위로 올라올때
            // 숨김 클래스를 제거해서 등장액션을 보여준다!
            // 등장위치를 조금 조정하기 위해 gap만큼 빼준다!
            items.each( function(){
                if($(this).offset().top <= (scroll + windowHeight - gap)){
                    $(this).removeClass('js-reveal--hidden');
                } ///////// if문 /////////////////////////
            }); ///// each 메서드 ///////////////////////
            
            // 다른 등장액션!
            items2.each( function(){
                if($(this).offset().top <= (scroll + windowHeight - gap)){
                    $(this).removeClass('js-reveal2--hidden');
                } ///////// if문 /////////////////////////
            }); ///// each 메서드 ///////////////////////
            
        });//////////// scroll메서드 //////////////////////

        return this;//처리결과를 본 페이지로 돌려보낸다!
    };
}( jQuery ));

