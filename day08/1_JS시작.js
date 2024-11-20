console.log('[2]안녕 JS')

//1. JS 출력 관련 기능/이벤트/함수
//[1] console.log(), 개발자가 데이터 확인/유지보수/테스트 , 중요(!!!)
console.log('[3] console함수 출력') // 개발자 도구의 [console] 탭에 내용 출력하는 함수

//[2] alret , 브라우저 상단에 알림창에 메시지 출력하는 함수
alert('[4]alert함수 출력')//브라우저의 알림창에 내용 출력하는 함수

//[3] document.write() , 현재 HTML의 메시지를 출력하는 함수
document.write('[5]document.write 함수 출력')//현재 html에 내용 출력하는 함수

//[4] 
document.body.innerHTML = '[6] document.body.innerHTML 속성/필드/멤버변수 출력'

//2. JS 입력 관련 기능/이벤트/함수
//[1]confirm()
confirm('[7]확인 메시지 창')//브라우저에 알림 메시지 창 (확인=true / 취소= false)

//[2]prompt()
prompt('[8] 내용입력 메시지 창') //브라우저 (메시지 입력) 알림 메시지 창

//[3] document.querySelector('마크업명').innerHTML
document.querySelector('body').innerHTML