// - new Date() 현재 시스템(pc)의 날짜/시간 반환 객체 또는 함수
// - new Date(연도, 월, 일) 지정한 연도월일에 해당하는 날짜 객체 

console.log(new Date())
console.log(new Date().getFullYear())
console.log(new Date().getMonth())
console.log(new Date().getDate())//날짜 일
console.log(new Date().getDay()) //요일 0일 ~ 6토
console.log(new Date(2023, 4, 20))

//전역 변수 : 특정한{ }안에서 선언되지 않은 변수, 선언이란? 만들기/정의 ,let, const, function
let today = new Date();
let year = today.getFullYear(); //오늘의 연도
let month = today.getMonth() + 1; //오늘의 월 +1 : 12월이 11로 반환되기 때문

//+달력의 일 일정/내용
let contentArray = [
    { cno : 1,content:'롤체',date : '2024-12-4',color:'pink'},
    { cno : 2,content:'협곡',date : '2024-12-10',color:'coral'},
    { cno : 3,content:'약속',date : '2024-12-21',color:'green'},
    { cno : 4,content:'상담',date : '2024-12-15',color:'lightblue'}
]

//[1] 달력출력함수  : 실행조건 -> JS가 실행될 때, 월변경될 때마다
calPrint();
function calPrint() { //함수의 매개변수x, 리턴값x

    //(1) 상당의 달력 연도/월 표시
    //1.어디에
    let h6 = document.querySelector('#calTop > h6')
    //2.무엇을
    let html = `${year}년${month}월`
    //3.출력
    h6.innerHTML = html;

    //(2) 하단의 현재 연도/월 표시

    //1.어디에
    let calBottom =document.querySelector('#calBottom');

    //2.무엇을
    let html2 = ''
    html2+=`<div class="week sunday">일</div>
            <div class="week ">월</div>
            <div class="week ">화</div>
            <div class="week ">수</div>
            <div class="week ">목</div>
            <div class="week ">금</div>
            <div class="week ">토</div>`

        // -1 ~ 마지막일까지 출력
        //(1) 현재날짜의 마지막일 구하기, 달력은 1부터 마지막일까지 출력하기 위해서
        let date = new Date(year,month,0); //지정한 연도와 월에 해당하는 전달의 말일 구할 수 있음
        console.log(date); // Tue Dec 31 2024
        let endDay = date.getDate(); //31
        //(2) 현재날짜의 1일의 요일, 1일의 시작 위치를 찾기 위해서 
        let date2 = new Date(year,month-1,1) //-1하는 이유 : 컴퓨터는 0 : 1월로 취급
        let startWeek = date2.getDay();//요일 0 : 일요일
        for(let blank = 1;blank<=startWeek;blank++){
            html2 += `<div></div>`
        }

        //+달력의 날짜 출력
        for(let day = 1;day<=endDay;day++){
            //day는 1부터 현재날짜의 마지막일까지 1씩 증가 반복
            html2 +=`<div>${day}</div>`
        }
    //3.출력
    calBottom.innerHTML =html2
    return; // 함수가 종료되면서 반한되는 값, 값이 없을 경우 return 생략가능

}

//[2] 월 변경 함수 (이전달,다음달) : 실행조건 -> 버튼 클릭시
function monthChange( changeMonth ){  // 함수의 매개변수 : 이전달/다음달 식별데이터 , 리턴값 
    console.log( changeMonth );
    // 1. 매개변수에 따른 월 수정 
    month += changeMonth;
    // 2. 월은 최소 1월 부터 12월 까지 , 
    if( month < 1 ) { // 만약에 월이 1보다 미만이면 연도를 -1차감 , 월 12 
        year--; month = 12;
    }
    // 만약에 월이 12보다 초과이면 연도를 +1증가 , 월 1
    if( month > 12 ){
        year++; month = 1 
    }
    // - 날짜 변화에 따른 새로고침(출력함수 재실행 )
    calPrint();  
    return; // [함수 종료] 
}