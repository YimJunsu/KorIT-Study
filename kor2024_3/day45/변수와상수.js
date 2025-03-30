//[1] 변수 선언
let value1;
console.log(value1);

//[2] 변수 값 초기화 
let value2 = 10;
console.log(value2);

//[3] 변수 값 호출
value2;              // 변수값 호출
console.log(value2); // 변수값 호출 및 콘솔 출력

//[4] 변수 값 수정
value2 = 30;
console.log(value2);

//[5] 변수 연산(계산)
let value3 = value2 + 100;
console.log(value3);

//[6] 상수 선언 * 무조건 초기화를 한다.
const value4 = `유재석`;

//[7] 상수 값 호출
console.log(value4); // 유재석

//[9] 상수 연산[계산]
const value5 = value4 + `님 안녕하세요`;
console.log(value5)

//[실습1] : prompt() 함수로 입력 받아서 console.log 함수로 콘솔에 입력받은 값 출력
let scroe = prompt('[실습1] 점수를 입력하세요');
console.log(scroe);
//*컴퓨터 기본적인 프로세스(절차) 1. 입력 2. 처리 3. 출력

//[실습2] : prompt() 함수로 국어점수와 수학점수를
//  각각 입력 받고 변수에 저장 후 console.log() 함수에 총점과 평균 출력
let Kscore = Number(prompt('[실습2] 국어 점수 입력'));
let Mscore = prompt('[실습2] 수학 점수 입력') * 1;
let sum = Kscore + Mscore; let aver = sum / 2;
console.log(`총점 = ` + sum);
console.log(`평균 = ` + aver);