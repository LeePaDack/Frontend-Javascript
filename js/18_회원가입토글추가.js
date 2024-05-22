function 접기() {
    const 이용약관 = document.getElementById("이용약관");
    if (이용약관.classList.contains("열기닫기")) {
      이용약관.classList.remove("열기닫기");
    } else {
      이용약관.classList.add("열기닫기");
    }

    const 바꾸기 = document.getElementById("버튼");
    if(바꾸기.innerText == "접기"){
        바꾸기.innerText = "열기";
    } else{
        바꾸기.innerText = "접기";
    }

    
  }

  function 회원가입() {
    const user_name = document.getElementById("user_name").value;
    const user_email = document.getElementById("user_email").value;
    const user_pw = document.getElementById("user_pw").value;
    const user_pw_confirm = document.getElementById("user_pw_confirm").value;

    if (user_name == "고영희" && user_email == "ko@kh.kh") {
      alert("이미 가입한 회원입니다.");
    } else {
      if (user_pw == user_pw_confirm) {
        alert("회원가입 되었습니다.");
      } else if (user_pw != user_pw_confirm) {
        alert("비밀번호가 다릅니다.");
      }
    }
  }