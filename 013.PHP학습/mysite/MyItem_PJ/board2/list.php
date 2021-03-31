<!DOCTYPE HTML>
<html lang="utf-8">

<head>
    <title> List page </title>
    <meta charset="utf-8">
    <meta name="Generator" content="EditPlus">
    <meta name="Author" content="">
    <meta name="Keywords" content="">
    <meta name="Description" content="">
    <link rel="stylesheet" type="text/css" href="board.css">
    <script src="../js/jquery-3.4.1.min.js"></script>
    <script>
        $(function() { /// jQB /////////////////////
            // list.php를 iframe으로 불러온 부모페이지인 board.php의 특정요소로 접근해서 값을 가져올 수 있다.
            // 접근할 요소는 권한세션변수의 값을 담아놓은 #auth 라는 div요소의 값을 읽어올 것이다!
            // 부모페이지 요소 접근법: $("특정요소선택자",parent.document)
            //			var atxt=$("#auth",parent.document).text();
            //			console.log("부모요소권한셋팅값 : "+atxt);
            //			if(atxt!=="A"){/// 관리자권한이 아니면~
            //				// 글쓰기 버튼 지우기
            //				$(".wbtn").remove();
            //				
            //			}/// if ///
        }); ////// jQB //////////////////////////////

    </script>
</head>

<body>
    <?php 
$mode = "";
$read_uno = "";

if(isset($_GET["mode"]))
{
	$mode = $_GET["mode"];
}
if(isset($_GET["read_uno"]))
{
	$read_uno = $_GET["read_uno"];
} 

include "dbconn.inc"; //DB연결

$table_name = "board_free";
	 
	 //  strcmp("문자열1","문자열2");
	 // string compare (문자비교) -> 질문: 두 값이 불일치합니까?
	 // 문자열 비교함수 - 두값이 일치하는 경우 0(false), 불일치하는 경우 1(true) 을 리턴한다.

