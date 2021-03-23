<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>게시판 리스트 페이지</title>
    <link rel="stylesheet" href="board.css">
</head>
<body>
   
   <!--게시판 리스트-->
    <table class="dtbl">
        <caption>방명록 게시판</caption>
        <!--상단 컬럼명 표시영역-->
        <thead>
            <tr>
                <th>번호</th>
                <th>글 제목</th>
                <th>글 쓴이</th>
                <th>등록일자</th>
                <th>조회수</th>
            </tr>
        </thead>
        
        

        <?php 
        
        # 1-1. 페이지번호 : 처음로딩시엔 첫페이지이니까 1을 넣어놓는다!
        # 해당 페이지를 GET방식으로 전달할때 사용할 변수
        $no = 1;
        
        # 1-2. 만약 GET 방식으로 넘어오는 값이 있다면 $no에 넣어준다
        # GET방식 변수가 셋팅되었나 검사하는 메서드는? isset()
        if(isset($_GET["no"])){ // 파라미터 키값 no라는 것이 있냐?
            $no = $_GET["no"]; // 넘어온값을 변수에 할당
        } ///////// if /////////////////////////////////////
        
        
        # 2. 한 페이지당 줄수 : 
        #       리스트 한 페이지당 몇 개의 레코드를 보여줄 것인가?
        $linePerPage = 7;
        
        
        // 1. DB연결 문자열 불러오기
        include "DBconn.inc";
        
        /// 2. 전체 테이블 데이터 불러오는 쿼리문 만들기
        $sql = "SELECT * FROM `member` ORDER BY `idx` DESC ".
            "LIMIT ".(($no-1)*$linePerPage).",".$linePerPage;
        // LIMIT 0,5 -> 첫 레코드 부터 5개 가져오기
        // ORDER BY `idx` DESC
        // `idx` 등록된 글 번호 내림차순(최신글 맨위!)
        // LIMIT 시작레코드번호,개수 -> 시작레코드번호 부터 몇개
        
        # 시작 레코드 번호는 어떻게 만들 수 있는가?
        
        # 예컨데 한 페이지 당 5개를 보여줄 경우
        # 첫 페이지는 0번 -> 페이지번호 1번
        # 두번째 페이지는 5번 -> 페이지번호 2번
        # 세번째 페이지는 10번 -> 페이지번호 3번
        # 세번째 페이지는 15번 -> 페이지번호 4번
        
        # 시작 레코드번호 계산식 : 
        # 페이지번호, 한 페이지당 줄수를 이용하여 계산!
        # => (페이지번호-1)*한 페이지당 줄수
        # 검증:
        # 1페이지: (1-1)*5 = 0
        # 2페이지: (2-1)*5 = 5
        # 3페이지: (3-1)*5 = 10
        # 4페이지: (4-1)*5 = 15
        
        
        
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

        
        
        
        <!--중앙 레코드 표시부분-->
        <tbody>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
        <!--하단 페이징 표시부분-->
        <tfoot>
            <tr>
                <td colspan="5">1</td>
            </tr>
        </tfoot>
    </table>
   
   
   
    
</body>
</html>