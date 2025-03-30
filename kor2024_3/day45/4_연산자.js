
// [1] 산술연산자
console.log(10+3);
console.log(10-3);
console.log(10*3);
console.log(10/3);
console.log(10%3);
console.log(parseInt(10/3)); //-> 몫 3, parsInt(값) : 소수점 버리고 정수만 반환함수
console.log(`점수 : ` + 10); // 덧셈이 아닌 연결된다."점수 : 10"

//[2] 비교연산자
console.log(10>3); // true
console.log(10 >= 3); // true
console.log(10<3); //false
console.log(10<=3); //false
console.log(10==3); //false
console.log(10!=3); //true
console.log(10==="10"); //숫자 10과 문자 10은 같다. false
console.log(10!=="10"); //숫자 10과 문자 10은 다르다. true

//[3] 관계연산자
console.log(10>3 && 20>10); //true
console.log(10>3 && 20>30); //false
console.log(10>3 || 20>10); //true
console.log(10>3 || 20>30); //true
console.log(!(10>3)); // true -> false

//[4] 복합대입연산자
let param = 10; // param 변수에 10값을 대입한다.
param += 3;     // +=, param변수에 3을 누적 합한다.
param -= 5;     // -=, param에 5을 뺀 누적 합계를 한다, param = param -5;
//이하 생략

//[5] 증감연산자
let age = 40;
console.log(age++); // 후위증가, 출력 -> 증가, 40
console.log(age);   // 41
console.log(++age); // 선위증가, 증가 -> 출력, 41
console.log(age);   // 42
console.log(age--); // 후위감소, 출력 -> 감소, 42
console.log(age);   // 41
console.log(--age); // 선위감감소, 감소 -> 출력, 40

//[6] 삼함연산자
let scroe = 80;
let result1 = scroe >= 80 ? "합격" : "불합격";
                //  조건        ?true일때코드 : false일때코드
let result2 = scroe >= 80 ? "합격" : score >= 70 ? "재시험" : "불합격   "