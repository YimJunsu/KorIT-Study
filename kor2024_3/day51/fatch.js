//[1] fetch 함수를 이용한 GET 요청, 전체요청
/*
    - fetch('요청할URL ', 옵션)                   <-- 자바의 컨트롤러URL 작성성
        .then(respone => respone.json()) <-- 요청 결과를 JSON(JS객체)형식으로 변환
        .then(data => {실행문;} )         <-- 요청 결과 후 실행할 코드 작성.
        .catch(error => {실행문;})        <-- 예외 발생시 실행할 코드 작성.        

    - 옵션
        {
            method : 'GET'/'POST'/'PUT'/'DELETE'        <-- 4개중 사용할 HTTP메소드를 작성, 생략시 GET 됨    
            headers : { 'Content-Type' : 'application/json'} <-- 서버에게 보낼 자료의 json형식으로 보내기, 타입 명시
            body : JSON.stringify(전송할 객체),         <-- 서버에게 보낼 객체체
            }
*/
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then( date => console.log(date))
    .catch(error => { console.log(error)})

//[2] fetch 함수를 이용한 GET 요청, 샘플 게시물 1개요청, /3 = 3번 게시물
fetch('https://jsonplaceholder.typicode.com/posts/3')
    .then(response => response.json())
    .then(data => {console.log(data)})
    .catch(error => {console.log(error)});

//[3] fetch함수를 이용한 POST 요청, 임의의 게시물 저장/쓰기 요청
const board = {title : '새로운제목', body : '새로운내용', userId : 1}; // 임의의 게시물 객체
const option1 = {                                   // fetch 함수의 전송 옵션
     method : 'POST',                               // 1) 전송 http 메소드 작성(GET/POST/PUT/DELETE중)
     headers : { 'Content - Type' : 'application/json '}, // 2) 보낼자료의 형식 설정{'Content - Type ': 'application/json'}
     body : JSON.stringify(board)                       // 3) 보낼자료, JSON.stringfy(객체) 함수 : JSON타입 --> 문자열타입
    }
fetch('https://jsonplaceholder.typicode.com/posts', option1)
.then(r => r.json())
.then( data => {console.log(data)})
.catch(e => { console/length(e)})

//[4] fetch 함수를 이용한 PUT 요청, 임의 게시물 수정 요청
    //1번 게시물의 수정할 정보 객체
const upBoard = {id :1, title : '수정할제목', body : '수정할내용', userId : 1}
    //PUT 옵션 객체
const option2 = {
    method : 'PUT', // <-- method속성은 전송할 http메소드 선택(GET/POST/PUT/DELETE)
    headers : { 'Content-Type' : 'application/json'}, // <-- 전송할 데이터의 (JSON)타입 설정
    body : JSON.stringify(upBoard)          // <-- 전송할 객체를 문자열 타입으로 변환해서 보내기
}

fetch('https://jsonplaceholder.typicode.com/posts/1',option2)
.then(r => r.json()) // <-- 응답 결과는 json타입으로 변환
.then(d => { console.log(d)}) // <-- 응답 결과가 도착했을때
.catch(e => {console.log(e)}); // 예외가 발생했을때.

//[5] fetch 함수를 이용한 DELETE 요청, 임의의 게시물 삭제 요청
const option3 = {
    method : 'DELETE'   // <-- method속성은 전송할 http메소드 선택, 삭제요청 DELETE메소드
}

fetch('https://jsonplaceholder.typicode.com/posts/1, option3')
.then( r => r.json() )
.then( d => {console.log(d)})
.catch( e => {console.log(e)});


// 실습1 : fetch함수 이용하여 GET 요청하여 응답을 CONSOLE에 출력
// 요청 URL : 'https://reqres.in/api/users/2'
fetch('https://reqres.in/api/users/2', {method:'GET'} )
.then(response => response.json())
.then(data => {console.log(data)})
.catch(error => {console.log(error)});

// 실습2 : fetch함수 이용하여 POST 요청하여 응답을 CONSOLE에 출력
// 요청 URL : 'https://reqres.in/api/users'
// 보낼 데이터 :{ "name": "morpheus", "job": "Leader" }
fetch('https://reqres.in/api/users', {
    method : 'POST',
    headers : { 'Content-Type' : 'application/json' },
    body : JSON.stringify({"name" : "morpheus", "job" : "learder"})
})
    .then(r => r.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

// 실습3 : fetch함수를 이용하여 PUT 방식으로 요청하여 응답을 CONSOLE에 출력하시오.
// 요청 URL : 'https://reqres.in/api/users/2'
// 보낼 데이터 : {"name": "morpheus", "job": "zion resident"}
fetch('https://reqres.in/api/users/2', {
    method : 'PUT', headers : { 'Content-Type' : 'application/json'},
    body : JSON.stringify({"name": "morpheus", "job": "zion resident"})
})
    .then(r => r.json())
    .then(data => console.log(data))
    .catch(error => console.log(e));

// 실습4 : fetch함수를 이용하여 DELETE 방식으로 요청하여 응답을 CONSOLE에 출력하시오.
// 요청 URL : 'https://reqres.in/api/users/2'
fetch('https://reqres.in/api/users/2', {method : 'DELETE'})
    // .then(r=>r.json())
    .then(data=>{console.log(d)})
    .catch(error=>{console.log(error)});