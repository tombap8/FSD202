// 아이템 페이지 JS - item.js ////

// get방식으로 넘어온 파라미터 처리하기!
var pm = location.href;
console.log(pm);
// location.href 의 두얼굴~~~
// 1. 이퀄 왼쪽에 쓰면 오른쪽 url값으로 페이지이동
// 2. 이퀄 오른쪽에 쓰면 브라우저 url값을 가져옴!


// url가공전 물음표가 있는지 확인하여 없으면 돌려보낸다!
// indexOf(문자열) -> 찾는 문자열의 순번을 리턴함!
// 만약 찾는 문자열이 없으면 -1을 리턴함!!!!
console.log("문자열 찾기:" + pm.indexOf("?"));
if (pm.indexOf("?") === -1) {
    alert("비정상적인 접근입니다!");
    location.href = "index.html";
} ////// if //////////////////////


// url문자값 가공처리하기 /////

// 1. ?(물음표)를 기준으로 잘라서 뒤의 배열값을 사용한다!
pm = pm.split("?")[1];
// 물음표 뒤쪽 값은 배열번호 1번이다!
console.log("물음표로 잘라 뒤에것:" + pm);

// 2. =(이퀄)로 자르고 뒤엣것!
pm = pm.split("=")[1];
// 이퀄 뒤쪽 값은 배열번호 1번이다!
console.log("이퀄로 잘라 뒤에것:" + pm);

//3. 한글문자깨짐 방지하여 보낸것 다시 한글로 바꾸기!
// escape로 변환된 문자를 unescape로 복원한다
pm = unescape(pm);
console.log("한글복원:" + pm);
