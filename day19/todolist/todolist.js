let 할일목록 = [
    { 할일코드: 1, 할일내용: "게임하기", 할일상태: false },
    { 할일코드: 2, 할일내용: "공부하기", 할일상태: true }
]
let number = 3;

전체출력함수();
function 등록함수() {
    let content = document.querySelector('#contentInput').value

    let 할일 = {
        할일코드 : number,
        할일내용 : content,
        할일상태 : false
    }

    할일목록.push(할일);
    
    alert('할일이 등록되었습니다.');
    number++;
    전체출력함수();

}

function 전체출력함수() {
    let tbody = document.querySelector("#todoBottom");
  

    let html='';
    for (let index = 0; index <= 할일목록.length - 1; index++) {
        let info = 할일목록[index]

        html += ` <div class="contentBox ${info.할일상태==true?'success':''}">
                <div class="content">${info.할일내용}</div>
                <div class="contentBtns">
                    <button class="updateBtn" onclick="수정함수(${info.할일코드})">수정</button>
                    <button class="deleteBtn" onclick="삭제함수(${info.할일코드})">삭제</button>
                </div>
            </div>`
            
    }


    tbody.innerHTML =html;
    return;

}

/* 수정함수에서 css로 할일 상태가 true일때에 색전환 및 실선표시가 안됨
    할일목록[index].할일상태 == true? 'success':'';을 작성해야하는 것을 알지만 위치를 모름
*/
function 수정함수(수정할일코드) {
    for (let index = 0; index <= 할일목록.length - 1; index++) {
        if (할일목록[index].할일코드 == 수정할일코드) {
            할일목록[index].할일상태 = !할일목록[index].할일상태
        
        }

    }
    전체출력함수();
    return;
}
function 삭제함수(삭제할일코드) {
    for (let index = 0; index <= 할일목록.length - 1; index++) {
        if (할일목록[index].할일코드 == 삭제할일코드) {
            할일목록.splice(index, 1);
            break;
        }
    }
    전체출력함수();
    return;

}