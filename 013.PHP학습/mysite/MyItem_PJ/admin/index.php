<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <title>My Item 회원 리스트</title>
    <style>
        /*테이블 공통 디자인*/
        .tbl {
            /*글자체*/
            font-family: "맑은 고딕", "굴림";
            /*글자크기*/
            font-size: 18px;
            /*글자색*/
            color: #222;

            /*테이블에는 기본적으로 간극이 존재한다.
            이것을 border-collapse 로 없애야함!*/
            border-collapse: collapse;
            /*사이간극이 무너짐!*/


        }

        /*개별테이블*/
        #drama {
            /*테이블 중앙정렬*/
            margin: 0 auto;
            /*테이블도 마영오가 된다!*/
            max-width: 990px;
            /*최대사이즈 지정, 화면이 작아지면 
            자동으로 화면만큼 작아짐*/
        }

        /*테이블 타이틀*/
        #drama caption {
            font-size: 24px;
            font-weight: bold;
            padding: 10px 0;
        }

        /**/
        #drama td,
        #drama th {
            padding: 5px 10px;
            /*
                [안쪽 여백 설정방법]
                padding : 4방향;(1개)
                padding: 위아래 양쪽;(2개)
                padding: 위 양쪽 아래;(3개)
                padding: 위 오른 아래 왼;(4개)
            */
        }

        /*td에 밑줄넣기*/
        #drama tbody tr td {
            border-bottom: 1px solid #ccc;

            /*
                border 경계선
                따로 설정시엔
                border-width(선두께)
                border-style(선종류)
                border-color(선색상)
            
                한번에
                border : 두께 종류 색상;
                1) 두께 : 선두께로 px등 단위사용
                2) 종류: solid(실선), dotted(점선)
                        dashed(데쉬선), ridge(액자)
                3) 색상: hash코드, rgb코드 등으로 표시
                - 기본적으로 박스 크기에 포함된다!
            */

        }

        /*tbody 첫번째 tr의 td에 두꺼운 보더 윗줄만 넣기*/
        #drama tbody tr:first-child td {
            border-top: 2px solid #999;
        }

        /*tbody 마지막 tr의 td에 두꺼운 보더 아랫줄만 넣기*/
        #drama tbody tr:last-child td {
            border-bottom: 2px solid #999;
        }

        /*첫번째 줄 th 위에 두꺼운 보더 윗줄만 넣기*/
        #drama thead tr th {
            border-top: 2px solid #999;
        }

        /*테이블 본문 짝수번째 배경색 넣기*/
        /*
            :nth-child(짝수/홀수) 
            짝수 even, 홀수 odd
        */
        #drama tbody tr:nth-child(even) td {
            background-color: #ebebeb;
        }


        /*테이블 하단영역 td 디자인*/
        #drama tfoot tr td {
            text-align: center;
            padding: 20px 0;
        }



        /*구분박스*/
        div.gubun {
            max-width: 590px;
            margin: 0 auto;
            /*마영오!*/
            /*border: 1px solid red;*/
        }

        /*구분테이블*/
        table#gubun {
            border: 1px solid #ccc;
            font-size: 12px;
        }

        table#gubun td {
            padding: 5px 7px;
        }

        /*구분 첫줄 첫td에 오른쪽 보더 넣기*/
        #gubun tr:first-child td:first-child {
            border-right: 1px solid #ccc;
        }

        /*구분 가운데 줄 tr의 td에 윗줄, 아랫줄 넣기*/
        #gubun tr:nth-child(3) td {
            border-top: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
        }

    </style>

</head>

