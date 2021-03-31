<!DOCTYPE HTML>
<html lang="utf-8">
 <head>
  <title> Modify Page </title>
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
    if(!modify_form.name.value) {
      alert('이름을 입력하세요.');
      modify_form.name.focus();
      return;
    }

    if(!modify_form.passwd.value) {
      alert('패스워드를 입력하세요.');
      modify_form.passwd.focus();
      return;
    }

    if(!modify_form.subject.value) {
      alert('글 제목을 입력하세요.');
      modify_form.subject.focus();
      return;
    }

    if(!modify_form.content.value) {
      alert('글 내용을 입력하세요.');
      modify_form.content.focus();
      return;
    }

    modify_form.submit();
  }
</script>
<?php  
include "dbconn.inc";

$table_name = "board_free";

$mode = $_GET["mode"];
$modify_uno = $_GET["modify_uno"];

if(!strcmp($mode, "form")) {
  $query = "select name, email, homepage, subject, content, client_ip, html_tag
            from $table_name where uno = $modify_uno"; 

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

  $subject = htmlspecialchars($subject); 
  $subject = stripslashes($subject); 

  if(strcmp($html_tag, "on"))
    $content = htmlspecialchars($content);

  $content = stripslashes($content); 
  ?>
  <form name = "modify_form" method = "post" 
  action = "modify.php?mode=post&modify_uno=<?=$modify_uno?>">
    <table class="dtblview">  
	<caption>방명록 게시판</caption>    
     <tr> 
        <td width = "100">
          이름
        </td>
        <td width = "650"> 
          <input type = "text" name = "name" value = "<?=$name?>" size = "20">
        </td>
      </tr>
      <tr> 
        <td>
          패스워드
        </td>
        <td> 
          <input type = "password" name = "passwd" size = "20">
        </td>
      </tr>
      <tr> 
        <td>
          이메일
        </td>
        <td> 
          <input type = "text" name = "email" value = "<?= $email ?>" size = "40">
        </td>
      </tr>
      <tr> 
        <td>
          홈페이지
        </td>
        <td> 
          <input type = "text" name = "homepage" value = "<?= $homepage ?>" size = "40">
        </td>
      </tr> 
      <tr> 
        <td>
          글 제목
        </td>
        <td> 
          <input type = "text" name = "subject" value = "<?= $subject ?>" size = "60">
        </td>
      </tr>      
      <tr> 
        <td>
          글 내용
        </td>
        <td> 
          HTML TAG 
          <input type = "checkbox" name = "html_tag" <?php if(!strcmp($html_tag, "on")) echo "checked";?>>
          <br>
          <textarea name = "content" cols = "60" rows = "10"><?= $content?></textarea>
        </td>
      </tr>
    </table>
    <br>
    <table class="dtbl btngrp">      
      <tr>      
        <td align = "center">   
          <input type = "button" onclick = "check_form();" value = "입력 확인">
          <input type = "button" onclick = "form.reset();" value = "다시 쓰기">
          <input type = "button" onclick = "location.href='list.php'" value = "글 목록">
        </td>
      </tr> 
    </table> 
  </form>   
<?php 
} else if(!strcmp($mode, "post")) {   
 $query = "select passwd from $table_name where uno = $modify_uno";
 
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

  $subject = addslashes($subject);
  $content = addslashes($content);   

  $name = $_POST["name"];
  $email = $_POST["email"];
  $homepage = $_POST["homepage"];
  $subject = $_POST["subject"];
  $content = $_POST["content"];
  $html_tag = $_POST["html_tag"];

  $query = "update $table_name set name = '$name', email = '$email', homepage = '$homepage', subject = '$subject', content = '$content', html_tag = '$html_tag' where uno = $modify_uno";
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
