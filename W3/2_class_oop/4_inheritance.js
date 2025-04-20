/**
 * Inheritance
 * 
 * 클래스 정의
 * 클래스는 객체지향 프로그래밍에서 특정 객체(인스턴스)를 생성하기 위한 
 * 변수와 메소드(함수)를 정의하는 일종의 틀이다
 * 
 * 상속의 정의
 * 상속은 객체들 간의 관계를 구축하는 방법이다.
 * 상속은 부모 클래스 등의 기존의 클래스로부터 속성과 동작을 상속받을 수 있다.
 */
class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }
} //부모 클래스 (슈퍼 클래스)

class FemaleIdolModel extends IdolModel {
    dance(){
        return '여자 아이돌이 춤을 춥니다.';
    }
} // 자식 클래스

class MaleIdolModel extends IdolModel{
    sing(){
        return '남자 아이돌이 노래를 부릅니다.';
    }
} // 자식 클래스

const yuJin = new FemaleIdolModel('안유진', 2003);
console.log(yuJin);

const jiMin = new MaleIdolModel('지민', 1995);
console.log(jiMin);

console.log(yuJin.dance());
console.log(yuJin.name); //sing 함수는 사용 불가능

console.log(jiMin.sing());
console.log(jiMin.year); //dance 함수는 사용 불가능능

const cf = new IdolModel('코드팩토리', 1992);
console.log(cf);

console.log(cf.name);

//클래스의 instance인지 확인 (상속 여부)
console.log(yuJin instanceof IdolModel);
console.log(yuJin instanceof FemaleIdolModel);
console.log(yuJin instanceof MaleIdolModel);

console.log(jiMin instanceof IdolModel);
console.log(jiMin instanceof FemaleIdolModel);
console.log(jiMin instanceof MaleIdolModel);

console.log(cf instanceof IdolModel);
console.log(cf instanceof FemaleIdolModel);
console.log(cf instanceof MaleIdolModel);