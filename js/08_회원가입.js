const nameV = document.getElementById("user_name");
const emailV = document.getElementById("user_email");
const pwV = document.getElementById("user_pw");
const pw_cfV = document.getElementById("user_pw_confirm");

function 이름이메일확인() {
  const 이름 = nameV.value;
  const 이메일 = emailV.value;
  const 비밀번호 = pwV.value;


  if (이름 == "동그라미" && 이메일 == "one@kh.kh") {
    alert("이미 가입한 회원입니다. 로그인해주세요.");
  } else {
    alert("가입하지 않은 회원입니다.");
  }
}

function 비번일치여부() {
  const 비밀번호 = pwV.value;
  const 비밀번호확인 = pw_cfV.value;

  if (비밀번호 == 비밀번호확인) {
    alert("비밀번호가 일치합니다.");
  } else {
    alert("비밀번호가 일치하지 않습니다.");
  }
}

function 회원가입() {
  const nameV = document.getElementById("user_name").value;
  const emailV = document.getElementById("user_email").value;
  const pwV = document.getElementById("user_pw").value;
  const pw_cfV = document.getElementById("user_pw_confirm").value;

  if (pwV == pw_cfV) {
    alert("회원가입이 완료되었습니다.");
  } else {
    alert("다시 확인해주세요.");
  }
}