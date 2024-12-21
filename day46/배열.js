//[1] 배열변수 선언
let pointArrary = [100, 50, 30];
//[2] 배열변수의 전체 요소 호출
console.log(pointArrary)
//[3] 특정한 위치의 요소 호출
console.log(pointArrary[1]); //두번째 위치한 //50
//[4] 배열의 전체 요소 수정
pointArrary = ['유재석', '강호동', '신동엽']
console.log(pointArrary); // ['유재석', '강호동', '신동엽']
//[5] 배열의 특정 요소 값 수정
pointArrary[1] = '강호동2';
console.log(pointArrary);
//[6] 배열의 요소 추가/삽입
pointArrary.push('서장훈'); //push : 맨뒤에 새로운 요소 추가
console.log(pointArrary);

pointArrary.splice(1,0,'하하'); // 두번째 인덱스의 하하 요소 삽입
console.log(pointArrary);

//[7] 배열의 특정 인덱스 요소 삭제
pointArrary.splice(1,1); // 두번째 요소부터 1개 삭제
console.log(pointArrary);
pointArrary.splice(0,3); // 첫번째 요소부터 3개 삭제
console.log(pointArrary);

//[8] 배열내 특정 값 찾기
let searchIndex = pointArrary.indexOf('서장훈');
console.log(searchIndex); // 0 찾을 값인 서장훈은 0번째 인덱스에 있다.

searchIndex = pointArrary.indexOf('유재석');
console.log(searchIndex); // -1 : 찾을값인 유재석은 존재하지 않으므로

searchIndex = pointArrary.includes('서장훈');
console.log(searchIndex); // true

searchIndex = pointArrary.includes('유재석');
console.log(searchIndex); // false

//[실습 EX] : 임의점수 3개를 하나의 배열 저장하시오. 배열내 합계와 평균을 구하시오.
let scroe = [100,45,35];
let 합계 = scroe[0] + scroe[1] + scroe[2]; // 각 인덱스 호출, 합산
let 평균 = 합계 / scroe.length;
console.log(합계);
console.log(평균);

//[실습 EX2] : 새로운 학생명을 입력받아 배열내 이미 존재하면 true 아니면 false
let stuli = ['유재석', '강호동', '신동엽'];
let newstu = prompt('학생명을 입력하세요.');

// 입력받은 새로운 학생명이 배열내 존재 여부, indexOf(), includes()
let 검색결과 = stuli.includes(newstu) ? true : false   //삼항 연산자 활용
console.log(검색결과);