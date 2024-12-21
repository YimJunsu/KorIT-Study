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