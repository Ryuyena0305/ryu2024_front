/*
    문자열 처리 (기능이 없는 문자 그자체)방법
        1. ' '
        2. " "
        3. ` `
    키워드(문자인데 기능이 있는 문자들)
        let, const , console.log

*/
//console.log('유재석')
//console.log() --> 문자 (미리 정의된 의미/기능이 포함된 문자)
//유재석-->문자 (자바스크립트 회사에서 유재석 미리 정의x)

//[1] 문자열 처리
console.log('유재석1')
console.log("유재석2")
console.log(`유재석3`)

//[2] '작은따옴표 , "큰따옴표 출력
console.log("유재석 '반장'")
console.log('유재석 "반장"')
console.log(`"유재석 '반장'"`)

//[3] 이스케이프/제어문자
console.log('유재석\'반장\'')
// 1. \n : console의 한줄 내림(줄바꿈)
// 2. \" : "한개 출력, \"\"
// 3. \' : '한개 출력, \'\'
// 4. \\ : \한개 출력, \\\\
// 5. \t : 탭(들여쓰기) 

console.log('유재석 \n \'반장\'')
console.log('유재석 \n강호동')
console.log('유재석 \"강호동')
console.log('유재석 \'강호동')
console.log('유재석 \\강호동')
console.log('유재석 \t강호동')

//[4] 문자열 연결, 문자열(`백틱)템플릿
console.log('유재석' + '강호동')
//'문자A' + '문자B' => '문자A문자B'
console.log('유재석' + 40)//'문자A' + 40 -> '문자A40'
console.log('40' + '100') //'숫자1'+'숫자2' -> '숫자1숫자2' 40100
let age = 40;
console.log('유재석' + age)//'문자A' + 변수명 -> 유재석40
//console.log('유재석' + 40)
console.log(`유재석${age}강호동`) //`문자A${js코드=선언부}문자B` ->유재석40강호동
console.log(`평균 : ${100 + 50}`) //평균  :150
//방법1: `문자그자체 문자그자체 문자그자체 ${ JS코드 } 문자그자체`
//방법2: `문자그자체 문자그자체 문자그자체 + JS코드 + 문자그자체`
//JS학습 목적 : HTML를 조작/제어/이벤트 하기 위해서
//HTML는 변수x,  연산x , 배열x, 타입x -> JS에서 HTML작성시 JS코드와 합쳐서 작성할 수 있다.
//HTML에서 마크업을 작성할 필요가 없겠네.. JS에서 마크업을 입력하고 HTML 출력하면 되니까 ->리액트.js
let 직원명1 = '유재석'
let 직원명2 = '강호동'
let nameHTML = `<ol><li>${직원명1}</li><li>${직원명2}</li></ol>`
document.write(nameHTML) //document.write() : 현재 HTML에 출력하는 함수

//예1 : 입력받은 데이터를 HTML 출력하시오.
//prompt('알림메시지'),반환값 : 입력받은 값
let 결과2 = prompt('[안내할 내용] 데이터 입력해주세요')
//prompt 함수로부터 입력받은 ㄴ값을 아래 코드에서 재사용 하고 싶다.
let inputHTML = `<h3>입력받은 데이터:${결과2}</h3>`;
document.write(inputHTML);


let 결과1 = 10 + 5;// 반환값 : 두 값을 더한 값 1개
//10 + 5 한 결과의 15를 아래코드에서 재사용(연산 결과 저장하는 변수)하고싶다.
console.log(결과1);

//예2 : 2명의 사원이름을 입력받아서 HTML table형식으로 출력하시오.
/*


*/
let 사원1 = prompt(`사원1이름을 작성하세요.`)
let 사원2 = prompt(`사원2이름을 작성하세요.`)
let inputHTML2 = `<table>
        <th>
            <tr>
                <td>번호</td>
                <td>이름</td>
            </tr>
            <tr>
                <td>1</td>
                <td>${사원1}</td>

            </tr>
            <tr>
                <td>2</td>
                <td>${사원2}</td>

            </tr>
        </th>
      
    </table>
    `;
document.write(inputHTML2)
