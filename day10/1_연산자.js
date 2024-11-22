//  -개발자도구(F12) [console] 탭 출력 함수 , console.log()
//  -HTML에서 알림창으로 input[입력] 함수, prompt(), 
//      -HTML 알림창에서 입력받은 (문자-String)값 반환 함수
//      -숫자 입력받기 : Number(prompt())
/*
    연산자 : 연산할 때 사용되는 기호
        1. 산술연산자   -> 하나의 연산결과를 값으로 반환
            + 더하기, -빼기, * 곱하기, / 나누기, % 나머지 , parseInt() 소수점 버리고 정수반환
        2. 연결연산자
            + 연결
        3. 비교연산자
        4. 관계연산자
        5. 대입연산자
        6. 증감연산자
        7. 삼항연산자

    문자열타입 -> 숫자타입 변환하는 방법
        1. 문자"10" -> 숫자 10으로 변환
            "10"*1 -> 10
        2. 숫자로변환 함수 Number( )
            Number("10");
    숫자타입 -> 문자열 변환 방법
        1. 연결연산 이용한 방법 숫자 10 -> 문자"10"으로 변환
            10+'';
        2. 문자로 변환 함수 String( )
            String(10)->"10"

    *타입 변환이 필요한 이유?? 프론트(HTML-CSS-JS)<--통신(HTTP)-->백엔드(JAVA/DB)
    *다형성 : 다양한 형태를 가지는 성질, 데이터가 타입이 변환이 된다.

    */
   //[1] 산술연산자
   console.log(10+3); //13
   console.log(10-3); //7
   console.log(10*3);//30
   console.log(10/3);//3.333333
   console.log(10%3);//1
   console.log(parseInt(10/3));//소수점 버리고 정수부분만 반환, 3
   console.log(`점수 : `+10); // 연결 -> '점수 : '문자와 10숫자가 연결되면 문자가 된다.

   //[ 지문1 ] pormpt함수로 국어,영어,수학 점수를 각 입력받아서 
   //각 변수에 저장하고 총점과 평균을 계산하여 console 탭에 출력하시오.
   /*
    let kor = parseInt(prompt('국어점수를 입력하세요.'));
   let eng = parseInt(prompt('영어점수를 입력하세요.'));
   let math = parseInt(prompt('수학점수를 입력하세요.'));
   let total = kor+eng+math;
   let avg = total/3;
   console.log(`총점 : ${total}, 평균 : ${avg} `);

   */
  
 

    //[ 지문2 ] pormpt함수로 반지름을 입력받아서 원넓이[반지름*반지름*3.14] 
   //계산하여 console탭에 출력하시오.
   let rad = parseInt(prompt('반지름 길이를 입력하세요.'));
   let rad_nul = rad*rad*3.14;
   console.log(`원의 넓이 : ${rad_nul}`);


    //[ 지문3 ] pormpt함수로 두 실수를 입력받아서 
    //앞 실수의 값이 뒤실수의 값의 비율% 계산하여 console탭에 출력하시오.
    let float1 = parseFloat(prompt('실수1를 입력하세요.'));
    let float2 = parseFloat(prompt('실수2를 입력하세요.'));
    let flt_rad = (float1 /float2)*Number(100);
    console.log(`값의 비율 : ${flt_rad} %`);


