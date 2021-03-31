<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>My Item PJ - 오시는길</title>
    <link rel="stylesheet" href="css/location.css">
    <script src="js/jquery-3.5.0.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <script src="js/linksys.js"></script>
    <script src="js/location.js"></script>
</head>

<body>
    <!--전체박스-->
    <div class="wrap">
        <!--1.상단영역-->
        <header id="top">
            <!--1-1.로고박스-->
            <h1 id="logo">
                <!--글자-->
                <img id="mtit" src="images/mlogo_7.png" alt="my items">
                <!--빨간공-->
                <img id="rb" src="images/mlogo_6.png" alt="빨간공">
                <!--카멜레온박스-->
                <div id="cb">
                    <!--혀박스-->
                    <span id="tung"></span>
                    <!--카멜레온-->
                    <img id="cam" src="images/mlogo_05.png" alt="카멜레온">
                </div>

            </h1>
            <!--1-2.공통메뉴-->
            <ul class="tmenu">
                <li>
                    <a href="">회원가입</a>
                </li>
                <li>
                    <a href="">로그인</a>
                </li>
                <li>
                    <a href="">게시판</a>
                </li>
                <li>
                    <a href="">오시는길</a>
                </li>
            </ul>
            <!--1-3.SNS메뉴-->
            <ul class="sns">
                <li>
                    <a href="">
                        <span class="bld">트위터</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span class="bld">인스타그램</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <span class="bld">페이스북</span>
                    </a>
                </li>
            </ul>
            <!--1-4.GNB메뉴-->
            <nav class="gnb">
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">디바이스</a>
                        <ol class="smenu">
                            <li>
                                <a href="">
                                    스마트폰
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    태블릿PC
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    노트북
                                </a>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <a href="">패션</a>
                        <ol class="smenu">
                            <li>
                                <a href="">
                                    가방
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    시계
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    구두
                                </a>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <a href="">프로필</a>
                    </li>
                </ul>
            </nav>
        </header>
        <!--2.컨텐츠영역-->
        <main id="cont">
            <!--타이틀-->
            <h2 class="tit">오시는길</h2>
            <!--지도메뉴-->
            <h4 class="menu">
                <a href="#" class="on">구글맵</a> |
                <a href="#">네이버맵</a> |
                <a href="#">다음맵</a>
            </h4>
            <!--맵박스-->
            <div id="map">
                <!--구글맵-->
                <iframe class="gmap maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.1449219334842!2d127.12613928175222!3d37.53808890776115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357caf44ed62674b%3A0x7e2329d740c3d079!2z7ZWY7J2066-465SU7Ja07Lu07ZOo7YSw7ZWZ7JuQIOyynO2YuOygkA!5e0!3m2!1sko!2skr!4v1615859585027!5m2!1sko!2skr"></iframe>
                <!--
                    구글맵 가져오는 방법:
                    1.구글맵 주소에서 장소검색 한다.
                    2.왼쪽 햄버거 메뉴에서 지도공유 또는 퍼가기를 클릭한다.
                    3.별창에서 지도퍼가기 선택 후 html복사
                    버튼을 클릭하면 iframe이 복사된다!
                    4.소스에 붙여 넣는다.
                -->
                <!--네이버맵-->
                <table class="nmap maps">
                    <tbody>
                        <tr>
                            <td style="border:1px solid #cecece;"><a href="https://v4.map.naver.com/?searchCoord=384b92cdd5195464fff63d0cc5bb93a43e4186d3fb8b007279e4017835800d2c&amp;query=7ZWY7J2066%2B465SU7Ja07Lu07ZOo7YSw7ZWZ7JuQIOyiheuhnOy6oO2NvOyKpA%3D%3D&amp;tab=1&amp;lng=60829a44383e918967a53a0e11b2fe67&amp;mapMode=0&amp;mpx=6abe89eafd27fa258bcc492d192db44a2669ea6f5fb42549a56396351c88457214cc6cd4017d6a7ece26dfdd95d01ca0d8bcc8650fbf60027e1d8d52a77817c9&amp;lat=d08f2b7130eb75b7c9af647fb447fe96&amp;dlevel=12&amp;enc=b64&amp;menu=location" target="_blank"><img src="http://prt.map.naver.com/mashupmap/print?key=p1588755358160_1132089476" width="690" height="360" alt="지도 크게 보기" title="지도 크게 보기" border="0" style="vertical-align:top;"></a></td>
                        </tr>
                        <tr>
                            <td>
                                <table cellpadding="0" cellspacing="0" width="100%">
                                    <tbody>
                                        <tr>
                                            <td height="30" bgcolor="#f9f9f9" align="left" style="padding-left:9px; border-left:1px solid #cecece; border-bottom:1px solid #cecece;"> <span style="font-family: tahoma; font-size: 11px; color:#666;">2020.5.6</span>&nbsp;<span style="font-size: 11px; color:#e5e5e5;">|</span>&nbsp;<a style="font-family: dotum,sans-serif; font-size: 11px; color:#666; text-decoration: none; letter-spacing: -1px;" href="https://v4.map.naver.com/?searchCoord=384b92cdd5195464fff63d0cc5bb93a43e4186d3fb8b007279e4017835800d2c&amp;query=7ZWY7J2066%2B465SU7Ja07Lu07ZOo7YSw7ZWZ7JuQIOyiheuhnOy6oO2NvOyKpA%3D%3D&amp;tab=1&amp;lng=60829a44383e918967a53a0e11b2fe67&amp;mapMode=0&amp;mpx=6abe89eafd27fa258bcc492d192db44a2669ea6f5fb42549a56396351c88457214cc6cd4017d6a7ece26dfdd95d01ca0d8bcc8650fbf60027e1d8d52a77817c9&amp;lat=d08f2b7130eb75b7c9af647fb447fe96&amp;dlevel=12&amp;enc=b64&amp;menu=location" target="_blank">지도 크게 보기</a> </td>
                                            <td width="98" bgcolor="#f9f9f9" align="right" style="text-align:right; padding-right:9px; border-right:1px solid #cecece; border-bottom:1px solid #cecece;"> <span style="float:right;"><span style="font-size:9px; font-family:Verdana, sans-serif; color:#444;">©&nbsp;</span>&nbsp;<a style="font-family:tahoma; font-size:9px; font-weight:bold; color:#2db400; text-decoration:none;" href="https://www.navercorp.com" target="_blank">NAVER Corp.</a></span> </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <!--
                    네이버맵은 서비스가 아직 미비하여 
                    기존 서비스맵으로 대체함
                -->
                <!--다음맵-->
                <!-- * 카카오맵 - 지도퍼가기 -->
                <!-- 1. 지도 노드 -->
                <div id="daumRoughmapContainer1615860935571" class="root_daum_roughmap root_daum_roughmap_landing dmap maps"></div>

            </div><!--#map-->
            

                <!--
                    2. 설치 스크립트
                    * 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다.
                -->
                <script charset="UTF-8" class="daum_roughmap_loader_script" src="https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js"></script>

                <!-- 3. 실행 스크립트 -->
                <!--다음맵 클릭시에 함수로 실행변경!-->
        </main>
        <!--3.하단영역-->
        <footer id="info">
            <!--3-1.하단로고-->
            <img src="images/b_logo.png" alt="하단로고">
            <!--3-2.회사주소-->
            <address>
                서울시 강남구 논현동 32-45 대량빌딩 1455호, 대표: 김랑랑
            </address>
        </footer>
    </div>



</body></html>