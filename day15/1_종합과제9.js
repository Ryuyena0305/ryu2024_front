//[0] 주차정보목록 : 
let 주차정보목록 = [  "빈좌석","빈좌석","빈좌석","111어1111,10:14:30","빈좌석",
    "빈좌석","빈좌석","빈좌석","빈좌석","빈좌석",
    "빈좌석","빈좌석","222어2222,10:15:30","빈좌석","빈좌석",
    "빈좌석","빈좌석","빈좌석","빈좌석","빈좌석"  ]
console.log( 주차정보목록 );
    
//[1] 입차함수 만들기 // [입차] 버튼 클릭했을떄 , 차량번호/주차위치 
function 입차함수(){  console.log( '입차함수');
// 1. [입력] 차량번호 / 주차위치 를 HTML에서 입력받은 값을 JS로 가져온다.   document.querySelector( )
let 차량번호 = document.querySelector('.inCarNum').value ; // console.log( 차량번호 );
let 주차위치 = document.querySelector('.inCarLoc').value ; // console.log( 주차위치 );
// 2. [처리] 1.빈좌석인지 아닌지 확인 2.두 정보(차량번호/입차시간)를 하나의 문자열(CSV)로 구성해서 주차정보목록(배열) 저장한다. 1.if  2. .push
// (검사1) 빈좌석인지 체크 , if에 선택한 인덱스(주차위치)가 값이 '빈좌석' 문자열 아니면 , 주차된 자리  
if( 주차정보목록[주차위치-1] != "빈좌석" ){ // != 같지않다.
console.log('이미 주차된 차량이 존재합니다.');
return; // 리턴값 , 반환값 // 함수가 종료된다.  // retrun : 함수종료 vs break 반복문종료
// 리턴하는데 값이 없이 retrun 사용시 함수 종료 목적으로 사요할수 있다.
// 함수가종료 되므로 아래 코드(등록) 는 실행되지 않는다. 
} // if end 
// (검사2) 위치가 유효한지 , 1~20 사이만 가능   // (검사3) 차량번호 유효한지 , 이미 주차된 차량번호(중복)
// 현재 시간 만들기 / 입차시간란 : 차량이 입력된 현재 시간을 구하는것 
let 오늘 = new Date();  //console.log(오늘); // 현재시간/날짜 기능/함수 제공하는 객체 반환 
let 시 = 오늘.getHours(); //console.log(시);  // 시 반환 함수 
let 분 = 오늘.getMinutes(); //console.log(분);  // 분 반환 함수
let 초 = 오늘.getSeconds(); //console.log(초);  // 초 반환 함수  
let 입차시간 = `${시}:${분}:${초}`; //console.log(입차시간); 
// !!: 주차위치란 : 현재 설계상 주차위치는 주차정보목록의 배열의 인덱스로 대체 중.   주차위치 == 배열인덱스 
// 인덱스란 : 0부터 요소의 저장순서번호 , 주차위치번호는 1부터 시작한다면, 인덱스와 주차위치번호의 차이는 -1
주차정보목록[주차위치-1] = `${차량번호},${입차시간}`; //console.log( 주차정보목록 );
// 3. [출력] 처리 결과를 내용을 출력한다.  console.log()
console.log('입차 성공')
console.log('현재 주차 현황 ')
console.log( 주차정보목록 );
} // if end 

//[2] 출차함수 만들기 // [출차] 버튼 클릭했을때 , 차량번호 
function 출차함수(){

// 1. [입력] 차량번호 HTML에서 입력받은 값을 JS로 가져온다.    document.querySelector( )
let 출차차량번호 = document.querySelector('.outCarNum').value; //console.log(차량번호);
// 2. [처리] 입력받은 차량번호의 입차시간과 현재시간(출차시간)를 초(당) 로 환산하여 요금 계산하기. , 계산식
// -- 현재 차량번호가 존재하는지 검사. 1층부터 20층까지 하나씩 확인 , 배열 순회

// 증거/기록 , 상태 저장 용도 변수 활용
let searchOk = false;
for( let index = 0 ; index <= 주차정보목록.length-1 ; index++ ){
//index는 0부터 마지막인덱스까지 1씩증가 반복 
let 차량정보 = 주차정보목록[index]; // index번재의 차량정보를 꺼내기
if( 차량정보 == '빈좌석' ){  continue;    }
// continue; 란? 가장 가까운 반복문으로 이동 // 빈좌석이며 차량번호를 확인할 필요가 없으므로 패스
// 차량번호 검사 , 차량정보 = "111어1111,10:14:30" 또는 빈좌석
let 차량 = 차량정보.split(","); // 차량[0] = 차량번호 , 차량[1] = 입차시간 
let 입차차량번호 = 차량[0] // 차량[0] = 차량번호
let 입차시간 = 차량[1] // 차량[1] = 입차시간 
if( 입차차량번호 == 출차차량번호  ){ // 이미 입차된 차량번호 와 출차차량 번호와 같으면 
searchOk = true;
// + 요금 계산 , 초(당) 100원 , 출차시간 - 입차시간
// 1. 출차시간 : 현재 출차를 요구했을때 현재시간
let 출차시 = new Date().getHours();                     // 현재 시스템의 시 반환 함수
let 출차분 = new Date().getMinutes();                   // 현재 시스템의 분 반환 함수
let 출차초 = new Date().getSeconds();                    // 현재 시스템의 초 반환 함수
let 출차시간환산 = (출차시*360) + (출차분*60) + (출차초)    // 시분초를 '초' 환산 
let 입차시 = Number(입차시간.split(":")[0])                      // 입차시 정보에서 시 만 추출 
let 입차분 = Number(입차시간.split(":")[1])                     // 입차시 정보에서 분 만 추출
let 입차초 = Number(입차시간.split(":")[2])                     // 입차시 정보에서 초 만 추출
let 입차시간환산 = (입차시*360) + (입차분*60) + (입차초)   // 시분초를 '초' 환산 
let 사용시간 = 출차시간환산 - 입차시간환산                  // 출차시간 - 입차시간 : 빼기 - 차이
let 사용금액 = 사용시간 * 100                              // 초당 100원 
// + 차량 정보 빼주기  , '차량문자열' -> '빈좌석' 변경
주차정보목록[index] = "빈좌석"; 
console.log( `출차 완료 : 위치 : ${ index+1 } 사용금액 : ${ 사용금액 }`) // 안내 
// 내가 원하는 목표를 찾거나 이뤘으면 반복문 종료해도된다.// break;
break;
} // if end 
} // for end 
// for안에서 출차차량번호 을 못찾을때 실행되는 코드
if( searchOk == false ){ console.log('주차된 차량이 존재하지 않습니다. '); } 

// 3. [출력] 요금과 차량 위치를 출력한다. , console.log()
console.log( 주차정보목록 );

} //