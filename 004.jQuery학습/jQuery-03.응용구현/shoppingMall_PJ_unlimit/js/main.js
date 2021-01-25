//// 쇼핑몰 JS - main.js /////
$(function () { /// jQB ////////////////////////

    console.log("로딩완료!");

    // 슬라이드 순번
    var snum = 0;
    
    // 오른쪽버튼 클릭시 슬라이드 이동하기 //
    $(".ab2").click(function () {
        
        $("#slide").animate({
            left: "-100%"
        }, 800, function () { //애니후

            $(this) // 나자신은 #slide
            .append($("li", this).first())
            // 첫번째 li를 선택하여 맨뒤로 이동!
            .css({left:"0"});
            // -100%의 left값을 처음값으로 변경함!

        }); ///// animate ////////
        
        
        snum++;//전역변수 1증가
        if(snum===5) snum=0;//한계값
        //전역변수 순번에 맞게 블릿변경하기
        // 해당순번의 li는 class="on"넣고
        // eq(순번)
        $(".indic li").eq(snum).addClass("on")
        // 다른 형제요소 li들은 on빼기
        .siblings().removeClass("on");



    }); /////// click //////////////






}); //////////// jQB //////////////////////////
//////////////////////////////////////////////
