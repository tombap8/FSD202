<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>게시판 - 글쓰기 페이지</title>
    <link rel="stylesheet" href="board.css">
</head>
<body>
   
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
    
</body>
</html>