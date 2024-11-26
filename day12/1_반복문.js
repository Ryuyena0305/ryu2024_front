/*
    반복문
        - 조건 충족할 때 특정 범위 내 코드를 반복 실행
        - 형태
            for(초기값 ; 조건문;  증감식){
                실행문;
            }
            1. 초기값 : 반복을 할 때 카운터/횟수 체크하는 변수의 처음값
            2. 조건문 : 반복실행문이 실행되는 조건으로 true이면  { }실행 아니면 for 종료
            3. 증감식 : 반복변수의 증가 혹은 감소 변화 연산식
            4. 실행문 : 조건문이 true일때 실행할 코드
        - 컴퓨터가 읽어드리는 흐름 순서
            1. 초기값 -> 2. 조건문(true) -> 3. 실행문 -> 4. 증감식 -> 5.조건문(true)->6. 실행문

        -어디서부터 어디까지 증감하면서 반복하는지
        -예) 유재석이 계단 1칸 부터 10칸까지 1칸씩 오른다 반복
        for(let 유재석위치 =1;유재석위치<=10;유재석위치++){
        오른다.}
*/ 
// [1] '안녕하세요.' 5번 출력하세요. ->1번 작성후 복사 붙여넣기
console.log('안녕하세요.')
console.log('안녕하세요.')
console.log('안녕하세요.')
console.log('안녕하세요.')
console.log('안녕하세요.')
//[2] '안녕하세요.' 1000번 출력하세요 -> 1000번 복사
//[3] 1부터 5까지 출력하세요.
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
//[4] 반복(중복)되는 코드와 반복되지 않는 코드
//중복되느느 코드 : console.log();
//중복되는 코드 : 1 2 3 4 5 //중복되지 않는 코드 패턴 :1부터 5까지 증가
//1. 초기값 : 1
//2. 조건문  <=5
//3. 증감식 1+ 또는 ++
//4.실행문(반복코드) : console.log()
// for(let 반복변수 = 1;반복변수 <=5 ;반복변수++){
//     console.log(반복변수);
// }
//[5] 1부터 10까지 누적합계를 계산하시오[반복문 없이]
// let sum =0;
// sum=sum+1;
// sum=sum+2;
// sum=sum+3;
// sum=sum+4;
// sum=sum+5;
// sum=sum+6;
// sum=sum+7;
// sum=sum+8;
// sum=sum+9;
// sum=sum+10;
// console.log(sum)

//반복되는 코드 : 총합계 = 총합계 +
//반복되지 않는 코드 : let 총합계 = 0; 1 2 3 4 5 6 7 8 9 10
//반복되지 않는 코드 순서.패턴 : 1부터 10까지 1씩 증가
//[반복문 코드]
// let sum1=0;
// for(let num=1;num1<=10;num++){
//     console.log(sum1);
// }

//[6] 2단의 구구단 출력
let gop2 =1;
let num =2;
for(gop2=1;gop2<=9;gop2++){
    console.log(`${num}*${gop2}=${num*gop2}`)
}

