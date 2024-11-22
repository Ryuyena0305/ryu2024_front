/*
    조건문  : 조건 문법
        - 조건의 결과값 : true=1 / false=0
        - 삼항연산자 : 간단한 조건문
        1. if 조건문 : 조건문을 표현 가능한 문법
            - 조건에 TRUE/FALSE, 비교연산 또는 관계연산
        2. if형태
            1. if( 조건 ) 참일 경우 코드;
            2. if( 조건 ) { 참일경우코드; 참일경우코드; }
            3. if( 조건 ) { 참일경우코드; }
                else{ 거짓일경우 코드; }
            4. if( 조건1 ){참1일경우코드;}
                else if( 조건2 ){참2일경우코드;}
                else if( 조건3 ){참3일경우코드;}
                else if( 조건4 ){참4일경우코드;}
                else{거짓일경우코드;}
            5. if(조건){
                    if(조건){}
                    else{}
                
                }else{}
        - 주의할점 : 1. )와 {사이에 ;(세미콜론)는 없이 작성 2.{시작중괄호} 끝중괄호 매칭}
*/

//[1] if
if (10 > 3) console.log('1. T 10>3'); //T->출력ㅇ
if (10 > 20) console.log('2. T 10>20');//F->출력x
if (10 > 20); console.log('2. T 10>20');//F->출력ㅇ

//[2]  참일경우 코드의 명령어 2개 이상이면{ } 묶어주자.
if (10 > 20)
    console.log('4-1 10>20');
console.log('4-2 10>20');

if (10 > 20) {//if start
    console.log('5-1 10>20');
    console.log('5-2 10>20');
}//if end

if (10 > 3) {//if start
    console.log('6-1 10>3');
    console.log('6-2 10>3');
}//if end

//[3] if ~ else
if (10 > 3) {
    console.log('7. T 10 > 3');
} //출력O
else {
    console.log('7. F 10 > 3');
}//출력X
//[4] if~ else if ~ else if~  else , 조건이 다수일때
if (10 >= 20) { //출력x
    console.log('8. T1 10>=20');
}
else if (10 >= 15) {//출력x
    console.log('8. T2 10>=15');
}
else if (10 >= 10) {//출력ㅇ
    console.log('8. T2 10>=10');
}