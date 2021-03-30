<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <title>게시판 - 글 수정 페이지</title>
    <link rel="stylesheet" href="board.css">
    <script language="javascript">
        // 폼태그 안에서 버튼 클릭시 함수를 호출하면
        // 호출된 함수에서 함수의 전달값 form 이라고 쓴 부분에 
        // form 요소의 모든 입력요소가 전달된다!!!

        function check_form(form) { //form-폼내부요소 전달값

            // 아래 모든 if문의 조건문은 이렇다!
            // !write_form.name.value
            // 폼요소이름명.요소이름.값 -> 이것 앞에 NOT 연산자
            // 해석: 선택된 요소의 값이 있으면 true
            //       값이 없으면 false 이므로 false일때
            //      메시지를 띄우려고 NOT(!)연산자로 결과를
            //      반대로 만들어 준것이다

            if (!write_form.name.value) {
                alert('이름을 입력하세요.');
                write_form.name.focus(); //포커스 넣기
                return; //돌아감(함수를 빠져나감!)
            }

            if (!write_form.passwd.value) {
                alert('패스워드를 입력하세요.');
                write_form.passwd.focus();
                return;
            }

            if (!write_form.subject.value) {
                alert('글 제목을 입력하세요.');
                write_form.subject.focus();
                return;
            }

            if (!write_form.content.value) {
                alert('글 내용을 입력하세요.');
                write_form.content.focus();
                return;
            }

            // if문에 걸려서 return 으로 돌아나가지 않는다면
            // 아래있는 submit() 메서드가 실행된다!
            // 폼요소이름.submit()
            modify_form.submit();
            // 서브밋이 실행되면 form요소의 action속성값에 
            // 셋팅된 페이지로 이동한다.
            // 여기서는 "write.php?mode=post"
            // 즉, 본 페이지를 다시 부르면서 GET방식으로
            // url에 키=값을 전달한다.

        } //////// check_form 함수 //////////////////////
        ////////////////////////////////////////////////

    </script>
</head>

