/**
 * if and switch
 */

let number = 5;

//홀짝을 구분하는 조건문
if (number%2 === 0) {
    console.log('number 변수는 짝수입니다.');
}else {
    console.log('number 변수는 홀수입니다.');
}

//중간 로직을 추가한 조건문 else if
if (number%2 === 0){
    console.log('2의 배수입니다.');
}else if(number%3 === 0){
    console.log('3의 배수입니다.');
}else if(number%4 === 0){
    console.log('4의 배수입니다.');
}
else if(number%5 === 0){
    console.log('5의 배수입니다.');
}
else{
    console.log('2, 3, 4, 5의 배수가 아닙니다.');
}

//switch문
const englishDay = 'monday'

let koreanDay;

switch(englishDay){
    case 'monday': //englishDay 가 monday인 경우
        koreanDay = '월요일';
        break;
    case 'tuesday':
        koreanDay = '화요일'        
        break;
    case 'wednesday':
        koreanDay = '수요일';
        break;
    case 'thursday':
        koreanDay = '목요일';
        break;
    case 'friday':
        koreanDay = '금요일';
        break;
    default: //case 조건에 해당사항이 없는 경우
        koreanDay = '주말'
        break;
}

console.log(koreanDay);