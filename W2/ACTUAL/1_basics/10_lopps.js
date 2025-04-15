/**
 * Loops
 * 
 * 1) for loops
 * 2) while loops
 */

//for loops
//for(기준을 잡을 변수;for loops 실행 조건; 실행) {출력}
for(let i = 0; i<10 ; i++) {
    console.log(i);
}

for(let i = 10; i>0 ; i--) {
    console.log(i);
}

//for loops 중첩
for(let i = 0; i<3; i++) {
    for(let j = 3; i>0 ; i--) {
        console.log(i,j);
    }
}

//for loops 연습문제
let square = '';
let side = 6;
for(let i = 0 ; i <6 ; i++){
    for(let j = 0 ; j < side ; j++){
        square += '*';
    }
    square += '\n';
}
console.log(square);

/**
 * for in loops
 * 입력때마다 key값을 받을 수 있는 loop
 */
//for in loop object
const yuJin = {
    name: '안유진',
    year: 2003,
    group: '아이브'
}
for(let key in yuJin){
    console.log(key); //key값이 출력됨
}

//for in loop list array
const iveMembersArrary = ['안유진', '가을', '레이', '장원영'];
for(let key in iveMembersArray){
    console.log(key); //index 값이 출력됨
    console.log('${key}:${iveMembersArray[key]}');
}

/**
 * for of loops
 * list array에서 사용 가능함
 */
for (let value of iveMembersArray){
    console.log(value);
}

//while loops
//while(while loop이 진행되는 조건){while loop 통과시 실행}
//조건 판단 후 코드 실행 
number = 0;
while(number < 10){
    number ++;
}
console.log(number);//while loop 이후 number값 확인

/**
 * do while loops
 * 코드 실행 후 조건 판단 
 */
number = 0;
do{
    number++;
} while (number < 10);
console.log(number); //do while loop 이후 number값 확인

/**
 * break
 */
for (let i = 0 ; i <10 ; i++) {
    if (i===5) {
        break;
    }
    console.log(i);
}

number = 0;
while (number < 10){
    if(number===5){
        break;
    }
    number ++;
    console.log(number);
}

/**
 * continue
 * 현재 진행하고 있는 loop skip함 다음 조건 실행 X
 */
for (let i = 0 ; i <10 ; i++) {
    if (i===5) {
        continue;
    }
    console.log(i);
}

number = 0;
while (number < 10){
    number ++;
    if(number===5){
        continue;
    }
    console.log(number);
}