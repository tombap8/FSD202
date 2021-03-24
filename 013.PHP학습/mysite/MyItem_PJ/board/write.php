<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>게시판 - 글쓰기 페이지</title>
    <link rel="stylesheet" href="board.css">
    <script language="javascript">
        
        // 폼태그 안에서 버튼 클릭시 함수를 호출하면
        // 호출된 함수에서 함수의 전달값 form 이라고 쓴 부분에 
        // form 요소의 모든 입력요소가 전달된다!!!
        
        function check_form(form) {//form-폼내부요소 전달값
            
            // 아래 모든 if문의 조건문은 이렇다!
            // !write_form.name.value
            // 폼요소이름명.요소이름.값 -> 이것 앞에 NOT 연산자
            // 해석: 선택된 요소의 값이 있으면 true
            //       값이 없으면 false 이므로 false일때
            //      메시지를 띄우려고 NOT(!)연산자로 결과를
            //      반대로 만들어 준것이다
            
            if (!write_form.name.value) {
                alert('이름을 입력하세요.');
                write_form.name.focus();//포커스 넣기
                return;//돌아감(함수를 빠져나감!)
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
            write_form.submit();
            // 서브밋이 실행된 form요소의 action속성값에 셋팅된
            // 페이지로 이동한다.
            // 여기서는 "write.php?mode=post"
            // 즉, 본 페이지를 다시 부르면서 GET방식으로
            // url에 키=값을 전달한다.
        }

    </script>
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