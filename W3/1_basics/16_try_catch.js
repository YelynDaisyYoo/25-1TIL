/**
 * try...catch
 * 
 * 1) 에러를 발생시킨다 -> 에러를 던진다. (throw)
 * 2) 명시적으로 에러를 인지한다 -> 에러를 잡는다. (catch)
 */
//Error 메세지 안에 답이 있기 때문에, 겁내지 말 것것
function runner() {
    try {
        console.log('Hello');

        // throw new Error('큰 문제가 생겼습니다!');

        console.log('Code Factory');
    } catch (e) { //에러가 났을 때 실행
        console.log('---catch---');
        console.log(e);
    } finally { //에러와 상관없이 실행
        console.log('---finally---');
    }
}
runner();