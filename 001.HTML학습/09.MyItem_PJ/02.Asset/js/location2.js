// 오시는길 페이지 JS - location.js ////

$(function () { /// jQB //////////////////

    /// 지도 메뉴 클릭시 지도변경하기 //
    $(".menu a").click(function (e) { //e-이벤트전달변수

        // 기본이동막기
        e.preventDefault();

        // 1. 맵메뉴 class변경하기
        $(this).addClass("on")
            .siblings().removeClass("on");



    }); /////////// click ////////////

}); ////////// jQB //////////////////////


/*///////////////////////////////////////////
          함수명: myMap
          기능: 구글맵 위치셋팅
*/ ////////////////////////////////////////////
function myMap(v1, v2) {
    // 지도를 넣을 대상
    var mapCanvas = document.querySelector(".gmap");
    // 지도 위도,경도값 셋팅
    var myCenter = new google.maps.LatLng(v1, v2);
    // 지도 확대,축소옵션
    var mapOptions = {
        center: myCenter,
        zoom: 16 // 클수록 확대
    };
    // 위의 변수값으로 구글맵 호출생성!
    var map = new google.maps.Map(mapCanvas, mapOptions);
    // 지도의 위치표시자 셋팅
    var marker = new google.maps.Marker({
        position: myCenter,
        // 서버에 있는 이미지를 불러올 수 있다!
        icon: "https://kr.seaicons.com/wp-content/uploads/2016/03/Map-Marker-Marker-Outside-Chartreuse-icon.png",
        // 지도표시자를 위아래로 애니메이션 하는 옵션
        // BOUNCE 는 위아래움직임, DROP 은 한번에 내려옴
        animation: google.maps.Animation.BOUNCE,
        // title은 마우스 오버시 툴
        title: "여기는 내일 투어할 수족관입니다!"

    });
    marker.setMap(map);
} ////// myMap함수 ////////////////////////////////////
