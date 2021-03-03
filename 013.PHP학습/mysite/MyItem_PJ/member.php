<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>My Item PJ - 회원가입 페이지</title>
    <link rel="stylesheet" href="css/member.css">
    <script src="js/jquery-3.5.0.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <script src="js/linksys.js"></script>
    <script src="js/member.js"></script>
</head>

<body>
    <!--전체박스-->
    <div class="wrap">
        <!--1.상단영역-->
        <?php include "inc/top.inc" ?>
        
        <!--2.컨텐츠영역-->
        <main id="cont">
            <!--타이틀-->
            <h2 class="tit">회원가입</h2>
            <!--입력양식박스-->
            <div id="meminfo">
                <form action="process/ins.php" method="post" id="mform">
                    <ul>
                        <li>
                            <label for="mid">아이디</label>
                            <input type="text" id="mid" name="mid" maxlength="25" placeholder="아이디는 6~10자 영문자 또는 숫자">
                            <span class="msg"></span>
                        </li>
                        <li>
                           <label for="mpw">비밀번호</label> 
                            <input type="password" id="mpw" name="mpw" maxlength="20" placeholder="특수문자,문자,숫자 포함 형태의 5~15자리">
                            <span class="msg"></span>
                        </li>
                        <li>
                           <label for="mpw2">비밀번호확인</label> 
                            <input type="password" id="mpw2" name="mpw2" maxlength="20" placeholder="비밀번호 확인을 입력해 주세요">
                            <span class="msg"></span>
                        </li>
                        <li>
                            <label for="mnm">이름</label>
                            <input type="text" id="mnm" name="mnm" maxlength="20" placeholder="이름을 입력해 주세요">
                            <span class="msg"></span>
                        </li>
                        <li>
                            <label for="gen1">성별</label>
                            남성
                            <input type="radio" id="gen1" name="gen" value="m">
                            여성
                            <input type="radio" id="gen2" name="gen" checked value="w">
                            <!--
                               라디오버튼 선택값 구분을 위해
                               value값을 지정해 준다!
                               
                                라디오 버튼에서 name속성값이
                                같아야 하나만 선택되는 라디오버튼
                                을 만들 수 있다!
                                
                                - checked 속성은 처음에 체크함
                            -->
                        </li>
                        <li>
                            <label for="email1">이메일</label>
                            <input type="text" id="email1" name="email1" placeholder="이메일앞주소">
                            @
                            <select name="seleml" id="seleml">
                                <option value="init">
                                    선택해주세요
                                </option>
                                <option value="naver.com">
                                    naver.com
                                </option>
                                <option value="daum.net">
                                    daum.net
                                </option>
                                <option value="hotmail.com">
                                    hotmail.com
                                </option>
                                <option value="hanmail.net">
                                    hanmail.net
                                </option>
                                <option value="gmail.com">
                                    gmail.com
                                </option>
                                <option value="free">
                                    직접입력
                                </option>
                            </select>
                            <span class="msg"></span>
                        </li>
                        <li>
                            <label for="email2"></label>
                            <input type="text" id="email2" name="email2" placeholder="이메일뒷주소">
                        </li>
                        <li>
                            <!--서브밋버튼-->
                            <input type="submit" value="가입하기" id="btnj">
                        </li>
                    </ul>
                </form>
            </div>
        </main>
        
        <!--3.하단영역-->
        <?php include "inc/info.inc" ?>
        
    </div>



</body></html>