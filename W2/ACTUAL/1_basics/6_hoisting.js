/**
 * Hoisting
 * 
 * Hoisting은 무엇인가?
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상
 */

console.log('Hello');
console.log('World');

//오류가 나오는가?
console.log(name); //undefined (선언O 할당X)
var name = "코드팩토리";
console.log(name); //코드팩토리

//위의 코드 실행 단계 
var name;
console.log(name);
name = '코드팩토리';
console.log(name);

//let 과 const 도 hoisting 발생
console.log(yuJin);
let yuJin = '안유진'; //let을 사용하면 값을 초기화 되기 전에 가져오는 버그 해결 가능

console.log(yuJin);
const yuJin = '안유진'; 