<body>
    <?php 
    # 세션 변수가 셋팅되었는지 검색하려면 먼저 세션을 시작해야함!!!
    session_start();
    # 세션 시작 코드를 맨위에 넣도록하자!
    # 이유는 세션 시작코드가 html코드를 모두 감싸는
    # 유형의 셋팅을 하는데 다른 코드가 위에 있으면
    # 페이지에서 세션영역이 분리되어 한번 세션이
    # 시작되고 다시 세션을 요청하는 오류 발생할 수가 있다!
    
    # 세션변수가 셋팅된 경우에만 로그인 상태변경 실행
    # $_SESSION["mid"] 아이디 세션변수가 셋팅되었는가?
    # isset(변수) -> 변수값이 셋팅된 여부를 판별(셋팅시 1리턴)
    if(isset($_SESSION["mid"])){
        
        // 권한
        $auth = $_SESSION["auth"];
        
        # 권한값이 "A" 또는 "S"일 경우 관리자 환영메시지 띄우기
        if($auth==="A"||$auth==="S"){
             
            // 메시지
            $msg = "관리자 ".
                $_SESSION["name"]."님, 환영합니다!";
        
        
            // 로그인 셋팅 JS함수 호출하기!!!
            echo "<h4 style='text-align:center'>$msg</h4>";
        
        } ///////// if문 관리자일 경우 ///////////////////
        else{
            echo "<script>
                alert(
                '권한이 없으므로 본 페이지를 열람할 수 없습니다!');
                location.replace('../index.php');//첫페이지로!
            </script>";
        } ///////// else문 관리자가 아닐 경우 /////////////
        
       
        
    } ////////// if문 ///////////////////////
    
    //// 로그인을 하지 않은 경우 /////////////////////
    else{        
        echo "<script>
            alert('먼저 로그인을 해야합니다!');
            location.replace('../login.php');//로그인페이지로!
        </script>";
    } ////////// else문 ///////////////////////
    
    
   
    ?>
    <!--My Item 회원 리스트 테이블-->
    <table id="drama" class="tbl">
        <!--테이블제목-->
        <caption>My Item 회원 리스트</caption>
        <!--테이블 머릿줄-->
        <thead>
            <tr>
                <!--머릿글은 td대신 th를 씀-->
                <th>번호</th>
                <th>아이디</th>
                <th>이름</th>
                <th>성별</th>
                <th>이메일</th>
                <th>권한</th>
            </tr>
        </thead>

        <!--테이블 끝줄-->
        <tfoot>
            <tr>
                <td colspan="7">
                    ◀ 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 ▶

                </td>
                <!--colspan은 기본적으로 td를 합칠때 사용함
                    상단 td의 개수가 7개이고 이것을 합치려면
                    7개를 설정해서 하나로 통합한다!
                -->
            </tr>
        </tfoot>

        <?php 
        
        // 1. DB연결 문자열 불러오기
        include "DBconn.inc";
        
        /// 2. 전체 테이블 데이터 불러오는 쿼리문 만들기
        $sql = "SELECT * FROM `member` ORDER BY `idx` DESC";
        // ORDER BY `idx` DESC
        // `idx` 등록된 글 번호 내림차순(최신글 맨위!)
        
        /// 3. 쿼리문을 DB에 실행 후 결과를 가져온다!
        //  $res변수에 결과를 담는다!
        // $conn은 DB연결 객체임!
        $res = $conn->query($sql);
        // query() 메서드는 DB연결객체 하위메서드로
        //  연결된 DB에 쿼리를 실행 후 결과까지 가져온다!
        
        /// 4. 실행된 결과의 레코드 개수를 찍어본다!
        // num_rows 속성은 쿼리가 가져온 결과 레코드 개수를 리턴
