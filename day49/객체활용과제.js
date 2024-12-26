let memberTable = [];
//회원가입 함수
function signUp(){
    console.log("signUp() 실행")

    let signid = document.querySelector('.signid'); console.log(signid);
    let signpw = document.querySelector('.signpw'); console.log(signpw);
    let signnic = document.querySelector('.signnic'); console.log(signnic);

    let id = signid.value;      console.log(id);
    let pw = signpw.value;      console.log(pw);
    let nicname = signnic.value; console.log(nicname);
    
    for(index = 0; index <= memberTable.length -1; index++){ //id 중복 검사
        if(memberTable[index].id === id){
            alert('이미 등록된 아이디입니다.');
            signid.value = '';
            signpw.value = '';
            signnic.value = '';
            return;
        } 
    } //for end

        if(pw.length < 5 || pw.length > 10) { // 비밀번호 길이이
            alert("비밀번호를 5~10자 사이로 해주세요");
            signid.value = '';
            signpw.value = '';
            signnic.value = '';
            return;
        }


    
        
    let memberDto = {id:id, pw:pw, nicname:nicname}; console.log(memberDto);
    memberTable.push(memberDto);
    console.log(memberTable);

    alert('회원가입 처리 했습니다.')

    signid.value = '';
    signpw.value = '';
    signnic.value = '';
}

//로그인 함수
function login(){
    console.log('login()실행');

    let loginid = document.querySelector('.loginid'); console.log(loginid);
    let loginpw = document.querySelector('.loginpw'); console.log(loginpw);

    let id = loginid.value;
    let pw = loginpw.value;

    let loginState = false;
    for(let index = 0; index <= memberTable.length -1; index++) {
        let memberDto = memberTable[index];
        if(memberDto.id == id && memberDto.pw == pw) {
            loginState = true;
            break;
        }
    }
    if(loginState == true){
        alert('로그인 성공' +'님 환영합니다.')
    }else{
        alert('동일한 정보가 없습니다.');
    }
    loginid.value = '';
    loginpw.value = '';
}