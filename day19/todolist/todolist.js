let 할일목록=[
    {할일코드:1,할일내용:"롤체하기",할일상태:false},
    {할일코드:2,할일내용:"협곡하기",할일상태:true},
    {할일코드:2,할일내용:"공부하기",할일상태:false}
]
let number=3;
전체출력함수();

function 등록함수(){
    let name = document.querySelector('.todoInput').value
    let 할일 ={
        할일코드:number,
        할일내용:name,
        할일상태:false
    }
    할일목록.push(할일);
    
    alert('등록되었습니다.')
    전체출력함수();
    return;

}
function 전체출력함수(){

    let tbody = document.querySelector('#todoBottom');
    let html='';
    for(let index=0;index<=할일목록.length-1;index++){
        let info=할일목록[index];
    

  
    html+=` <div class="contentBox ${할일목록[index].할일상태==true?'success':''}">
                <div class="content">${info.할일내용}<br></div>
                <div class="todoBtns">
                    <button type="button" class="updateBtn" onclick="수정함수(${info.할일코드})" >수정</button>
                    <button type="button" class="deleteBtn" onclick="삭제함수(${info.할일코드})">삭제</button>
                </div>
                </div>`
            }
        tbody.innerHTML=html;
        return;
    
}
function 수정함수(수정할일코드){
    for(let index=0;index<=할일목록.length-1;index++){
        if(할일목록[index].할일코드==수정할일코드){
            할일목록[index].할일상태 = !할일목록[index].할일상태
            break;
        }

    }
    전체출력함수();
    return;
    
}
function 삭제함수(삭제할일코드){
    for(let index=0;index<=할일목록.length-1;index++){
        if(할일목록[index].할일코드==삭제할일코드){
            할일목록.splice(index,1)
            break;
        }

    }
    전체출력함수();
    return;
}