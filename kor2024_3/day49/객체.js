//[1] 객체 선언하기
//{ }

//[2] 객체 생성시 속성 정의하기
//{속성명1 : 10, 속성명2 : 'Hello'};

//[3] 생성한 객체를 변수에 대입하기
let 객체변수1 = {속성명1 : 10, 속성명2 : 'JAVA'};

//[4] 객체를 호출하기
객체변수1;
console.log(객체변수1);

//[5] 객체의 특정 속성 값 호출하기
객체변수1.속성명1
console.log(객체변수1.속성명1) // 10

//[6] 객체의 특정 속성 값 수정하기
객체변수1.속성명1 = 20;

//[7] 객체의 특정 속성 삭제하기.
delete 객체변수1.속성명1;
console.log(객체변수1);

//[8] 객체내 다양한 속성값들
let 객체변수2 = {
    속성명1 : 10,
    속성명2 : 'Hi',
    속성명3 : false,
    속성명4 : null,
    속성명5 : [1, 2, 3, 4],
    속성명6 : function add(){},
    속성명7 : {서브속성1 : 10}
}
//[실습1] : 게시판을 구현하기 위한 게시물 객체를 표현하시오.
let boardService = {
    title : "안녕하세요",
    content : 'JS처음입니다',
    writer : '유재석',
    reviewer : 3,
    date : '2024-12-23'
}

console.log(boardService);

//[실습2] : 회원을 구현하기 위한 아래와 같은 정보를 회원객체로 표현, 출력.
let member = {
    id : 'qwe',
    pw : 1234,
    nickname : `유재석`,
    age : 40
}

console.log(member.nickname, member.age);

//[실습3] : prompt로 부터 국어,영어,수학 점수를 정수로 입력받아 score 객체에 저장하시오.
let kor = Number(prompt('국어 : '));
let math = Number(prompt('수학 : '));
let eng = Number(prompt('영어 : '));

let score = {kor : kor, math : math, eng : eng}

console.log(score);
let sum = score.kor + score.math + score.eng;
let avg = sum / Object.keys(score).length;//

console.log(Object.keys(score));
