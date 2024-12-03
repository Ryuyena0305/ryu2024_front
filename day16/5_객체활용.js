/*
    - 사원 정보와 각 사원의 연도별 점수평가 메모리 구성
    1. 저장할 데이터들을 모두 생각한다.
        사원명, 생년월일, 연도, 상반기/하반기 점수

    2. 데이터끼리 관계성 파악해서 분류하기
        - 사원정보(사원명, 생년월일), 점수(연도, 상반기점수, 하반기점수)
        - 상하관계, 일 대 다 관계, 하나의 데이터가 다른데이터에서 여러개를 참조한다.
            - 하나의 사원이 여러개 연도별 점수를 가질수 있다.
                '유재석' --------> 2024 100 90
                         --------> 2023 85 64
                    일       대      다

            - 하나의 회원이 여러개 게시물을 작성할 수 있다.
            - 하나의 카테고리의 여러개 제품을 등록할 수 있다.

    3. 데이터 분류 간의 관계성 연결
        - 사원정보(상위/식별가능한필드), 점수(하위)

        1. 유재석 정보 등록, 유재석 2002-10-02 2024 90 80
        2. 유재석 2024점수 등록, 유재석 2002-10-02 2024 90 80
        3. 유재석 2023점수 등록, 유재석 2002-10-02 2024 90 80  2023 100 97
            유재석 2002-10-02 ----> 2024 90 80
                                    2023 100 97
            1 유재석 2002-10-02 ----> 1 2024 90 80
                                ----> 1 2023 100 97

*/
//[1] 객체지향으로 메모리 구성
//1. 두사원의 정보를 샘플로 해서 2개의 객체 생성
let 사원1 = { 사원번호: 1, 사원명: '유재석', 생년월일: '2001-03-05' }
let 사원2 = { 사원번호: 2, 사원명: '윤도운', 생년월일: '1995-08-25' }
//2. 사원목록 등록
let 사원목록 = [];
사원목록.push(사원1);
사원목록.push(사원2);
console.log(사원목록)
//3. 20204 평가 등록
let 점수1 = { 사원번호: 1, 연도: '2024', 상반기: 100, 하반기: 80 }; //유재석
let 점수2 = { 사원번호: 2, 연도: '2024', 상반기: 92, 하반기: 71 }; //윤도운
let 점수3 = { 사원번호: 1, 연도: '2023', 상반기: 82, 하반기: 52 }; //윤도운

//4. 평가 목록 등록
let 평가목록 = [];
평가목록.push(점수1);
평가목록.push(점수2);
평가목록.push(점수3);
console.log(평가목록); //평가목록내 세번째 위치한 점수는 누구의 점수인가요? '유재석'

//[*] 사원번호 전역변수
let eno = 3; //<--샘플 2개(사원 2개)라서 다음 등록된 사원번호는 3번부터 시작
//[1] 사원 등록 함수, 실행조건 : [사원등록] 버튼 눌렀을 때 실행
function 사원등록() {
    //1. 입력
    let name = document.querySelector('.name').value;
    let birth = document.querySelector('.birth').value;
    //2. 처리
    let info = {
        사원번호: eno, //사원번호
        사원명: name,
        생년월일: birth
    }
    console.log(info);
    //생성한 객체를 배열에 추가하기
    사원목록.push(info)
    eno++ // 만일 사원등록 성공시 eno(사원번호) 1증가한다(다음 회원 1증가된 사원번호를 받을 예정)
    console.log(사원목록)

    //3. 출력
    사원전체출력();
}
//[2] 사원 정보 전체 출력 함수 , 실행조건  : 1. JS실행될 때 최초1번 2. 사원목록(배열) 변화 (저장/수정/삭제)가 있을 때마다
사원전체출력();
function 사원전체출력() {
    //1. 어디에
    let tbody = document.querySelector('.사원테이블');

    //2. 무엇을
    let html = '';
    //사원목록내 모든 사원정보를 HTML로 구성하기
    for (let index = 0; index <= 사원목록.length - 1; index++) {
        let info = 사원목록[index];
        html += `<tr>
                    <td> ${ info.사원번호 }</td>
                    <td> ${ info.사원명 } </td>
                    <td> ${ info.생년월일 } </td>
                    <td> 
                        <button onclick="평가등록출력( ${ info.사원번호 } )" type="button">평가등록</button>
                        <button type="button">평가결과</butoon>
                    </td>
                </tr>`
    }

    //3. 출력
    tbody.innerHTML = html

}
//[3] 평가 등록 구역 출력 함수, 실행조건 : [평가등록] 버튼을 클릭했을 때
function 평가등록출력(클릭된사원번호) { //매개변수 : 클릭된 사원번호
    //사원번호를 이용한 사원정보 찾기
    let 검색사원 = null; //검색사원을 찾기 전 변수
    for(let index = 0; index<=사원목록.length-1;index++){
      
        
        let info = 사원목록[index]; //index번째의 사원 호출
        console.log(info)
        if(info.사원번호 == 클릭된사원번호){//index번째의 사원번호가 클릭된 사원번호와 같으면
            검색사원 = info; //for밖에서 선언한 검색사원 변수에 대입한다.
            console.log(검색사원)
            break; 
            
        }
    }
    if(검색사원==null){
        alert('사원정보가 없습니다.');
        return; //현재 함수 종료
    }
    //1 .어디에
    let div = document.querySelector('.평가입력구역');
    console.log(div);
    //2. 무엇을
    let html = `<h3>사원 평가 등록</h3>
        <form>
            <h5>평가사원명 : ${검색사원.사원명}</h5>
            평가 : <input type="text"/>
            상반기평가 : <input type="text"/>
            하반기평가 : <input type="text"/>
            <button type="button" onclick="점수등록()">점수등록</button>

        </form>`;
        console.log(html)
    //3. 출력
    div.innerHTML = html


}
// function 점수등록(){
   
//     //1.어디에
//     let divdiv = document.querySelector('.평가입력구역')
//     //2.무엇을
//     let html=`<h3>사원 평가 등록</h3>
//         <form>
//             <h5>평가사원명 : ${검색사원.사원명}</h5>
//             평가 : <input type="text" class="평가년도"/>
//             상반기평가 : <input type="text" class="상반기평가점수"/>
//             하반기평가 : <input type="text" class="하반기평가점수"/>
//             <button type="button" onclick="점수등록() class=">점수등록</button>

//         </form>`
    
//     //3.출력
//     console.log(html)
//     divdiv.innerHTML =html;
// }
