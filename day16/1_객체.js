//[1] 객체 선언
let 객체변수 = {}
//[2] 객체 호출
console.log(객체변수);
//[3] 객체 속성 구성
let 객체변수2={ 속성1 : 10, 속성2:'hello'}
console.log(객체변수2)

let age=10;
console.log(age)

//[4] 객체 속성값 호출
console.log(객체변수2.속성1);
console.log(객체변수2.속성2);

//[5] 객체 속성 생성
객체변수2.속성3 = true;
console.log(객체변수2)

//[6] 객체 속성 값 수정
객체변수2.속성1 = 20;
console.log(객체변수2);

//[7] 객체 속성 삭제
delete 객체변수2.속성3;
console.log(객체변수2);

//[8] 객체내 다양한 속성값들
let 객체변수3 = {
    속성1 : 10,
    속성2 : 'Hi',
    속성3:false,
    속성4: [10,20,30,40], 
    속성5 : function(){},
    속성6 : {속성7: 10, 속성8:'Hi2'}
};
console.log(객체변수3);
console.log(객체변수3.속성4);
console.log(객체변수3.속성4[1]);
    //객체 참조시 .(온점) / 배열 요소 참조시 [인덱스]
console.log(객체변수3.속성5); //객체내 함수 호출
console.log(객체변수3.속성6)
console.log(객체변수3.속성6.속성7);
    //객체내 속성들의 데이터가 알 수 없을 때 어떻게 대응?
    //console.log();이용한 객체 내 상태를 확인하면서 개발하자