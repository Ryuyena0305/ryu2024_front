
// 1. 3개의 점수를 각 입력받아 총점 계산 하여 총점이 90 이상이면 '성공' 아니면 '실패' 출력하시오.
//입력 : prompt() , 출력 : console.log()
// let score1 = Number(prompt('점수1을 입력하세요'));
// let score2 = Number(prompt('점수1을 입력하세요'));
// let score3 = Number(prompt('점수1을 입력하세요'));
// let sum = score1 + score2 + score3;
// if (sum >= 90) { console.log('성공'); }

// else { console.log('실패'); }


// 2. 2개의 정수를 각 입력받아 더 큰수를 출력 하시오.
// let int1 =Number( prompt('정수1를 입력하세요.'));
// let int2 =Number( prompt('정수2를 입력하세요.'));
// if(int1>int2){
//     console.log(`결과: ${int1}`);
// }
// else{
//     console.log(`결과: ${int2}`);
// }


// 3. 3개의 정수를 각 입력받아 가장 큰수를 출력 하시오.
// let int1 =Number( prompt('정수1를 입력하세요.'));
// let int2 =Number( prompt('정수2를 입력하세요.'));
// let int3 =Number( prompt('정수3를 입력하세요.'));
// let max = int1;
// if(max <int2){
//     max = int2;
// }
// else if(max<int3){
//     max = int3;
// }
// else if(max<int1){
//     max=int1;
// }
// else max;
// console.log(max);



// 4. 3개의 정수를 각 입력받아 오름차순 또는 내림차순 하여 정렬해서 출력하시오.

/*
 A   B   C
        7   5   10 --> 오름차순 : 5 7 10  , 내림차순 : 10 7 5
        [ 1.정렬/비교 ]                                                    A      B       C
            ( 오름차순 )                                                   10     7       9
            1. A와 B 비교 해서 B가 더 작으면 B를 A와B 값 교체 A<--->B        7      10      9  교환O
                if( a < b ){ } 
            2. A와 C 비교 해서 C가 더 작으면 C를 A와C 값 교체 A<--->C        7      10      9  교환X
                if( a < c ){  }
            3. B와 C 비교 해서 C가 더 작으면 C를 B와C 값 교제 B<--->C        7      9       10 교환O
                if( b < c ) { }
            ( 내림차순 ) : 부등호 반대 , 더 크면 
        [ 2.변수 값 교환/swap ]
            - 한번에 2개 연산을 동시에 처리할수 없다. 무조건 연산은 1개씩 처리한다.
            - 변수는 *무조건* 데이터/자료 1개만 저장 ....
            - 주의할점  A = B ; A변수에 B 값 를 대입하면 기존의 A값은 사라진다.
                        A = B; B = A; // - 컴퓨터 순차처리 이므로 A값은 이미 사라졌다.  
            - swap 방법 
                임시변수 temp 활용
                let temp = A; A = B; B = temp;
*/
// let int1 =Number( prompt('정수1를 입력하세요.'));
// let int2 =Number( prompt('정수2를 입력하세요.'));
// let int3 =Number( prompt('정수3를 입력하세요.'));

// if(int1<int2){
//     let temp =int1;
//     int1 =int2;
//     int2 =temp;
// }
// if(int1<int3){
//     let temp =int1;
//     int1 =int3;
//     int3 =temp;
// }
// if(int2<int3){
//     let temp = int2;
//     int2=int3;
//     int3=temp;
// }
// console.log(`결과 : ${int1} ${int2} ${int3}`);




// 5. 1개의 점수를 입력받아 90점 이상이면 'A등급' 80점이상이면 'B등급' 70점이상 'C등급' 그외 '재시험' 출력하시오.
// let score =Number( prompt('점수를 입력하세요.'));
// if (score >=90){
//     console.log("A등급");
// }
// else if(score>=80){
//     console.log("B등급");
// }
// else if(score>=70){
//     console.log("C등급");
// }
// else{
//     console.log("재시험");
// }


// 6. 아이디와 비밀번호 입력받아 아이디가 'admin' 이고 비밀번호가 '1234' 이면 '로그인 성공' 아니면 '로그인실패' 출력하시오.
// let id = prompt('아이디를 입력하세요');
// let pw = prompt('비밀번호를 입력하세요');
// if(id=='admin'&& pw== '1234'){
//     console.log('로그인 성공');
// }
// else{
//     console.log('로그인 실패');
// }

// 7. 과일 배열 선언하고 let fruitList = [ '바나나' , '사과' ]
// 하나의 과일명을 입력받아 fruitList 에 존재하는 과일이면 '이미 존재하는 과일입니다' 출력
// 아니면 배열에 입력받은 과일명 저장 하고 현재 배열을 출력하시오.
let fruitList = [ '바나나' , '사과' ];
let 과일명 = prompt('과일을 입력하세요.');
let isfruit = fruitList.indexOf(과일명);
//.indexOf('찾을값') : 지정한 찾을값이 배열내 존재하면 찾은 인덱스 봔환 없으면 -1 반환 함수
//.push('새로운값') : 지정한 새로운값을 배열내 마지막 인덱스 요소의 추가 함수

if(isfruit==-1){
    fruitList.push(과일명);
    console.log(fruitList);
}
else {
    console.log('이미 존재하는 과일입니다.');
}

// 8. 주민등록번호를 입력받아서 성별이 남자이면 색상변수에 'blue' 을 여자이면 'red' 을 대입 하고 색상변수 출력하시오.


// 9. 가위바위보 게임
// 조건1 : 가위 0 , 바위 1 , 보 2 입니다.
// 조건2 : 플레이어 2 명 입니다.
// 실행조건 : 각 플레이어가 가위바위보 중에 한번씩 입력받기
// 출력조건 :
// 플레이어1 이겼을때 '플레이어1 승리' 출력 하시오.
// 플레이어2 이겼을때 '플레이어2 승리' 출력 하시오.
// 비겼을경우 '무승부' 출력 하시오.

// 10. 좌석 3개의 상태를 가지는 배열 선언하고 let sheetList = [ 'O' , 'X' , 'O' ]
//     하나의 좌석 순서번호를 입력받아 빈좌석 이면 '예약성공' 아니면 '예약불가' 출력하시오.
//     빈좌석 : 'X'  사용중인좌석 : 'O'

// 11 : 주차장 차량 검색대
//     조건1 : let carArray = [ '250어7142' , '142가7415' ]  : 차량번호
//     조건2 : let locationArray = [ 'A1' , 'B3' ]           : 주차위치
//     조건3 : carArray, locationArray 인덱스가 같은 정보의 차량
//     조건4 : 차량번호 입력받아 내 차량 위치 찾기 

