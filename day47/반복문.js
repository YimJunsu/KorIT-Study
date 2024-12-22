// [1] 반복문을 사용해야되는 이유
    //1. 반복되는 코드를 간소화 하기 위해서
console.log("안녕하세요.");
console.log("안녕하세요.");
console.log("안녕하세요.");
console.log("안녕하세요.");
console.log("안녕하세요.");
    //2.
for(let i = 1; i <= 5; i++){
    // i는 1부터 5이하까지 1씩증가 반복
    console.log(`안녕하세요.`);
}

//[2] 반복문 사용시 중요한 점.
    // 예) 1. 1부터 10까지 출력하시오.
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

//1. 반복되는 코드                  -   console.log

//2. 반복되지 않는 코드             -   1 ~ 5

//3. 반복되지 않은 코드 패턴/규칙 :  -  1 ~ 5 1씩증가 규칙
    //2. 1부터 5까지 출력(반목문 사용)
for(let value = 1; value <= 5; value++) {
    console.log(value);
}

//[3] 1부터 10까지 누적 합계(모두 더한 값) 출력
let sum = 0;
sum = sum + 1; sum = sum + 2; sum = sum + 3;
sum = sum + 4; sum = sum + 5; sum = sum + 6;
sum = sum + 7; sum = sum + 8; sum = sum + 9; sum = sum + 10;

let sum2 = 0;
for(let value = 0; value <= 10; value++){
    sum2 = sum + value;
}console.log(sum2);

// [4] 구구단 2단을 출력
    //1. 반복문 없이
console.log(`2 x 1 = ${2*1}`);
console.log(`2 x 2 = ${2*2}`);
console.log(`2 x 3 = ${2*3}`);
console.log(`2 x 4 = ${2*4}`);
console.log(`2 x 5 = ${2*5}`);
console.log(`2 x 6 = ${2*6}`);
console.log(`2 x 7 = ${2*7}`);
console.log(`2 x 8 = ${2*8}`);
console.log(`2 x 9 = ${2*9}`);
    //2. 반복문 사용
    // 반복되는 코드 : console.log(`2X = ${2*}`);
    // 반복되지 않는 : 1 ~ 9 ( 1씩 증가 )
    console.log("4번 시작 [2단 구구단]")
for(let b = 1; b <= 9; b++){
    console.log(` 2 X ${b} = ${2*b}`)
}

// [5] 전체(2단 ~ 9단) 구구단를 출력하세요
// * 상-하 관계 - 단for문 안에 곱for문을 포함
console.log("5번 시작 [2단부터 9단 까지 구구단]")
for(let a = 2; a <= 9; a++){
    for(let b = 1; b <= 9; b++){
        console.log(`${a} X ${b} = ${a*b} `)
    }
}

// [6] 간단한 직삼각형 출력하기
/*
    *
    **
    ***
    ****
    *****
*/
let outHTML = '';
for(let line = 1; line <= 5; line++){           //줄for문
    for(let star = 1; star <= line; star++){    //별for문
        outHTML += `★`
    }
    outHTML += `<br/>`
}// for end
 
let body마크업객체 = document.querySelector('body') // 선택자의 마크업을 JS객체로 반환
body마크업객체.innerHTML = outHTML; //JS마크업 객체 내 HTML 삽입/대입

// [7] 배열과 반복문의 관계
let 과일배열 = [`사과`, `포도`, `딸기`]
//과일 배열내 모든 요소를 하나씩 출력 하기
for(let index = 0; index <= 과일배열.length-1; index++){
    console.log(과일배열[index]); 
}


// [8] 반복문 주요 키워드
// 1) continue
for ( let i = 1; i <= 5; i++) { // i는 1부터 5이하까지 1씩 증가 반복
    if (i==3) {continue;}       // i가 3이면 증감식으로 이동, 아래 코드 실행X
    console.log(i);             // 1 2 3(continue) 4 5
}

// 2) break
for(let i = 1; i <= 10; i++) {
    if (i==5) {break;}
    console.log(i);            // 1 2 3 4
}