<body>
    <?php
    
    # 왜?????? GET방식으로 키를 mode로 해서 값을 넘기는가?
    # 이유는 이것이 있을때만 DB에 데이터를 입력할 것임!
    
    # 입력상태를 알리기위한 GET방식 url키값 "mode"가 있는지 확인
    # isset() 메서드로 GET값을 확인한다.(있으면 1을 리턴함)
    # GET방식은 $_GET[키이름] 으로 확인한다
    
    $mode="";
    
    // GET방식으로 넘어온 "mode"라는 이름의 키가 있으면
    // 그 값을 $mode라는 변수에 담아라!
    if(isset($_GET["mode"])){
        $mode = $_GET["mode"];
    } ///// if문 /////////////
    
    //echo "mode키값:$mode";

    
    // 레코드 고유번호
    $modify_uno = "";

    # 넘어온 수정 레코드 고유번호값을 읽어서 변수에 저장!
    if(isset($_GET["modify_uno"])){
        $modify_uno = $_GET["modify_uno"];
    } ///// if문 /////////////


    // 1. DB연결 문자열 불러오기(맨위에서 한번만 해준다!!!)
    include "DBconn.inc";

    
    # 변수의 문자값을 검증하는 메서드소개!
    # strcmp(변수,값) ->같지 않으면 1/true , 같으면 0/false
    # 이 메서드는 값이 같지 않는지를 물어보는것!
    
    //echo "<br>현재mode의 값이 form인가? ".strcmp($mode,"form");
    
    # 만약 mode의 값이 "form"이면 아래 form태그를 출력한다!
    # !strcmp() -> 결과를 반대로 해서 값이 같으면 1/true
    # 수정 페이지 이므로 해당 레코드번호에 맞는 데이터를 가져와서
    # 수정 페이지 입력항목에 셋팅한다!!!
    if(!strcmp($mode,"form")){

        # 1. uno해당 레코드 읽어오기 위한 쿼리문 만들기
        $sql = "SELECT * FROM `board_free` 
                WHERE `uno`= $modify_uno";
        
        # 2. 쿼리날리기(실행!)
        $res = $conn->query($sql);
        
        # 3. 결과가져오기
        $row = $res->fetch_assoc();
        
        # 4. DB 컬럼 값 변수처리
        // (1) 글쓴이
        $name = $row["name"];
        // (2) 이메일
        $email = $row["email"];
        // (3) 홈페이지
        $homepage = $row["homepage"];
        // (4) 글 제목
        $subject = $row["subject"];
        // (5) 글 내용
        $content = $row["content"];
        // (6) html사용 여부(체크시 값이 "on"임)
        $html_tag = $row["html_tag"];



    ?>

    <form name="modify_form" method="post" action="modify.php?mode=post&modify_uno=<?=$modify_uno?>">
        <table class="dtblview">
            <caption>방명록 게시판 - 글 수정</caption>
            <tr>
                <td width="100">
                    이름
                </td>
                <td width="650">
                    <input type="text" name="name" size="20" value="<?=$name?>">
                </td>
            </tr>
            <tr>
                <td>
                    패스워드
                </td>
                <td>
                    <input type="password" name="passwd" size="20">
                </td>
            </tr>
            <tr>
                <td>
                    이메일
                </td>
                <td>
                    <input type="text" name="email" size="40" value="<?=$email?>">
                </td>
            </tr>
            <tr>
                <td>
                    홈페이지
                </td>
                <td>
                    <input type="text" name="homepage" size="40" value="<?=$homepage?>">
                </td>
            </tr>
            <tr>
                <td>
                    글 제목
                </td>
                <td>
                    <input type="text" name="subject" size="60" value="<?=$subject?>">
                </td>
            </tr>
            <tr>
                <td>
                    글 내용
                </td>
                <td>
                    HTML TAG <input type="checkbox" name="html_tag" <?php if(!strcmp($html_tag,"on")) echo "checked"; ?>>
                    <br>
                    <textarea name="content" cols="60" rows="10"><?=$content?></textarea>
                </td>
            </tr>
        </table>
        <br>
        <table class="dtbl btngrp">
            <tr>
                <td>
                    <input type="button" onclick="check_form();" value="입력 확인">
                    <input type="button" onclick="form.reset();" value="다시 쓰기">
                    <input type="button" onclick="location.href='list.php'" value="글 목록">
                </td>
            </tr>
        </table>
    </form>

    <?php 
        
    } // if문 끝: !strcmp($mode,"form") 일때 ////////
    ////////////////////////////////////////////////
    
    #####################################################
    ### $mode가 "post"일때 : DB에 값을 업데이트할 것임! ###
    #####################################################
    elseif(!strcmp($mode,"post")){

        # 업데이트 가능한 여부는 비번확인이다!!!

        # 어떻게 비밀번호를 비교할 것인가???
        # DB에 입력된 비번은 해시암호화된 비번이므로
        # 단순 문자 비교를 하면 절대로 같을 수 없다!!!

        # php 에서 해시암호화 문자 비교 메서드가 있음!
        # password_verify(입력된비번, DB해시비번)
        # 결과: 만약 같으면 true, 같지않으면 false를 리턴해준다!
        # -> 결과를 값으로 찍으면 true일때 1이 나오고, false일때 null값을 준다!
        # -> 이것을 if문으로 처리할때 
        #   1은 true로 해석되고 
        #   null값은 false로 해석된다!

        // 쿼리문 만들기
        $sql = "SELECT `passwd` FROM `board_free` 
                WHERE `uno`= $modify_uno";

        //echo " / 쿼리문 : ".$sql;

        # 쿼리 날리기
        # $conn->query(쿼리문)
        $res = $conn->query($sql);

        # 1. 레코드 유무 판별
        # $res->num_rows 결과레코드 개수를 담은 속성
        $cnt = $res->num_rows;

        //echo " / 레코드개수: $cnt";

        # 2.레코드 개수가 1인 경우 비밀번호 비교하기
        if($cnt){
            
            # $res->fetch_assoc() : 
            # 결과집합의 레코드를 이름으로 가져온다!
            $row = $res->fetch_assoc();

            //echo " / DB비밀번호 : ".$row["mpw"];
            
            # 비번비교하기
            # password_verify(입력된비번, DB해시비번)
            
            //echo " / 비번검증 : ".
            //    password_verify($mpw,$row["mpw"]);
            
            # 비번검증
            $allow = password_verify($mpw,$row["mpw"]);
            ###################################
            # 비번검증 결과 통과시 세션을 시작하고 #
            # 세션변수에 개인정보할당
            if($allow){
                
                # 세션은 서버에 기록되는 사용자변수!
                # 세션연결하기 : 사용자의 로그인 상태를 기록함!
                session_start();// 세션이 시작됨!
                # DB에서 가져온 값 세션변수에 할당하기!
                # $_SESSION[변수명] - 서버세션변수에 기록!
                
                # 사용자 아이디
                $_SESSION["mid"] = $mid;
                # 사용자 이름
                $_SESSION["name"] = $row["name"];
                # 사용자 권한
                $_SESSION["auth"] = $row["auth"];
                
                # 성공시
                echo "ok";
                
            } /////// if //////////////////////
            
            # 비밀번호 불통과시 ##################
            else{
                
                echo "again";
                
            } /////// else /////////////////////
            
            
            
        } ////////// if문 //////////////////////



        
        # post방식으로 전달 받은 값 확인하기!
        # $_POST[폼요소이름]
        $name = $_POST["name"];
        //$passwd = $_POST["passwd"];
        $email = $_POST["email"];
        $homepage = $_POST["homepage"];
        $subject = $_POST["subject"];
        $content = $_POST["content"];
        $html_tag = $_POST["html_tag"];//추가(체크박스)
        
        # 별도 처리항목
        // 현재날짜넣기: time() 메서드는 현재날짜를 구해온다!
        $register_date = time();
        // 날짜형식의 값을 DB에 숫자형의 컬럼에 넣으면
        // 날짜를 숫자로 변환하여 입력된다!
        // 따라서 list같은 곳에서 날짜를 화면에 찍으려면 
        // 날짜형식 출력변환을 해 줘야한다!
        
        // 아이피주소:getenv('REMOTE_ADDR') 접속자 아이피를 구해온다!
        $client_ip = getenv('REMOTE_ADDR');
        
            
        /// 비밀번호는 암호화 하여 입력해야한다!!!
        // PHP의 암호와 방식 중 하나!
        // password_hash(일반문자비밀번호, PASSWORD_DEFAULT)
        // 같은 비번이라도 만들때 마다 다른문자로 생성된다!
        // 따라서 일반적인 복호화는 불가능하다!

        // 암호화된 비밀번호로 변환하여 다시 할당!
        $passwd = password_hash($passwd, PASSWORD_DEFAULT);
        // 암호화 변환된 문자는 60개의 문자이므로 DB 비번 컬럼의 
        // 데이터 길이가 넉넉한지 반드시 확인해야한다!!!
        // 만약 수정해야 한다면 DB에서 아래문장으로 쿼리를 날린다!
        /*ALTER TABLE `board_free`
        MODIFY COLUMN `passwd` varchar(100);*/
        
        //echo "비번: $passwd";
        
        /*echo "
            이름: $name <br>
            비번: $passwd <br>
            이메일: $email <br>
            홈페이지: $homepage <br>
            제목: $subject <br>
            내용: $content <br>
        ";*/
        
        # DB 연결하기 - 위에서 연결한번 하였음!
        //include "DBconn.inc";//주석!
        
        # 쿼리문 만들기
        $sql = "INSERT INTO `board_free`
            (`gno`,`reply_depth`,`name`, 
             `passwd`, `email`, `homepage`, 
             `subject`, `content`, `html_tag`, 
             `register_date`, `client_ip`) 
            VALUES 
            (1,'1','$name',
             '$passwd','$email','$homepage',
             '$subject','$content','$html_tag',
             '$register_date','$client_ip')";
        
        
        //echo $sql;
        
        # 쿼리문 날리기(실행), 변수에 결과담기
        $res = $conn->query($sql);
        
        # 성공시 리스트페이지로 가기
        if($res){
            echo "
                <script>
                    alert('작성하신 글이 저장되었습니다!');
                    location.replace('list.php');
                </script>
            ";
        } ///////////// if /////////////////
        else{
            echo $conn->error;
        } ///////////// else //////////////////
        
        
        
        
        
    } //// elseif문 : !strcmp($mode,"post") 일때 //////
    //////////////////////////////////////////////////
    
    
        
    ?>




</body>

</html>
