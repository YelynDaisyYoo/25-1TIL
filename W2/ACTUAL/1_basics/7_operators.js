/**
 * Operators 연산자
 */

/**산술 연산자
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */
console.log(10+10);
console.log(10-7);
console.log(10*10);
console.log(10/2);
console.log(10%3);

console.log(10*(10+10)); //괄호의 사용용

/** 
 * 증가와 감소
*/
let number = 1;
number ++;
console.log(number);

number --;
console.log(number);


/**
 * 연산자의 위치
 */
let result = 1;
console.log(result);

result = number ++; //증가 감수 오퍼레이터가 가장 나중에 작동
console.log(result, number);

result = number --;
console.log(result,number);

//아래 두개 연산은 실제 사용되지 않음
result = ++ number; //증가 먼저, 할당 다음
console.log(result, number);

result = -- number; //감소소 먼저, 할당 다음
console.log(result, number);


/**
 * 숫자 타입이 아닌 타입에 연산자를 사용한 경우
 */
//특정 변수에 숫자 타입으로 변경할 수 있는 타입이 들어있는 경우 연산 작동
let sample = '99';
console.log(+sample);
console.log(typeof +sample);//일시적으로 숫자값으로 변경

console.log(sample);
console.log(typeof sample); //원래 값이 변경되지는 않음

//0과1로도 true false 표현 가능
sample = true;
console.log(+sample);
console.log(typeof +sample);

sample = false;
console.log(+sample);
console.log(typeof +sample);

sample = '안유진';
console.log(+sample); //NAN (Not a Number)

sample = '99';
console.log(-sample);
console.log(typeof -sample);


/**
 * 할당 연산자 (assignment operator)
 */
number = 100;
console.log(number);

number += 10;
console.log(number);

number -= 10;
console.log(number);

number *= 10;
console.log(number);

number /=10;
console.log(number);

number %=10;
console.log(number);


/**
 * 비교 연산자
 * 
 * 1) 값의 비교
 * 2) 값과 타입의 비교 (일반적으로 사용)
 */

console.log(5==5); //true
console.log(5=='5'); //true
console.log(0==''); //true
console.log(true==1); //true
console.log(false==0); //true
console.log(true=='1'); //true

console.log(5===5)//true
console.log(5==='5'); //false
console.log(0===''); //false
console.log(true===1); //false
console.log(false===0); //false
console.log(true==='1'); //false

console.log(5!=5); //false
console.log(5!='5'); //false
console.log(0!=''); //false
console.log(true!=1); //false
console.log(false!=0); //false
console.log(true!='1'); //false

console.log(5!==5); //false
console.log(5!=='5'); //true
console.log(0!==''); //true
console.log(true!==1); //true
console.log(false!==0); //true
console.log(true!=='1'); //true


/**
 * 대소 관계 비교 연산자
 */
console.log(100>1); //true
console.log(100<1); //false
console.log(100<=1); //false
console.log(100>=1); //true


/**
 * 삼항 조건 연산자 (ternary operator)
 * 
 * 물음표를 기준으로 왼쪽 true, 오른쪽 false
 */
console.log(10>0 ? '10이 0보다 크다' : '10이 0보다 작다');
// ?이후 조건, :기준 왼쪽 true, 오른쪽 false


/**
 * 논리 연산자
 * 
 * 1) &&
 * 2) ||
 */
//&& 조건은 모두 true여야 true 반환함
//|| 조건은 둘 중 하나만 true여도 true 반환함
console.log(true&&true); //true
console.log(true&&false); //false
console.log(true||true); //true
console.log(true||false); //true

//활용방법
console.log(10>1 && 20>2); //true
console.log(10<1 && 20>2); //false
console.log(10<1 && 20<2); //false

console.log(10>1 || 20>2); //true
console.log(10<1 || 20>2); //true
console.log(10<1 || 20<2); //false


/**
 * 단축 평가 (short circuit evaluation)
 * 
 * &&를 사용했을 때 좌측이 true면 우측 값 반환
 * &&를 사용했을 때 좌측이 false면 좌측 값 반환
 * ||를 사용했을 때 좌측이 true면 좌측 값 반환
 * ||를 사용했을 때 좌측이 false면 우측 값 반환
 * 
 * 장점: &&와 ||로 이어서 연산할 수 있음
 * 암기해야 함
 */
console.log( true || '아이브'); //true
console.log( false || '아이브'); //아이브
console.log( true && '아이브'); //아이브
console.log( false && '아이브'); //false
console.log(ture && true && '아이브'); //true


/**
 * 지수 연산자
 */
console.log(2**2); //4
console.log(10**3); //1000


/**
 * null 연산자
 */
let name;
console.log(name);
name = name ?? '코드팩토리'; //코드팩토리, ??의 의미는 좌측값이 non이거나 undefined일 때 우측 값을 반환해라
console.log(name);

name = name ?? '아이브'; //코드팩토리
console.log(name); //코드팩토리