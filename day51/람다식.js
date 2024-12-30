//[1] 람다식 함수 정의하기.
    //선언적 함수
function method1(a ,b){return a + b;}
    // 람다식 함수 선언, =>
(a, b) => {return a + b;}
    // 람다식 함수 선언 하고 상수에 저장
const method2 = (a, b) => {return a + b;}

//[2] 람다식 함수 호출하기.
    // 선언적 함수 호출
    console.log(method1(2,3))   //5
    // 람다식 함수 호출, 함수명이 없어서 호출 X
    // 람다식 함수를 호출하기 위해 상수를 호출O
    console.log(method2(2,3))   // 5

//[3] 람다식 함수의 매개변수와 리턴값
const getName = name => {
    return `안녕,${name}`
}

console.log(getName("유재석")) // 안녕, 유재석

const isEven = num => console.log(num) // 중괄호 생략 가능
isEven(2025) //2025

//[4] 람다식 함수의 활용처
const words = ['사과', '수박', '딸기', '오렌지']
    // - 배열내 모든 요소를 하나씩 출력하시오.
    // 방법 1
for(let index = 0; index <= words.length-1; index++){
    console.log(words[index]);
}
    // 방법 2. forEach 람다함수를 바로 forEach 적용.
words.forEach((element) => { console.log( element ) } );
    // 방법 2, forEach 다른시점, 람다 함수를 상수에 대입하고 forEach적용
const method3 = element => console.log(element)
words.forEach(method3);

    // 방법3 : map
words.map(element => console.log(element));

    // 방법3 : forEach와 amp 차이점
let newwords = words.map( element => {return `${element}과일`} )
console.log(newwords);

// [실습 1] : x와 y를 매개변수를 받아서 뺄셈의 결과를 반환하는 람다 함수 정의 
const minus = (x, y) => { return x - y; }
console.log(minus(5, 2));

// [실습 2] : const scores = [92, 72, 35, 86]의 모든 요소를 하나씩 출력하는 forEach함수 사용
const scores = [92, 72, 35, 86];
for(let index = 0; index <= scores.length-1; index++){
    console.log(scores[index]);
}
//배열변수명.forEach((반복변수) => {실행문;})
scores.forEach( (val) => { console.log( val ) } );

// [실습 3] : const scores = [92, 72, 35, 86]의 모든요소에 5점씩 추가한 새로운 배열 map함수로로 구현하기
//배열변수명.map((반복변수) => {return}) , map만 리턴 가능
let newScores = scores.map((val) => {return val + 5;})
console.log(newScores) // [97, 77, 40, 91]