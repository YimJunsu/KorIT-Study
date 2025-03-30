// [1] 함수 정의 하기
function myFunc(x, y){
    console.log(`myFunc 실행`);
    return true;
}

// [2] 함수를 실행하기
let result1 = myFunc(3 , 2);
console.log(result1);

console.log(myFunc(7,3));

// [3] 수학 1차함수 정의/만들기
function 함수1차(a, b, c) {
    let result = (a*b) + c; //1차 함수
    return result;
}

// [4] 1차함수 실행하기 
let result2 = 함수1차(3,2,7);
console.log(result2);

// [5] 믹서기 함수 정의/만들기
function mixFunc(fruit){
    let result = fruit + "주스"
    return result;
}
// [6] 믹서기 함수 사용하기
console.log(mixFunc('바나나'));
console.log(mixFunc(`딸기`));
 
//[실습] promt() 함수로 두개의 점수를 입력받아, 덧셈 함수에 입력받은 값을 전달 결과 출력
let value1 = Number(prompt("숫자 1번 입력"));
let value2 = Number(prompt('숫자 2번 입력'));

function sum(x,y){
    let result = x + y;
    return result;
}
console.log(sum(value1,value2));

//[실습2] 앞전에 작성한 실습에서 뺄셈함수, 곱셈함수
function 뺄셈함수(x,y){// [메소드 정의] : function 함수명(){로직;return 반환값}
    let result = x - y;
    return result;
}

function 곱셈함수(x,y){
    let result = x * y;
    return result;
}

console.log(뺄셈함수(value1, value2));
console.log(곱셈함수(value1, value2));