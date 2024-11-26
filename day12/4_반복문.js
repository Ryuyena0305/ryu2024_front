// [1] continue; : 가장 가까운 for문의 증감식으로 코드 흐름 (눈에 안보임) 이동
for (let i = 1; i <= 5; i++) {//i는 1부터 5이하까지 1씩 증가 반복한다.
    //만약에 i가 3이면 continue
    if (i == 3) { continue; }//코드흐름이 continue 만나면 가장 가까운 증감식 이동
    //즉 continue 이후 코드는 실행되지 않는다.
    console.log(i);

}

//[2] break; : 가장 가까운 for문의 { } 종료/탈출/끝내기
for (let i = 1; i <= 20; i++) {//i는 1부터 10이하까지 1씩 증가 반복한다.
    if (i == 5) { break; }//코드흐름이 break 만나면 가장 가까운 반복문 종료
    // 즉 break이후 반복문 코드는 실행되지 않는다.
    console.log(i);

}

//[3] 무한 루프 : 종료되는 조건이 없이 계속적으로 반복되는 구조, 메모리 과부하
// for(;;){
//     console.log('무한루프')
// }

//(실습1) 6개의 정수를 입력받아 하나의 배열에 저장하시오.
// - 조건 : 배열 내 중복은 없어야한다.

let numArray = []; //입력받은 데이터를 저장하는 배열 선언
for(;;){//(1) 무한입력
    let num = Number(prompt('${ numArray.length}수 입력: '));
    //(2) 처리 : 중복검사, 배열저장, 갯수체크
    //1. 중복검사 .indexOf('찾을 데이터') : 배열내 찾을 데이터가 존재하면 인덱스 반환 없으면 -1
    if(numArray.indexOf(num)!=-1){  //만약에 배열내 입력받은 값이 존재하면
        alert('중복입니다.'); //alert()  : HTML 알람 메시지 함수
        continue; //가장 가까운 for문의 증가식으로 이동 // 아래코드는 실행되지 않음
    }
    //배열 저장 .push (새로운값) : 배열내 마지막 인덱스에 새로운 값 추가 함수
    numArray.push(num)
    //3. 개수 체크.length : 배열내 요소의 개수 / 총길이 반환 속성
    //
    if(numArray,length>=6){//만약에 배열의 총길이(요소개수)가 6개이상이면 
        break; //가장 가까운 for의 {} 종료한다. for 강제 종료/탈출
    }

}
console.log(numArray);
