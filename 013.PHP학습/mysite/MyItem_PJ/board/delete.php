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
  <form name = "delete_form" method = "post" 
  action = "delete.php?mode=post&delete_uno=9">
    <table class="dtbl">
	<caption>방명록 게시판</caption>       
     <tr> 
        <td align = "center">
          <b>맥아더</b> 님의 글을 삭제합니다.
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


 </body>
</html>