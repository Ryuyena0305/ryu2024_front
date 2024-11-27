// 매개변수 : praameter , 매개(중매 매 : 양쪽 관계 맺기)
// 인자값/인수 : 들어갈 인, 인자값 - 변수
// 매개변수 ? 함수 호출시 인자값을 변수에 대입되는 함수

//(1) 함수 만들기/정의한다.
//[1] 매개변수 x, 반환값 x
function func1(){
    console.log('func1');
}
//[2] 매개변수o , 반환값 x
function func2(x,y){
    console.log(`func2 excute${x,y}`);
}
//[3] 매개변수o , 반환값 o . let 변수 = prompt()등등
function func3 (x,y){
    console.log(`func3 excute`);
    let res = x+y;
    return res;
}

//[4] 매개변수x , 반환값o
function func4(){
    console.log ('func4 excute');
    return 10;
} 
//(2) 함수 호출
func1(); //인자값도 없고 리턴값도 없는 함수 호출/사용
func2(1,2); //인자값이 1과 2가 있고 리턴값이 없는 함수 호출/사용
func3(1,2); //인자값이 1과 2가 있고 리턴값이 있는 함수 호출/사용,
let result=func3(1,2); // 함수결과를 다음코드에서 사용할 예정이라면 변수에 대입
let result4= func4(); // 인자값이 없고 리턴값이 있는 함수 호출/사용


/*
간단한 과제
    1. 함수표현하는 시각화
    2. 믹서기 함수/ 자판기 함수 빼고 생활속 함수 구조를 닮은 구조 시각화 (매개변수/리턴값)
*/