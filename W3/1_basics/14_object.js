/**
 * Object / 객체
 * 
 * js에서 중요도가 높은 data type
 * js에서 가장 많이 사용되는 data type
 */

//key : value pair
//object 안에 함수도 정의할 수 있음
let yuJin = {
    name: '안유진',
    group: '아이브',
    dance: function () {
        return `${this.name}이 춤을 춥니다.`;
    } //this에 대한 추가 학습 필요요
};

console.log(yuJin);
console.log(yuJin.name);
console.log(yuJin['name']); //위의 3개 코드 출력 모두 동일함

const key = 'name';

console.log(yuJin[key]);

console.log(yuJin.dance());

const nameKey = 'name';
const nameValue = '안유진';

const groupKey = 'group';
const groupValue = '아이브';

const yuJin2 = {
    [nameKey]: nameValue,
    [groupKey]: groupValue,
    dance: function(){
        return `${this.name}이 춤을 춥니다.`;
    }
}
console.log(yuJin2);
console.log(yuJin2.dance());

yuJin2['group'] = '코드팩토리';
console.log(yuJin2); //group value 값이 변경됨

yuJin2['englishName'] = 'An Yu Jin';
console.log(yuJin2); //새로운 key와 value가 생성됨

delete yuJin2['englishName'];
console.log(yuJin2); //삭제 방법

/**
 * const로 선언한 객체(object)의 특징
 * 
 * 1) const로 선언할경우 객체 자체를 변경 할 수는 없다.
 * 2) 객체 안의 프로퍼티나 메서드는 변경 할 수 있다.
 */
const wonYoung = {
    name: '장원영',
    group: '아이브',
}
console.log(wonYoung);

// wonYoung = {}; Error 발생함 객체 자체를 변경할 수는 없음

wonYoung['group'] = '코드팩토리'; //프로퍼티, 메서드는 변경 가능함
console.log(wonYoung);

/**
 * 모든 키값 다 가져오기
 */
console.log(Object.keys(wonYoung));

/**
 * 모든 벨류값 다 가져오기
 */
console.log(Object.values(wonYoung));

const name = '안유진';

const yuJin3 = {
    name: name,
    name,
};
console.log(yuJin3);