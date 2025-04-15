/**
 * Data Types (7개)
 * 
 * 여섯개의 Primitive Type (가장 작은 타입 단위)
 * 한개의 Objective Type
 * 
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (불리언)
 * 4) undefined (언디파인드)
 * 5) null (널)
 * 6) Symbol (심볼)
 * 
 * 7) Object (객체)
 *      Function
 *      Array
 *      Object
 */

//1) Number 타입
const age = 32;
const temperature = -10;
const pi = 3.14;

console.log(typeof age)
console.log(typeof temperature)
console.log(typeof pi)

const infinity = Infinity; //무한대
const nInfinity = -Infinity; //음의 무한대

//2) String 타입
const codeFanctory = "코드팩토리";
console.log(typeof codeFactory);

const ive = "'아이브 안유진";
console.log(ive);

/**
 * Template Literal
 * 
 * Escaping Character
 * 1) newline -> \n
 * 2) tab -> \t
 * 3) 백슬래시를 스트링내에 표현하고 싶으면 두번 입력하면 됨
 */
const iveYuJin = '아이브\n안유진';
console.log(iveYuJin);
const iveWonYoung = '아이브\t장원영';
console.log(iveWonYoung);
const backSlash = '아이브\\코드팩토리리';
console.log(backSlash);
const smallQutoation = '아이브\'코드팩토리';
console.log(smallQutoation);

//탬플릿리터럴
const iveWonYoung2 = `아이브
장원영`; //백쿼테이션 쓰면 백슬래쉬 쓸 필요 없어짐
console.log(iveWonYoung2);
console.log(typeof iveWonYoung2);

const groupName = '아이브'
console.log(groupName + '안유진');
console.log(`${groupName} 안유진`) //탬플릿리터럴


/**
 * Boolean 타입
 * 
 * - js code 내의 키워드 > 변수명으로 사용 불가능능
 */
const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);


/**
 * Undefined 타입
 * 
 * 사용자가 직접 값을 초기화하지 않았을 때 지정되는 값
 * 직접 undefined로 값을 초기화하는 것은 지양해야한다.
 */
let noInit; //선언하고 배정하지 안
console.log(noInit);
console.log (typeof noInit);


/**
 * Null 타입
 * 
 * undefined와 마찬가지로 값이 없다는 의미
 * JS에서는 개발자가 명시적으로 없는 값으로 초기화할 때 사용됨
 */
let init = null;
console.log(init);
console.log(typeof init); //object 값이 나옴, 일종의 버그임

/**
 * Symbol 타입
 * 
 * 유일무이한 값을 생성할 때 사용됨.
 * 다른 Primitive Type 값들과 다르게 Symbol 함수를 호출해서 사용함
 */
const test1 = '1';
const test2 = '2';
console.log(test1 === test2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1 === symbol2); //false: symbol은 유일무이한 값을 의미

/**
 * Object 타입
 * 
 * Map과 유사함
 * Key:value pair로 이루어져 있음
 */

const dictionary = {
    red : '빨간색',
    ornage: '주황색',
    yellow: '노란색',
}
console.log(dictionary);
console.log(dictionary['red'])

/**
 * Array 타입
 * 
 * 값을 리스트로 나열할 수 있는 타입
 */
const iveMembersArray = [
    '안유진',
    '가을',
    '레이',
    '이서',
];
console.log(iveMembersArray); //List로 출력


/**
 * index
 * 
 * 0부터 시작함
 * 1씩 올라감
 */
console.log(iveMembersArray[0]);
iveMembersArray[0] = '코드팩토리';
console.log(iveMembersArray[0]);
console.log(typeof iveMembersArray[0]);

/**
 * Static typing -> 변수를 선언할 때 어떤 타입의 변수를 선언할지 명시한다.
 * Dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 '추론'한다.
 * JS -> Dynamic Type 
*/