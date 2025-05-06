/**
 * Async theory
 * 
 * thread란?
 * 가장 작은 단위의 working unit
 * 8개의 Core가 각각 2개의 Thread 가짐
 * cpu가 동시의 몇개 연산을 할 수 있는지
 * JS는 single threaded > 동시에 단 하나의 작업만 실행할 수 있음
 * 
 * Sync Programming(동기 프로그래밍)
 * 
 */
// function longWork() {
//     const now = new Date(); //실행되는 날짜짜

//     /**
//      * milliseconds since epoch
//      * 1970년도 1월 1일부터 지금 코드가 실행되는 순간까지의 시간을
//      * 밀리초로 반환한다.
//      */
//     const milliseconds = now.getTime();
//     const afterTwoSeconds = milliseconds + 2 * 1000; //2초 뒤 계산 방법

//     while(new Date().getTime() < afterTwoSeconds){

//     }

//     console.log('완료');
// }

// console.log('Hello');
// longWork();
// console.log('World');

function longWork(){
    setTimeout(()=>{ //비동기로 실행되는 함수
        console.log('완료');
    }, 2000);
}

console.log('Hello');
longWork();
console.log('World');

/**
 * 동기
 * memory heap
 * call stack 에 쌓임
 * 
 * 비동기
 * memory heap
 * call stack 에 쌓인 후 Task Queue / Event Queue로 들어감
 * Event Loop: 실행이 종료된 함수, Call Stack과 Event Queue 사이의 이동
 */