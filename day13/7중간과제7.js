/*
    중간과제7 : 회원가입 과 로그인 구현 페이지 구현하기
    [요구사항] 
    1. (회원가입 구역 에서 ) 아이디 와 비밀번호를 입력받아 회원가입 처리 해주세요.
    2. (로그인 구역 에서 ) 아이디 와 비밀번호가 회원가입에 등록된 데이터정보와 일치하면 '로그인 성공' 아니면 '로그인실패' 출력해주세요.
    [제출]
    강의 카카오톡방에 ip 링크 제출
 */

    let id_list = []
    let pw_list = []

    function 등록함수() {
        console.log('등록함수 실행');
       
        let idInput = document.querySelector('.input_id');                          
        let id = idInput.value;  
        let pwInput = document.querySelector('.input_pw');                    
        let pw = pwInput.value;

        id_list.push(id);      
        pw_list.push(pw); 
      
        출력함수(); 
    
    }
    function 출력함수(){
        let index=0
        if (id_list[index]==pw[index]){
            
        }


    } 
