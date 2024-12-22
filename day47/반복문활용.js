/*
[문제1] 아래 배열을 이용한 영화 평점 출력 구현하기.
1. 영화이름 목록 , 영화이름과 영화평점은 동일한 인덱스를 사용한다.
    - movieNames = [ '히든페이스' , '위키드' , '글래디에이터2' , '청설' ]
2. 영화 평점 목록 , 각 영화별 평점은 10점 만점
    - movieRating = [ 8 , 4 , 7 , 6 ]
3. HTML 예시 
    히든페이스            ★★★★★★★★☆☆
    위키드              ★★★★☆☆☆☆☆☆
    글래디에이터2        ★★★★★★★☆☆☆
    청설                ★★★★★★☆☆☆☆
    
[문제2] 6개 좌석 상태 출력 구현하기.  
1. 좌석은 총 6개 , 빈좌석인지 예약석인지는 6개 좌석 정보를 임의로 *배열* 구성 
2. 아래와 같이 좌석를 2칸씩 3줄 출력한다.
3. 빈좌석이면 color:blue 색상 표기 , 예약석이면 color:red 색상 표기 하시오.
4. HTML 예시 
    빈좌석 예약석   
    예약석 빈좌석
    예약석 빈좌석

[문제3]학생들의 점수 출력하는 구현 
    1. 학생이름배열 선언 
        let nameArray = [ '유재석' , '강호동' , '신동엽' ]
    2. 학생점수배열 선언 
        let scores = [ 92 , 86 , 72 ]
    3. 아래와 출력 , 100점 만점 이라고 했을때 점수를 ● 표기 나머지 점수 ○
        이름    점수 시각화 
        유재석  ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●○○○○○○○
        강호동  ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●○○○○○○○○○○○○
        신동엽  ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●○○○○○○○○○○○○○○○○○○
*/
//[문제1]
    // 영화의 제목과 평점 샘플 배열 선언 (영화 제목 : 단 / 별 : 곱)
 let movieNames = [ '히든페이스' , '위키드' , '글래디에이터2' , '청설' ];
 let movieRating = [ 8 , 4 , 7 , 6 ];

    // HTML에 출력할 문자열 구성
 let outHTML = '<table border=1>';   // <table> 시작
    // index는 0부터 마지막 인덱스까지 1씩 증가 반복

 for(let index = 0; index <= movieRating.length-1; index++){
    let names = movieNames[index];
    outHTML += `<tr> <td> ${names} </td>` //    <tr> 마크업 시작
        //(4) 영화 평점 만큼 별출력, 남은별은 빈 별 
        let starHTML = '';                  // 별 출력 HTML 구성
        for(let star = 1; star <= 10; star++){
            if(movieRating[index] >= star){ // 만약 현재 star 보다 평점이 더 크면
                starHTML += '★'            // 검은색 별 추가            
            } else {
                starHTML += '☆'            // 흰 별 추가
            }
        }
    outHTML += `<td> ${starHTML} </td<> </tr>` //   </tr> 마크업 끝
}
 outHTML += `</table>`  // </table>마크업 끝

        //(3) DOM객체를 이용한 HTML의 변수값 출력하기
let exampleDIV1객체 = document.querySelector('#exampleDIV1') // 특정한 선택자의 마크업을 JS객체를 가져온다.
exampleDIV1객체.innerHTML = outHTML;                        // 가져온 마크업 객체의 innerHTML를 이용하여 구성한 HTML 대입.


//[문제2]
// 1) 배열 선언
let seat = [`빈좌석`, `예약석`, `예약석`, `빈좌석`, `예약석`, `빈좌석`]

// 2) HTML에 출력할 HTML문자열 구성.
let seatHTML = '';
for(let i = 0; i <= seat.length-1; i++) {
    // - index는 0부터 마지막인덱스까지 1씩 증가 반복, 6회
    // index번째 값을<span>로 구성하기. + 만약에 좌석 정보가 '빈좌석'이면 'blue', 예약석이면 'red'
    seatHTML += `<span style="color : ${seat[i] == '빈좌석' ? 'blue':'red'} ">
                ${seat[i]}
                 </span>`
    // + 2배수 마다 줄바꿈처리   = span 사용
    if( (i+1) % 2 == 0) { //현재 인덱스에 +1 했을때 2 배수이면
        seatHTML += `</br>` // 줄바꿈 처리를 하겠다.
    }
}
// 3) 특정 html 선택자로부터 마크업객체를 가져와서 html대입
let exampleDIV2객체 = document.querySelector(`#exampleDIV2`)
exampleDIV2객체.innerHTML = seatHTML


//[문제3]
// 1) 학생이름목록, 점수목록 배열선언
let nameArray = [ '유재석' , '강호동' , '신동엽' ]
let scores = [ 92 , 86 , 72 ]

// 2) HTML에 출력할 html 문자열 구성, HTML에서 작성할 html코드를 js에서 문자열로 작성중
let studentHTML = `<table> <tr> <th> 이름 </th> <th> 점수 시각화 </th> </tr>`
for(let index = 0; index <= nameArray.length - 1; index++){
    // index는 0부터 마지막 인덱스까지 1씩 증가 반복, 3회 반복

    studentHTML += `<tr> <td> ${nameArray[index]} </td>`                // 학생명 <td> 대입

        // 4) 점수 출력
        let scoreHTML = ''; // 동그라미를 문자열 구성하는 html
        for(let score = 1; score <= 100; score++) {
            if(scores[index] >= score){ //만약 index번째 점수가 현재 scroe보다 크면
                scoreHTML += '●'
            }else{
                scoreHTML += '○'
            }
        }
    studentHTML += `<td> ${scoreHTML} </td> </tr>`                  //점수 시각화 <td> 대입
}
studentHTML += `</table>`

// 3) 특정한 선택자의 마크업을 JS객체로 가져오기
let exampleDIV3객체 = document.querySelector(`#exampleDIV3`)
exampleDIV3객체.innerHTML = studentHTML;    // -js에서 구성한 HTML코드를 대입한다.

//[문제4]
/*[문제4] 로또 번호 입력 프로그램 .
- 조건1 : 배열내 중복 값 은 없어야 한다.
- 조건2 : 1 부터 45 사이의 값만 입력받는다. 
- 조건3 : 총 6개의 번호만 입력받는다.
- 입력조건 : prompt()함수 출력 
- 출력조건 : 특정 div에 입력받은 로또 번호 6개를 출력하기.
*/