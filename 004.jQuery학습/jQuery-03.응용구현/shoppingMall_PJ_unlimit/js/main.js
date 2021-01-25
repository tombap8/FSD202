//// 쇼핑몰 JS - main.js /////
$(function () { /// jQB ////////////////////////

    console.log("로딩완료!");

    // 슬라이드 순번
    var snum = 0;
    
    // 슬라이드 요소
    var sld = $("#slide");
    
    // 광클금지(0-허용,1-불허용)
    var prot = 0;
    
    
    // 오른쪽버튼 클릭시 슬라이드 이동하기 //
    $(".ab2").click(function () {
        
        // 광클금지 //////////////////////////////////////
        if(prot) return false;//1이면돌아가!
        prot=1;//잠금(다음신호는 돌아가!)
        setTimeout(function(){prot=0;},800);//0.8초후해제
        /////////////////////////////////////////////////
        
        sld.animate({
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


    // 왼쪽버튼 클릭시 슬라이드 이동하기 ///
    $(".ab1").click(function(){
        
        // 광클금지 //////////////////////////////////////
        if(prot) return false;//1이면돌아가!
        prot=1;//잠금(다음신호는 돌아가!)
        setTimeout(function(){prot=0;},800);//0.8초후해제
        /////////////////////////////////////////////////
        
        // 1. 맨뒤의 슬라이드 li를 맨앞으로 가져온다
        sld.prepend(sld.find("li").last())
        // 2. 동시에 left값을 -100%로 앞공간 확보!
        .css({left:"-100%"})
        // 3. 애니메이션으로 left:0 으로 등장!
        .animate({
            left:"0"
        },800);
        
        //4. 블릿변경하기
        snum--;//전역변수 1감소
        if(snum===-1) snum=4;//한계값
        //전역변수 순번에 맞게 블릿변경하기
        // 해당순번의 li는 class="on"넣고
        // eq(순번)
        $(".indic li").eq(snum).addClass("on")
        // 다른 형제요소 li들은 on빼기
        .siblings().removeClass("on");
        
    });//////// click ////////////////




}); //////////// jQB //////////////////////////
//////////////////////////////////////////////
