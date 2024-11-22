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
            > 초과/크다
            >= 이상/크거나같다
            < 미만/작다
            <= 이하/작거나같다
            == 같다 (값)같다 ===(값과 타입)같다 10 =="10" true , 10==="10" false
            != 같지않다
        4. 관계연산자 : 결과 -> 하나의 연산결과를 (논리-참true/거짓false) 값으로 반환,
             &&이면서 면서 이고 그리고 모두 and조건, 초등학생이 사탕이면서 초콜릿 먹겠다.
             ||이거나 거나 하나라도 또는 or조건, 초등학생이 사탕 또는 초콜릿 먹겠다 * | : 엔터 위에 원화 기호
             ! 부정 반대 not조건, !true -> false , !false -> true
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
// console.log(10 + 3); //13
// console.log(10 - 3); //7
// console.log(10 * 3);//30
// console.log(10 / 3);//3.333333
// console.log(10 % 3);//1
// console.log(parseInt(10 / 3));//소수점 버리고 정수부분만 반환, 3
// console.log(`점수 : ` + 10); // 연결 -> '점수 : '문자와 10숫자가 연결되면 문자가 된다.

//[ 지문1 ] pormpt함수로 국어,영어,수학 점수를 각 입력받아서 
//각 변수에 저장하고 총점과 평균을 계산하여 console 탭에 출력하시오.

//  let kor = parseInt(prompt('국어점수를 입력하세요.'));
// let eng = parseInt(prompt('영어점수를 입력하세요.'));
// let math = parseInt(prompt('수학점수를 입력하세요.'));
// let total = kor+eng+math;
// let avg = total/3;
// console.log(`총점 : ${total}, 평균 : ${avg} `);

//[ 지문2 ] pormpt함수로 반지름을 입력받아서 원넓이[반지름*반지름*3.14] 
//계산하여 console탭에 출력하시오.
// let rad = parseInt(prompt('반지름 길이를 입력하세요.'));
// let rad_nul = rad * rad * 3.14;
// console.log(`원의 넓이 : ${rad_nul}`);


//[ 지문3 ] pormpt함수로 두 실수를 입력받아서 
//앞 실수의 값이 뒤실수의 값의 비율% 계산하여 console탭에 출력하시오.

// let float1 = parseFloat(prompt('실수1를 입력하세요.'));
// let float2 = parseFloat(prompt('실수2를 입력하세요.'));
// let flt_rad = (float1 / float2) * Number(100);
// console.log(`값의 비율 : ${flt_rad} %`);



//[2] 비교연산자

// console.log(10 > 3);    //10이 3초과, true
// console.log(10 >= 3);   //10이 3이상, true
// console.log(10 < 3);    //10이 3 미만, false
// console.log(10 <= 3);   //10이 3 이하, false
// console.log(10 == 3);   //10이 3과 같다,false
// console.log(10 != 3);   //10이 3과 같지 않다,true
// console.log(10 === "10");   //10과 '10'이 값과 타입까지 같다.false
// console.log(10 !== "10");   //10과 '10'이 값과 타입까지 같다.true


//[3] 관계연산자

// console.log(10 > 3 && 20 > 10);//10이 3보다 크다 이면서 20이 10보다 크다,true
// console.log(10 > 3 && 20 > 30);//10이 3보다 크다 이면서 20이 30보다 크다,true and false -> false
// console.log(10 > 3 || 20 > 10);//10이 3보다 크다 이거나 20이 10보다 크다,true or true -> true
// console.log(10 > 3 || 20 > 30);//10이 3보다 크다 이거나 20이 30보다 크다,true or false -> true
// console.log(!(10>3)) //10이 3보다 크다가 아니면, !true->false


//[ 지문4 ] prompt 함수로 정수를 입력받아 값이 홀수이면 true / 짝수이면 false로 console 탭에 출력하시오.

// let num1 =Number(prompt('정수를 입력하세요'));
// num1_result= (num1%2==1) //연산처리, 입력받은 값이 나누기 2 했을 때 나머지 1과 같다.
// console.log(num1_result) //

// [지문5] prompt 함수로 정수를 입력받아 입력받은 값이 7의 배수이면 true / 아니면 false 로 console탭에 출력하시오.
// let num2 =Number(prompt('정수를 입력하세요'));
// num2_result = (num2%7==0)
// console.log(num2_result)


// [지문6] prompt 함수로 아이디 와 비밀번호를 입력받아서 아이디가 'admin' 이고 비밀번호가 1234 와 일치하면 true / 아니면 false 출력하시오.
// let ID =String(prompt('아이디를 입력하세요'));
// let PW =String(prompt('비밀번호를 입력하세요'));
// console.log(ID=='admin'&&PW=='1234');

// [지문7] prompt 함수로 정수를 입력받아 입력받은 값이 홀수 이면서 7배수 이면 true / 아니면 false 로 console탭에 출력하시오.
// let num3 =Number(prompt('정수3를 입력하세요'));
// console.log(num3%2==1&&num3%7==0);

// [지문8] prompt 함수로 십만원 단위의 금액을 입력받아 입력받은 금액의 지폐수를 console탭에 출력하시오.
    // -> 입력 예] 356789 입력시 , 출력 예] 십만원:3장 만원:5장 천원6장 
// let num4 =Number(prompt('삽만원 단위의 금액을  입력하세요'));
// console.log(`십만원:${parseInt(num4/100000)}장 만원:${parseInt((num4%100000)/10000)}장 천원${parseInt((num4%10000)/1000)}장` )

