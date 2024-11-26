// [1] for 중첩
//i는 3번 반복, j는 5번 반복 -> 총 i의 출력횟수 : 3번 , 총 j의 출력횟수 : 15번
//즉 상위 for문이 1회전마다 하위 for문 전체 회전 한다.
for (let i = 1; i <= 3; i++) {
    // i는 1부터 3이하까지 1씩 증가한다.
    console.log(i);

    for (let j = 1; j <= 5; j++) {
        //j는 1부터 5이하까지 1씩 증가한다.
        console.log(`-->${j}`);
    }

}

//[2] 구구단 2~9단 만들기
//단 1번마다 j는 전체 실행
// -단 1회전마다 j는 9번 실행된다.
for (let i = 2; i <= 9; i++) {
    console.log(`${i}단`)
    for (let j = 1; j <= 9; j++) {
        console.log(`${i}*${j}=${i * j}`)

    }
}

//[3] 별 모양 출력하기, 입력받은 줄 수 만큼
// 예) 5개 입력 했을 경우 아래와 같이 5줄의 직각삼각형 출력
let inputline = Number(prompt(`줄개수 : `))
let out =''; // 출력할 데이터르르 갖는 변수

for (let line = 1; line <= inputline; line++) {
    for (let star = 1; star <= line; star++) {
        out += '*';
    }
   out+='\n';
}
console.log(out);
