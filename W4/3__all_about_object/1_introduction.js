/**
 * All about objects
 * 
 * 객체를 선언할때 사용 할 수 있는 방법들
 * 1) object를 생성해서 객체 생성 - 기본기 {}
 * 2) class를 인스턴스화해서 생성 - class와 OOP
 * 3) function을 사용해서 객체 생성
 */

//1) 객체 형성 방법 1
const yuJin = {
    name: '안유진',
    year: 2003,
};
console.log(yuJin);

//2) 객체 형성  2 
class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}
console.log(new IdolModel('안유진', 2003));

//3) 객체 형성 3
// 생성자 함수
function IdolFunction(name, year){ //함수 이름 첫글자는 대문자로
    this.name = name;
    this.year = year;
}

// this keyword로 함수 property를 입력해놓은 경우 new 명령어와 함께 객체 입력 가능능
const gaEul = new IdolFunction('가을', 2002);
console.log(gaEul);

//세가지 방법 모두 결과적으로 객체를 돌려줌