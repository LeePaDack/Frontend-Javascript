        // 입금하기 출금하기
        let 잔액 = 0; // 처음 잔액 설정

        function 입금버튼() {
          // 숫자가 아니라 문자로 인식할 때는 문자 -> 숫자로 변경
          // 자바랑 거의 같음 parseInt() 는 문자를 숫자로 변경
          const 입금액 = parseInt(document.getElementById("amount").value);

          // 만약에 숫자 이외의 값을 넣을 경우
          if (isNaN(입금액) || 입금액 < 0) {
            // 입금액이 숫자가 아니거나 음수일 때
            alert("올바른 금액을 입력하세요");
          } else {
            // 입금액이 숫자이고 양수일 때
            잔액 += 입금액;
            document.getElementById("output").innerText = 잔액;
          }
        }

        function 출금버튼() {
          const 출금액 = parseInt(document.getElementById("amount").value);

          // 돈을 출금하기 전에 잔액보다 보유하고 있는 금액이 적은지 확인
          if (isNaN(출금액) || 출금액 < 0) {
            alert("올바른 금액을 입력하세요");
          } else {
            if (출금액 <= 잔액) {
              잔액 -= 출금액;
              document.getElementById("output").innerText = 잔액;
            } else {
              alert("잔액이 부족합니다.");
            }
          }
        }