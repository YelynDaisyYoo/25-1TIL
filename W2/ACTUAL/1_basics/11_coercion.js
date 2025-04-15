/**
 * 타입 변환
 * type conversion
 * 
 * 1) 명시적 (강제로 명령)
 * 2) 암묵적
 */
let age = 32;

//명시적 num > string
let stringAge = age.toString(); //함수
console.log(typeof stringAge, stringAge); //string type으로 변경

//암묵적
//기능적으로 가능하지만, 헷갈리기 때문에 이러한 코드는 지양해야 함
let test = age + ''; 
console.log(typeof test, test);//숫자 + 스트링 > string type
console.log('98'+2); //982 string type
console.log('98'*2); //196 num
console.log('98'-2); //96  num

/**
 * 명시적 변환 예시
 */
//string으로 변환
console.log(typeof (99).toString()); //string type
console.log(typeof (true).toString()); //string type
console.log(typeof (Infinity).toString()); //string type

//num으로 변환
console.log(typeof parseInt('0'), parseInt('0')); //정수형 number type
console.log(typeof parseFloat('0.99'), parseFloat('0.99')); //실수형 number type
console.log(typeof +'1', +'1'); //number type

//boolean으로 변환 
//string에 값이 있으면, true
console.log(!'x'); //false
console.log(!''); //true
console.log(!!'x'); //true
console.log(!!0); //false
console.log(!!'0'); //true
console.log(!!'false'); //true
console.log(!!false); //false
console.log(!!undefined); //false
console.log(!!null); //false
console.log(!!{}); //object는 값이 없어도 true
console.log(!![]); //array는 값이 없어도 true

/**
 * false인 경우
 * 1) 빈 string
 * 2) 값이 없는 경우
 * 3) 0 
 */