/*
    중간과제9 : 기계식 주차장 시스템 구현
        [요구사항]
        1. 주차할 수 있는 총 차량 대수는 20대입니다.
        2. 차량번호와 주차할 위치를 클릭/입력 받아 [입차] 버튼을 클릭한다.
            단] 해당 위치에 입차된 차량이 존재하면 '입차불가' 안내 출력 아니면 '입차성공'안내 출력
            3. 차량번호를 입력받아 [출차] 버튼 클릭한다.
                단] 출차되는 차량의 위치와 금액(주차료)를 안내 출력
                단] 금액은 1초당 100원 계산, 하루가 지나지 않는 조건
        ======================================================================================
        [개발순서]
        1. 프론트 html 구성
        2. js 메모리 구성 (배열/변수/csv)
        3. 함수 구성 (함수명, 실행조건, 매개변수 판단)
        4. 각 함수별 기능 구현, 코드 작성
        5. 각 함수별 기능 구현 후 HTML (onclick)연동
*/
let carInfo = [];

function outCar(){
 
}
function searchCar(index){
  console.log('상세출력함수 실행'); console.log( index );
  let search = carInfo[ index ];   
    let carsplit = search.split(',')
    document.querySelector('.carLocation').innerHTML = carsplit[0];
    document.querySelector('.carNumber').innerHTML = carsplit[1]; 
    document.querySelector('').innerHTML = carsplit[2];
    console.log()


}
function inCar() {
  let carLocation = document.querySelector(".carLocation").value; 
  let carNum = document.querySelector("#carNumber").value; 

  if (carLocation === "none" || carNum === "") {
    alert("주차 자리와 차량 번호를 모두 입력해주세요!");
    return;
  }

  let today = new Date();   
      let hours = today.getHours(); 
      let minutes = today.getMinutes();  
      let seconds = today.getSeconds();  
          let time = `${hours}:${minutes}:${seconds}`

  let board = `${carLocation}, ${carNum}, ${time}`;
  carInfo.push(board);
  console.log(carInfo);

}
