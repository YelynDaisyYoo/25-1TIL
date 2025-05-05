/**
 * Property Attribute
 * 
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고있는 프로퍼티
 * 2) 액세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나
 *                  설정할때 호출되는 함수로 구성된 프로퍼티
 *                  예를들면 getter와 setter
 */
const yuJin = {
    name: '안유진',
    year: 2003,
};

console.log(Object.getOwnPropertyDescriptor(yuJin, 'year'));

/**
 * 1) value - 실제 프로퍼티의 값
 * 2) writable - 값을 수정 할 수 있는지 여부. false로 설정하면 프로퍼티 값을
 *               수정 할 수 없다.
 * 3) enumerable - 열거가 가능한지 여부이다. for...in 룹 등을 사용 할 수 있으면
 *                 true를 반환한다.
 * 4) configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단한다.
 *                   false 일 경우 프로퍼티 삭제나 어트리뷰트
 *                   변경이 금지된다. 단, writable이 true인 경우
 *                   값 변경과 writable을 변경하는건 가능하다.
 */

//static 함수
console.log(Object.getOwnPropertyDescriptor(yuJin, 'name'));

//parameter에 객체만 넣을 있음
console.log(Object.getOwnPropertyDescriptors(yuJin));

const yuJin2 = {
    name: '안유진',
    year: 2003,

    get age(){
        //현재 년도를 아는 방법
        return new Date().getFullYear() - this.year;
    },

    //age를 통한 현재 년도 계산 방법
    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}

//출력 예제
console.log(yuJin2);
console.log(yuJin2.age);

yuJin2.age = 32;
console.log(yuJin2.age);
console.log(yuJin2.year);

//get과 set property attribute가 추가로 존재하는 것 확인 가능
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'age'));


//property attribute 추가 정의 방법
Object.defineProperty(yuJin2, 'height', {
    value: 172,
    writable: true, //false로 조건 변경 가능
    enumerable: true, //false로 조건 변경 가능
    configurable: true, //false로 조건 변경 가능
})
console.log(yuJin2);
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

yuJin2.height = 180;
console.log(yuJin2);

/**
 * Writable
 * 변경 가능 여부를 알려줌줌  
 * false로 변경하는 경우 값 변경이 불가능함
 */
Object.defineProperty(yuJin2, 'height', {
    writable:false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));
yuJin2.height = 172;
console.log(yuJin2);

/**
 * Enumerable
 * 열거 가능여부를 알려줌
 * property 열거 할 때 해당 값을 출력하지 않음(존재는 함)
 */
console.log(Object.keys(yuJin2));
for(let key in yuJin2){
    console.log(key);
}

Object.defineProperty(yuJin2, 'name', {
    enumerable:false,
});

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));

console.log(Object.keys(yuJin2));
for(let key in yuJin2){
    console.log(key);
}
console.log(yuJin2);
console.log(yuJin2.name);

/**
 * Configurable
 * 조건 변경 가능여부 알려줌
 * property attribute는 기본적으로 변경 불가능 함
 * 하지만, writable true > false는 가능함
 */
Object.defineProperty(yuJin2, 'height', {
    writable: true,
    configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

// Object.defineProperty(yuJin2, 'height', {
//     enumerable: false,
// });

Object.defineProperty(yuJin2, 'height', {
    value: 172,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

Object.defineProperty(yuJin2, 'height', {
    writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

Object.defineProperty(yuJin2, 'height', {
    writable: true,
});
