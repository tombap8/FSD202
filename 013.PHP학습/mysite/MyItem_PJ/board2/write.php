<!DOCTYPE HTML>
<html lang="utf-8">

<head>
    <title> Write Page </title>
    <meta charset="utf-8">
    <meta name="Generator" content="EditPlus">
    <meta name="Author" content="">
    <meta name="Keywords" content="">
    <meta name="Description" content="">
    <link rel="stylesheet" type="text/css" href="board.css">
</head>

<body>
    <script language="javascript">
        function check_form(form) {
            if (!write_form.name.value) {
                alert('이름을 입력하세요.');
                write_form.name.focus();
                return;
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

            write_form.submit();
        }

    </script>
    <?php  

if(isset($_GET["mode"]))
{
	$mode = $_GET["mode"];
}

if(!strcmp($mode, "form")) {
?>
    <form name="write_form" method="post" action="write.php?mode=post">
        <table class="dtblview">
            <caption>방명록 게시판</caption>
            <tr>
                <td width="100">
                    이름
                </td>
                <td width="650">
                    <input type="text" name="name" size="20">
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
                    <input type="text" name="email" size="40">
                </td>
            </tr>
            <tr>
                <td>
                    홈페이지
                </td>
                <td>
                    <input type="text" name="homepage" size="40">
                </td>
            </tr>
            <tr>
                <td>
                    글 제목
                </td>
                <td>
                    <input type="text" name="subject" size="60">
                </td>
            </tr>
            <tr>
                <td>
                    글 내용
                </td>
                <td>
                    HTML TAG <input type="checkbox" name="html_tag">
                    <br>
                    <textarea name="content" cols="60" rows="10"></textarea>
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
} else if(!strcmp($mode, "post")) {   
  include "dbconn.inc";

  $table_name = "board_free";

  $query = "select max(gno) from $table_name";
  $result = $dbconn->query($query);
  $row = $result->fetch_row(); 

  if($row[0])
    $gno = $row[0] + 1;
  else
    $gno = 1;
  

  $register_date = time();
  $client_ip = getenv('REMOTE_ADDR');

  $name = $_POST["name"];
  $passwd = $_POST["passwd"];
  $email = $_POST["email"];
  $homepage = $_POST["homepage"];
  $subject = $_POST["subject"];
  $content = $_POST["content"];
  $html_tag = $_POST["html_tag"];
    
    
  $subject = addslashes($subject);
  $content = addslashes($content);  
  
  $query = "insert into $table_name  (gno, reply_depth, name, passwd, email, homepage, subject, content, html_tag, register_date, client_ip) values ('$gno', 'A', '$name', password('$passwd'), '$email', '$homepage', '$subject', '$content','$html_tag', '$register_date', '$client_ip')";
//echo("$query");
  $result = $dbconn->query($query);
  ?>
    <script language="javascript">
        document.location.href = 'list.php';

    </script>
    <?php 
}
?>


</body>

</html>