//        if($res->num_rows>0){
//            echo "<br>전체데이터 개수:".$res->num_rows."개";
//        } ///// if문 /////////////////////
//        else{
//            echo "<br>데이터가 없습니다!";
//        } ///// else ////////////////////
        
        
        ?>

        <!--테이블 본문-->
        <!--tbody는 일반 테이블에 안써도 출력됨-->
        <tbody>
            <?php
            
            // 결과 레코드가 있다면!
            if($res->num_rows>0){
                // 긁어모은 데이터가 있는 동안에 반복실행함!
                // 긁어모았다! 영어로 fetch
                // (데이터를) 뺏지! 어서! (격하게 발음)
                
                // fetch_assoc() 메서드
                // - DB 테이블에 컬럼명으로 연관된(associate)
                // 데이터를 가져오는 메서드임!
                
                //while(조건문){실행문} 
                //- > 조건문이 true인동안
                //(여기서는 데이터가 있는동안)
                //    실행문을 실행한다!
                
                //$row = $res -> fetch_assoc()
                //해석: 긁어모은 데이터를 $row변수에 
                //      하나씩 담는다
                
                # 리스트번호: 리스트순번
                $lno = 1;
                
                while($row=$res->fetch_assoc()){
                    
                    // 성별코드 글자표시변경
                    $gen = 
                        $row["gen"]==="m"?
                        "남자" : "여자";
                    // 3항연산자 -> 비?집:놀이동산;
                    
                    // 권한코드 글자표시변경
                    $authcode =
                        $row["auth"]==="S"?
                        "최고관리자" : 
                        ($row["auth"]==="A"?
                        "관리자" : "일반회원");
                    // 3항연산자를 2번 겹쳐씀
                    // 조건?값1:(조건?값2:값3);
                    
                    echo 
                    "<tr>".
                        // 리스트의 순번을 새로 붙여준다!
                        "<td>".$lno."</td>".
                        //// 수정페이지로 링크걸기 ////
                        "<td><a href='modify.php?num=".
                        $row["idx"].//보내는 유일키
                        "'>".
                        $row["mid"].
                        "</a></td>".
                        /////////////////////////////
                        "<td>".$row["name"]."</td>".
                        "<td>".$gen."</td>".
                        "<td>".$row["email1"]."@".
                        $row["email2"]."</td>".
                        "<td>".$authcode."</td>".
                    "</tr>";
                    
                    # 리스트번호 증가
                    $lno++;//1씩증가
                    
                    
                } /////// while /////////////////
                
                
            }///// if문 /////////////////
            
        ?>

        </tbody>


    </table>



    <!--구분테이블 박스-->
    <div class="gubun">
        <!--구분테이블 삭제-->

        <!--입력페이지이동-->
        <button onclick="location.href='../index.php'" style="float:right;">사이트로 돌아가기</button>
        <br>
        <!--로그아웃버튼-->
        <button onclick="logout()">로그아웃</button>

    </div>






    <!--
  [테이블 관련 요소]
  
  1. table : 전체 테이블 부모
  2. tr (table row) : 테이블 라인
  3. td (table data) : 테이블 데이터
      - thead에서는 주로 td대신 th를 사용함
        (th는 기본 두꺼운 글자에 중앙정렬을 함)
  ********************************
  (추가요소)
  4. caption : 테이블 제목
  5. thead : 테이블 머릿부분
  6. tbody : 테이블 중앙내용부분
  7. tfoot : 테이블 하단부분
  -->



    <script src="../js/jquery-3.5.0.min.js"></script>
    <script>
        /*//////////////////////////////////////////////
            함수명: logout
            기능: 관리자모드에서 로그아웃후 사용자 첫페이지로 감
        */ //////////////////////////////////////////////
        function logout() {

            // Ajax(비동기통신)로그아웃 처리 페이지를 호출함!
            // 참고: inc/login_session.inc파일 중 로그아웃기능
            
            // 비동기통신으로 로그아웃 처리 페이지호출!
            // Ajax - $.post() 로 처리!
            // $.post(호출페이지, 전달변수셋팅, 콜백함수)
            $.post(
                // 1. 호출페이지(현재위치가 admin폴더임!)
                "../process/logOut.php",
                // 2. 전달변수셋팅
                {},
                // 3. 콜백함수
                function(res) { // res-결과값

                    res = res.trim(); //앞뒤공백제거(혹시)

                    if (res === "ok") {

                        // 메시지
                        alert("안전하게 로그아웃 되었습니다!");

                        // 첫페이지로 리로드
                        location.replace("../index.php");

                    } ////// if ////////////////
                    else {

                        // 메시지
                        alert("로그아웃시 문제가 발생하였습니다!" + res);

                    } ///// else ///////////////


                } /// 콜백함수 ///////

            ); ///////// Ajax - post /////////

        } ////// logout 함수 /////////////////////////////
        /////////////////////////////////////////////////
        /////////////////////////////////////////////////

    </script>





</body>

</html>
