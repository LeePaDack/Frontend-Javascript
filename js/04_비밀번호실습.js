const 비번1 = document.getElementById("inputPW1");
const 비번2 = document.getElementById("inputPW2");

function 비밀번호확인() {
    // input 과 같은 창에 작성된 내용은 모두 value 라는 이름으로 담겨짐
    const pw = 비번1.value;
    const pw2 = 비번2.value;

    // 만약 비밀번호가 비밀번호 확인과 일치하면 alert 이용해
    // 비밀번호가 일치합니다 출력

    // 비밀번호가 일치하지 않는다면 alert 이용해
    // 비밀번호가 일치하지 않습니다 출력

    if(pw == pw2){
        alert("비밀번호가 일치합니다");
    }
    else{
        alert("비밀번호가 일치하지 않습니다");
    }

}