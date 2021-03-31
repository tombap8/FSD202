<!DOCTYPE HTML>
<html lang="utf-8">
 <head>
  <title> 방명록 게시판 - 글 삭제 </title>
  <meta charset="utf-8">
  <meta name="Generator" content="EditPlus">
  <meta name="Author" content="">
  <meta name="Keywords" content="">
  <meta name="Description" content="">
  <link rel="stylesheet" type="text/css" href="board.css">
    <script language = "javascript">
    function check_form(form) {
        if(!delete_form.passwd.value) {
        alert('패스워드를 입력하세요.');
        delete_form.passwd.focus();
        return;
        }

        delete_form.submit();
    }
    </script>
 </head>

 <body>
<?php
    # DB 연결하기
    include "DBconn.inc";

    # 처리모드
    $mode = "";

    if(isset($_GET["mode"])){
        $mode = $_GET["mode"];
    } ////// if //////////////

    //echo $mode;

    # 레코드번호
    $delete_uno = "";

    if(isset($_GET["delete_uno"])){
        $delete_uno = $_GET["delete_uno"];
    } ////// if //////////////

    # 처음에 페이지 열때 : $mode 값이 "form"일때
    if(!strcmp($mode,"form")){

        # 사용자명 쿼리
        $sql = "SELECT `name` FROM `board_free` WHERE `uno` = $delete_uno";

        # 쿼리 날리기 : query() 메서드사용
        // $conn은 mysqli() 의 DB연결객체임!
        $res = $conn->query($sql);

        # 결과 레코드 가져오기 : fetch_assoc() 메서드 사용
        $row = $res->fetch_assoc();

        # "사용자명" 데이터 변수에 할당
        $name = $row["name"];

?>
  <form name = "delete_form" method = "post" 
  action = "delete.php?mode=post&delete_uno=<?=$delete_uno?>">
    <table class="dtbl">
	<caption>방명록 게시판 - 글 삭제</caption>       
     <tr> 
        <td align = "center">
          <b><?=$name?></b> 님의 글을 삭제합니다.
        </td>
      </tr>
      <tr> 
        <td height = "50" align = "center">
          패스워드
          <input type = "password" name = "passwd" size = "20">
        </td>
      </tr>
    </table>
    <br>
    <table class="dtbl btngrp">      
      <tr>      
        <td align = "center">   
          <input type = "button" onclick = "check_form();" value = "입력 확인">
          <input type = "button" onclick = "form.reset();" value = "다시 쓰기">
          <input type = "button" onclick = "location.href='list.php'" value = "취소 하기">
        </td>
      </tr> 
    </table> 
  </form>   

  <?php
    } /////// $mode가 "form"일때 //////////////////////


  ?>


 </body>
</html>