if(!strcmp($mode, "read")) {// read 모드면 들어감!
  $query = "update $table_name set hit = hit + 1 where uno = $read_uno";
  $result = $dbconn->query($query);

  $query = "select name, email, homepage, subject, content, client_ip, html_tag
            from $table_name where uno = $read_uno"; 

  $result = $dbconn->query($query);
  $row=$result->fetch_row();
	// mysql_query(쿼리문, DB연결객체) -> DB에 쿼리실행 후 결과 가져오기 메서드

  $name = $row[0];
  $email = $row[1];
  $homepage = $row[2]; 
  $subject = $row[3];
  $content = $row[4];
  $client_ip = $row[5];
  $html_tag = $row[6];
	
	/// mysql_result(결과집합,행번호,필드명 또는 필드순번)
	//  결과 데이터를 리턴하는 메서드
	// 성공하면 결과 집합으로부터 하나의 셀 데이터를 리턴하고
	// 실패하면 false값을 리턴한다.
	// 파라미터값 정의:
	// 1. 결과집합 - mysql_query() 호출을 통한 결과 리소스
	// 2. 행번호 - 레코드 번호 (0번부터 시작)
	// 3. 필드명 또는 순번 - select 문에서 가져온 필드명 순번 혹은 그 필드명을 사용하여 특정 필드 데이터를 가져옴(0번부터 시작)

  $subject = htmlspecialchars($subject); 
  $subject = stripslashes($subject); 
	
	// htmlspecialchars(문자열) 
	// 이 메서드는 문자열에서 특정한 특수문자를 html 엔티티로 변환한다. 이 메서드를 사용하면 악성 사용자로 부터 XSS(크로스 사이드 스크립트) 공격을 방지 할 수 있다. 변환되는 문자는 아래와 같다.
	// &(앰퍼센드) -> &amp;
	// "" (겹따옴표) -> &quot;
	// '' (홑따옴표) -> &#039;
	// <(미만) -> &lt;
	// >(초과) -> &gt;
	
//	stripslashes(문자열) 메서드
	// DB에 쓰면 안되는 홑따옴표 같은 문자를 역슬래쉬로 변환한 것을 반대로 풀어줌
// 비교) addslashes(문자열) 메서드 - 사용불가 문자를 역슬래쉬로 변환해주는 메서드
	
	

  if(strcmp($html_tag, "on"))
	  $content = htmlspecialchars($content);

	  $content = stripslashes($content); 
	  $content = nl2br($content); 
	// nl2br(문자열) 메서드 
	// 문자열의 모든 줄바꿈 표시를 html 줄바꿈 태그인 <br>태그로 변환해주는 메서드
	
	
  ?>
    <table class="dtblview">
        <tr>
            <td width="100">
                글 쓴이
            </td>
            <td width="650">
                <?php 
        if($email)
          echo("<a href = \"mailto:$email\">$name</a>");
        else
          echo("$name");
        ?>
            </td>
        </tr>
        <tr>
            <td>
                홈페이지
            </td>
            <td>
                <?php 
        if($homepage)
          echo("<a href = \"$homepage\" target = \"_blank\">$homepage</a>");
        else
          echo("홈페이지 없음");
        ?>
            </td>
        </tr>
        <tr>
            <td width="100">
                글 제목
            </td>
            <td width="650">
                <?php echo("$subject");?>
            </td>
        </tr>
        <tr>
            <td width="100">
                글 내용
            </td>
            <td width="650">
                <?php echo("$content");?>
                <br><br>
                <?php echo("IP Address : $client_ip");?>
            </td>
        </tr>
    </table>
    <br>
    <table class="dtbl btngrp">
        <tr>
            <td width="375">
                <button><a href="list.php">글 목록</a></button>
                <button class="wbtn"><a href="write.php?mode=form">글 쓰기</a></button>
            </td>
            <td width="375" align="right">
                <!--<button><a href = "reply.php?mode=form&reply_uno=<?php echo("$read_uno");?>">답글 쓰기</a></button>-->
                <button class="wbtn"><a href="modify.php?mode=form&modify_uno=<?php echo("$read_uno");?>">글 수정</a></button>
                <button class="wbtn"><a href="delete.php?mode=form&delete_uno=<?php echo("$read_uno");?>">글 삭제</a></button>



            </td>
        </tr>
    </table>
    <br>
    <?php 
} 
?>
    <table class="dtbl">
        <caption>방명록 게시판</caption>
        <thead>
            <tr>
                <th width="50" align="center">
                    번호
                </th>
                <th width="420" align="center">
                    글 제목
                </th>
                <th width="100" align="center">
                    글 쓴이
                </th>
                <th width="100" align="center">
                    등록 일자
                </th>
                <th width="80" align="center">
                    조회수
                </th>
            </tr>
        </thead>

        <tfoot>
            <!--테이블 하단부분-->
            <tr>
                <!--
                  colspan은 가로셀을 합치는 속성
                  rowspan은 세로셀을 합치는 속성
                  -->
                <td colspan="5">
                    <?php 
     // url에 GET방식으로 전달하는 페이지 번호값을 받는다!
    $no="1";
    // isset(검사항목) -> 값이 있으면 true -> 에러방지!
    if(isset($_GET["no"])){//파라미터값이 있으면!
        $no = $_GET["no"];
    }//// if //////
    else{// 파라미터가 없으면?
        $no = "1";//기본값!
    }//// else /////

    ///숫자형변환
    $no = (int)$no-1;//시작번호가 0이어야함! 그래서 1뺌
                           
    
    $pg="";//페이지숫자 출력 
    $linePerPage = 4; // 한페이지 줄수  - 한 페이지당 몇개의 글을 보여줄 것인가.
    $blockPerScreen = 5; // 한페이지 블럭수 - 위 스샷에 보이는 [1][2][3] 이런걸 몇개까지 띄워줄 것인가.
                       
                       
                       
     /// 전체 개수를 위한 쿼리
    $cnt_sql = "SELECT COUNT(*) FROM $table_name";

    /// 현재 리스트를 위한 쿼리
    $sql = "SELECT uno, gno, reply_depth, name, email, subject, register_date, hit
            FROM $table_name ORDER BY uno DESC LIMIT ".(($no-1)*$linePerPage).",".$linePerPage;
    // ORDER BY 기준컬럼명 순서(asc오름차순, desc내림차순)
    // LIMIT 시작레코드번호,개수 -> 페이지에서 가장 중요한 쿼리문임!

    //// 쿼리문을 DB실행 후 결과를 가져온다! /////
    // query() 메서드는 myseli의 내장메서드임, 쿼리를 실행함!
    $res = $dbconn->query($sql);// 현재리스트 쿼리
    $total = $dbconn->query($cnt_sql);//전체개수쿼리 
    $total = $total->fetch_row();//전체개수쿼리  
    $total = (int)$total[0];//전체개수쿼리  
    // echo $total;               
                       
    $totalPage = ceil($total / $linePerPage); // 총페이지수(올림함수)
    $totalBlock = ceil($totalPage / $blockPerScreen); // 총블럭수(올림함수)
 
    //현재 페이지를 띄워주기 위한 설정
    $block = ceil($no / $blockPerScreen); // 현재블럭

    $startRow_Num = ($no - 1) * $linePerPage; // 게시판 글 시작 순서

                       
   $limit=round($total/$linePerPage);//반올림-> round()
                       
    for($i=0;$i<$limit;$i++){
        $pg.= "<a href='list.php?no=".($i+1)."'>".($i+1)."</a>";
        if($i<$limit-1){//마지막번호가아니면
            $pg.=" | ";//구분자
        }
    }/// for문 //////////////////////////
   ?>
                    ◀ <?=$pg?> ▶
                </td>
            </tr>
        </tfoot>


        <?php 
    //글번호
    $article_no = $no*4+1;
                       
  $query = "SELECT uno, gno, reply_depth, name, email, subject, register_date, hit
            FROM $table_name ORDER BY uno DESC LIMIT ".($no*4).",4";
    
  $result = $dbconn->query($query);
  $total_record = $result->num_rows; 

  while($row=$result->fetch_row()){
    $uno = $row[0];
    $gno = $row[1];
    $reply_depth = $row[2]; 
    $name = $row[3];
    $email = $row[4];
    $subject = $row[5];
    $register_date = $row[6];
    $hit = $row[7];

    $subject = htmlspecialchars($subject); 
    $subject = stripslashes($subject); 

    $register_date = date("Y-m-d", $register_date); 
    ?>
        <tr>
            <td align="center">
                <?php echo("$article_no");?>
            </td>
            <td>
                <a href="list.php?no=<?php echo($no+1);?>&mode=read&read_uno=<?php echo("$uno");?>"><?php echo("$subject");?></a>
            </td>
            <td align="center">
                <?php echo("$name");?>
            </td>
            <td align="center">
                <?php echo("$register_date");?>
            </td>
            <td align="center">
                <?php echo("$hit");?>
            </td>
        </tr>
        <?php  
    $article_no++;
  } 

  if(!$total_record) {
  ?>
        <tr>
            <td align="center" colspan="5">
                등록된 글이 없습니다.
            </td>
        </tr>
        <?php 
  }
  ?>
    </table>
    <br>
    <table class="dtbl btngrp">
        <tr>
            <td align="right">
                <button><a href="list.php">글 목록</a></button>
                <button class="wbtn"><a href="write.php?mode=form">글 쓰기</a></button>
            </td>
        </tr>
    </table>


</body>

</html>
