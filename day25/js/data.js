/**localStorage에 배열정보 불러오기 함수 */
function getBoardList(){
 
    let boardList = localStorage.getItem('boardList');   //1. localStorage배열 정보 요청,key
    if(boardList==null){ //2.만약에 localStorage 비어있으면
        boardList=[];//3. 빈배열 대입해주고
    }else{
        boardList = JSON.parse(boardList); //4. JSON(JS객체)로 변환해서 대입
    }
    return boardList; //5.현재 함수를 호출했던 곳으로 게시물 배열을 반환
}

//2. localStorage에 게시물 배열 정보 저장 함수
function setBoardList(boardList){
    localStorage.setItem(
        'boardList',//key
        JSON.stringify(boardList));//''안에 있는 것은 키값 'boardList'로 boardList를 저장해줘
}

//3. localStorage에 특정한 게시물 불러오기 함수
function getBoard(bno){
    //조회할 게시물 번호를 매개변수로 지정

    //1. 게시물 배열 요청
    let boardList = getBoardList();
    //2. 조회할 게시물 번호 찾기
    for(let index = 0;index<=boardList.length-1;index++){
        if(boardList[index].bno==bno){
            //만약에 index번째의 게시물번호와 조회할 번호와 같으면
            return boardList[index]; //찾은 게시물 객체 반환
        }
    }
    return null;//조회할 게시물번호와 일치한 게시물 객체 못찾음

}
//4. localStorage에  특정한 게시물1개 삭제