function 프롬포트버튼(){
    const 비밀번호입력 = prompt("비밀번호를 확인하세요");
    // 비밀번호는 1234
    const 잔액 = "$ 1,000";
    // 만약에 입력한 비밀번호가 1234 와 일치하다면 잔액 보여주기
    if(비밀번호입력 == 1234){
        alert("비밀번호가 맞습니다 잔액은 " + 잔액 + "입니다.");
        // else 를 사용해서 1234 가 아닐경우 비밀번호가 아니다 라고 표현할 수 있지만
        // 빈 값일 때 비밀번호가 일치하다며 넘어가는 오류 또한 방지하기 위해서 
        // 비밀번호가 빈공간이 아닐 때도 추가해주면 좋음
    }
    else if(비밀번호입력 != null){ // TIP
        alert("비밀번호가 틀렸습니다.");
    }
}