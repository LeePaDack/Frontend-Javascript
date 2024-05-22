        /* 로그인 기능 만들기 */
        const 아이디값 = document.getElementById("inputId");
        //            = html 코딩안에서 가지고 올 것 태그에서 아이디 값이 지정된("아이디값"); 
        const 비밀번호값 = document.getElementById("inputPw");

        function 로그인버튼() {
            const 아이디 = 아이디값.value;
            const 비번 = 비밀번호값.value;

            // const 로그인메세지; // 변수 값이 변하면 안되기 때문에 변수명만 우선으로 작성 불가
            
            // 만약 아이디가 member 와 같고 사용자가 입력한 비밀번호가 khzzang 과 같다면
            // javascript 는 "" '' 둘 중 어떤 기호를 사용해도 상관 없음
                if(아이디 == 'member' && 비번 == "khzzang"){
                    alert("로그인 성공했습니다.");
                }
                else{
                    alert("로그인 실패했습니다.");
                }
            // 로그인 성공 메세지를 출력
            // 그런데 다르다면 실패 메세지 출력
        }

