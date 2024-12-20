/*
    선언
        변수let, 상수 const,함수 function
 
    변수 유효범위
        1. 전역 변수 : 특정한 { }안에서 선언 하지 않은 변수
        2. 지역 변수 : 특정한 { }안에서 선언 한 변수
            { } : if(){}, for(){}, function(){}
              - 특징 : { }사용중일때만 메모리 할당. 사용이 끝나면 메모리 자동 초기화
        3. 매개 변수 : 함수호출시 인자값을 저장하는 변수
*/
// =========================전역 / JS전체/ 대한민국============================
let 전역변수 = '대한민국';

// =========================지역 / JS전체/ 인천광역시============================
if(true){
    let 지역변수1 = '인천광역시'
    console.log(전역변수); 
    console.log(지역변수1);
    for(let i =0;i<1;i++){
        let 지역변수2 ='부평구';
        console.log(전역변수);//대한민국
        console.log(지역변수1);//인천광역시
        console.log(지역변수2);//부평구
    }
    console.log(전역변수);//대한민국
    console.log(지역변수1);//인천광역시
    //console.log(지역변수2);//부평구
}
// =========================지역 / 함수구역/ 수원시============================
function 수원(){
    let 지역변수3 = '수원'
    console.log(전역변수)
    //console.log(지역변수1)
    //console.log(지역변수2)
}

//[1] 활용1
let star='';
for( let i =1;i<=10;i++){
    //i는 1부터 10이하까지 1씩 증가 반복
   
    star+='*';
}
console.log(star);
//for에서 선언된 변수는 for안에서만 사용한다.

//[2] 활용2 , 사람의 이름을 입력받아 배열에 모두 저장하시오.
let 이름배열 =[]
function 등록함수(){
    let 이름 = prompt('이름:') //지역변수 , 이름을 입력받아 배열에 저장
    이름배열.push(이름);

}
// - 입력 1번의 함수 종료되었을 때 변수 몇개 ?? 데이터 ??
// - 이름(지역변수)x, 이름배열(전역변수)o , '유재석'(데이터)o
// - 이름배열 = ['유재석']

//JS 파일 사용 범위
//1. <head><script src='함수.js></script></head>
// -> body 내 마크업들이 모두 구성되기 전에 js 실행
//  body 내 마크어들이 구성되기 전에 스크립트를 읽어드린다.

//2. <bodd></body>내에 <script src='함수.js></script>
// -> body 내 마크업들이 모두 구성되고 js 실행
// body내 마크업들을 구성하고 스크립트 읽어드린다.

//3. 여러 js 파일 하나의 html에서 호출할 때 변수/함수 공유