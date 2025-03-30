// [1] 매개변수 X, 반환값 X
function func1(){
    console.log(`func1 execute`);
}
func1(); 

// [2] 매개변수 o, 반환값 x , 함수정의
function func2(x,y){
    console.log(`func2 execute ${x+y}`);
}
func2(2,3); // 함수 실행/호출 // 인수값 2 와 3 전달

// [3] 매개변수 o, 반환값 o
function func3(x,y){
    console.log(`func3 execute`)
    let result = x + y
    return result;
}
let a = func3(3 , 5);   // 인수값이란 함수 호출시 전달하는 값값
console.log(a); // 8

// [4] 매개변수x, 반환값 o, 함수 정의
function func4(){
    console.log(`func4 execute`);
    return 10;
}
let b = func4(); // 함수 실행/호출
console.log(b); // 10

//[실습1] 주어진 숫자가 홀수인지 짝수인지 반환하는 함수를 만드시오.
function isEvenOrOdd(value){
    if(value % 2 ==0){ // 만약에 매개변수 값이 2로 나누기 했을때 나머지가 0이면
        return "Even"
    } else {
        return "Odd"
    }
}
    // 함수실행/사용 : 함수명을 작성하고 소괄호 안에 인수값을 넣는다.  함수실행결과 반환값을 변수에 저장한다.
let result1 = isEvenOrOdd(3);
console.log(result1); // Odd
console.log(isEvenOrOdd(4)); // Even

//[실습2] 주어진 배열에서 가장 큰수를 반환하는 함수를 만드시오.
function findMax(arr){
    let max = 0; // 최댓값 변수 0으로 초기화
    for(let index = 0; index <= arr.length - 1; index++){ //index는 0부터 배열내 마지막 인덱스까지 1씩 증가 반복
        if(arr[index] > max){ // 만약 index번째 요소가 최댓값 변수보다 크면
            max = arr[index]; // index번째 요소를 최댓값 변수에 대입

        }
    }
    return max; // 배열내 가장 큰 값을 반환하는 함수.
}
let array1 = [3, 5, 2, 1];
console.log(findMax(array1)); //5

let array2 = [1100, 1500, 2100, 1700];
console.log(findMax(array2));

//[실습3] 주어진 배열을 오름차순으로 정렬하여 반환하는 함수 만드시오. 01:50:12
function arrOrderBy(arr){
    for(let index = 0; index <= arr.length -1; index++){
        // index는 0부터 배열의 마지막 인덱스 까지 1씩 증가 반복
        //for 중첩
        for(let index2 = index + 1; index2 <= arr.length -1; index2++){
            if(arr[index] > arr[index2]){
                //만약에 index번째 요소가 index2번째 요소보다 크면
                // *스왑* : 두 변수간의 값 교체
                let temp = arr[index];
                arr[index] = arr[index2];
                arr[index2] = temp;
            }
        }
    } //for end
    return arr; //반환
}

let array3 = [1100, 1500, 2100, 1700];
console.log(arrOrderBy(array3)); 
