/**
 * Variable 선언하기
 * 
 * 1) var - 더이상 사용하지 않는 키워드
 * 2) let
 * 3) const
 */


//var 사용
var name = '코드팩토리'; //따옴표로 묶여 있지 않은 문자열은 변수이름 의미
console.log(name); 

var age = 32;
console.log(age);

//let 사용
let ive = '아이브'
console.log(ive);

/**
 * let과 var로 변수를 선언하면
 * 값을 추후 변경할 수 있음
 */
ive = '안유진';
console.log(ive);

//const 사용
const newJeans = '뉴진스';
console.log(newJeans);
//newJeans = '코드팩토리' (콘스트는 삽입값을 변경 할 수 없음)

/**
 * 선언과 할당
 * 
 * 1) 선언: 변수를 선언하는 것 (변수 자체의 생성)
 * 2) 할당: 선언된 변수에 값을 넣어주는 것
 */

var name = '코드팩토리';
console.log(name);
// 변수의 선언과 할당이 모두 이루어짐

let girlFriend;
console.log(girlFriend);
//undefined 출력 > 변수를 선언하였지만, 값을 할당하지 않았음

const girlFriend2;
//const 키워드는 undefined로 초기값을 할당 할 수 없음 (추후 값을 변경할 수 없기 때문에)