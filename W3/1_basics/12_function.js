/**
 * function -> 함수
 */

/**
 * 만약에 2라는 숫자에 * 10/ 2 % 3 스트링으로 변환해서
 * 반환받고싶다면 어떻게 해야할까?
 */
console.log((2 * 10 / 2 % 3).toString());
console.log((3 * 10 / 2 % 3).toString());

/**
 * DRY
 * D -> Don't
 * R -> Repeat
 * Y -> Yourself
 */
function calculate() {
    console.log((3 * 10 / 2 % 3).toString());
}

// calculate();

function calculate(number) {
    console.log((number * 10 / 2 % 3).toString());
}

/**
 * 함수에서 입력받는 값에대한 정의를 parameter라고한다.
 * 
 * 실제 입력하는 값은 argument라고 한다.
 */
calculate(4);
calculate(5);

//여러개의 parameter를 입력받을 수 있음음
function multiply(x, y) {
    console.log(x * y);
}
multiply(2, 4);

//default 값을 지정해놓을 수 있음
function multiply(x, y = 10) {
    console.log(x * y);
}
multiply(2, 4); //8
multiply(2); //10

/**
 * 반환받기
 * return 받기
 * 함수 안에서만 정의된 것 > 함수 밖에서도 출력 가능
 */
function multiply(x, y) {
    return x * y;
}
const result1 = multiply(2, 4); //변수 선언과 유사
console.log(result1); //8
const result2 = multiply(4, 5);
console.log(result2); //20

/**
 * Arrow 함수
 */
const multiply2 = (x, y) => { 
    return x * y;
} //arrow 함수 정의 형식
console.log(multiply2(2, 4)); //8

const multiply3 = (x, y) => x * y; //간결하지만 같은 기능
console.log(multiply3(4, 5)); //20

const multiply4 = x => x * 2; //간결한 ver (parameter 1개)
console.log(multiply4(2));

const multiply5 = x => y => z => `x: ${x} y: ${y} z:${z}`;
console.log(multiply5(2)(5)(7));

function multiply6(x) { //multiply5를 일반적으로 정의한 경우
    return function (y) { //반환값이 함수인 경우
        return function (z) //반환값이 함수인 경우
            return `x: ${x} y: ${y} z:${z}`
        }
    }
}
console.log(multiply6(3)(4)(5)); 

const multiplyTwo = function (x, y) {
    return x * y;
}
console.log(multiplyTwo(4, 5));

const multiplyThree = function (x, y, z) {
    console.log(arguments);
    return x * y * z;
}

console.log(multiplyThree(4, 5, 6));

//원하는 만큼 값 무한하게 입력 가능함
//입력된 arguments를 모두 곱한 값을 출력함
const multiplyAll = function (...arguments) {
    return Object.values(arguments).reduce((a, b) => a * b, 1);
}
console.log(multiplyAll(3, 4, 5, 6, 7, 8, 9, 10));

// immediately invoked function
//함수 선언 직후 실행되는 함수 > 소 괄호로 묶으면 됨
(function(x, y){
    console.log(x * y);
})(4, 5)

console.log(typeof multiply); //function
console.log(multiply instanceof Object); //좌: 비교하려는 값 우: 같은지 질문하는 대상