<!DOCTYPE HTML>
<html lang="utf-8">
 <head>
  <title> New Document </title>
  <meta charset="utf-8">
  <meta name="Generator" content="EditPlus">
  <meta name="Author" content="">
  <meta name="Keywords" content="">
  <meta name="Description" content="">
  <link rel="stylesheet" type="text/css" href="board.css">
 </head>

 <body>
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
<?php  
include "dbconn.inc";

$table_name = "board_free";

$mode = $_GET["mode"];
$delete_uno = $_GET["delete_uno"];

if(!strcmp($mode, "form")) {
  $query = "select name from $table_name where uno = $delete_uno";
  $result = $dbconn->query($query);
  $row = $result->fetch_row();
  $name = $row[0];
  ?>
  <form name = "delete_form" method = "post" 
  action = "delete.php?mode=post&delete_uno=<?=$delete_uno?>">
    <table class="dtbl">
	<caption>방명록 게시판</caption>       
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
} else if(!strcmp($mode, "post")) {   
  $query = "select passwd from $table_name where uno = $delete_uno";
  $result = $dbconn->query($query);
    
  $row = $result->fetch_row();
  $real_passwd = $row[0];

  $query = "select password('$passwd')";
  $result = $dbconn->query($query);
  $input_passwd = $_POST["passwd"];

 ##PHP에서는 한번 암호화된 비번은 복호화 할 수 없다!
 ##따라서 현재입력한 비번을 가상으로 암호화하여 DB의 암호화된 비번과 비교하는 방법을 쓴다~!
 $ff = $dbconn->query(" select password('$input_passwd') as pass ");
 $r = $ff->fetch_array();
 $transpwd = substr($r[pass],0,20);
 //echo("$real_passwd, $transpwd");
 if(strcmp($real_passwd, $transpwd)) { //strcmp(1,2)1번과 2번이 같지 않으면 true
  ?>
    <script language = "javascript">
      alert("패스워드가 일치하지 않습니다!"); 
      history.back();
    </script> 
    <?php 
    exit();
  }  

  $query = "delete from $table_name where uno = $delete_uno";
  $result = $dbconn->query($query);
  ?> 
  <script language = "javascript"> 
    document.location.href = 'list.php';
  </script>  
<?php 
}
?>


 </body>
</html>