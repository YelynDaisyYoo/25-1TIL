/**
 * Immutable Object
 */
const yuJin = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}

console.log(yuJin);

/**
 * 1. Extensible
 * 확장이 가능한지의 여부를 설정
 */
console.log(Object.isExtensible(yuJin));

yuJin['position'] = 'vocal';

console.log(yuJin);

Object.preventExtensions(yuJin);

console.log(Object.isExtensible(yuJin)); //false

yuJin['groupName'] = '아이브';
console.log(yuJin); 
//group name이라는 property 생성 X error message는 보여주지 않지만, 값 추가 불가능

delete yuJin['position'];
console.log(yuJin);
//삭제는 가능, 추가는 불가능

/**
 * 2. Seal
 * configurable = false와 같은 효과
 * + 값 추가 삭제 모두 불가능
 */
const yuJin2 = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}
console.log(yuJin2); // property attribute 확인

console.log(Object.isSealed(yuJin2)); //seal 여부 확인인


//seal 방법 == confiigurable: false 
Object.seal(yuJin2);

console.log(Object.isSealed(yuJin2));

yuJin2['groupName'] = '아이브';
console.log(yuJin2);

delete yuJin2['name']; //삭제 되지 않음
console.log(yuJin2);

Object.defineProperty(yuJin2, 'name', {
    value: '코드팩토리',
}); //property 바뀌지 않음
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));

/**
 * 3. Freezed
 * 읽기 외에 모든 기능을 불가능하게 만든다.
 */
const yuJin3 = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}
console.log(Object.isFrozen(yuJin3));

//freeze 방법
Object.freeze(yuJin3);
console.log(Object.isFrozen(yuJin3));

yuJin3['groupName'] = '아이브';
console.log(yuJin3); //추가 불가능

delete yuJin3['name'];
console.log(yuJin3); //삭제 불가능

// Object.defineProperty(yuJin3, 'name', {
//     value: '코드팩토리',
// }) //cannot redefine value 오류 뜸

console.log(Object.getOwnPropertyDescriptor(yuJin3, 'name'));
//enumerable을 제외한 모든 값이 false가 됨

const yuJin4 = {
    name: '안유진',
    year: 2003,
    wonYoung: {
        name: '장원영',
        year: 2002,
    },
};

//상위 object를 freeze 했다고, 하위 object까지 freeze 되지 않음
//재귀함수 등을 활용한 개별 정의 필요요
Object.freeze(yuJin4);

console.log(Object.isFrozen(yuJin4));
console.log(Object.isFrozen(yuJin4['wonYoung']));