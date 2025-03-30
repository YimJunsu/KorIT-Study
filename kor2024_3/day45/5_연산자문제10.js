//[1]
let kscore = Number(prompt('국어점수 입력하기'));
let escore = Number(prompt(`영어점수 입력하기`));
let mscore = Number(prompt(`수학점수 입력하기`));
sum = kscore + escore + mscore; aver = sum / 3;
console.log("합계 : " + sum); console.log("평균 : " + aver);

//[2]
let radius = Number(prompt('반지름 값 입력하기'));
let 넓이 = radius * radius * 3.14
console.log(넓이);

//[3] 

//[4]
let number = Number(prompt('수를 입력하세요'));
console.log(number % 2 !== 0 ? true : false);

//[5]
let number5 = Number(prompt('수를 입력하시요'));
console.log(number5 % 7 === 0 ? true : false);

//[6]
let id = prompt('아이디 입력칸'); let pw = prompt(`비밀번호 입력칸`);
console.log(id == 'admin' && pw == '1234' ? true : false);

//[7]
let num = Number(prompt('수를 입력하시오'));
console.log(num % 2 !== 0 && num % 7 === 0 ? true : false);

//[8]

//[9]
let score1 = Number(prompt('1차점수')); let score2 = Number(prompt('2차점수'));
sum9 = score1 + score2;
console.log(sum9>=150 ? 합격 : 불합격);

//[10]
let name1 = prompt('첫번째 이름을 입력하세요.');
let name2 = prompt('두번째 이름을 입력하세요.');
console.log(name1 === '유재석' )
