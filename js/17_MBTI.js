        // const let 중에서 변수처럼 안에 있는 값이 변경 가능한 let 사용
        let 정답 = {}; // 빈 장바구니 같은 배열

        // 옵션선택 기능 만들기
        function 옵션선택(선택한옵션) {
          // 각 질문에 대한 답을 저장
          let 현재질문 = Object.keys(정답).length + 1; // 현재까지 사용자가 답한 질문의 수를 나타내는 것
          정답["문제" + 현재질문] = 선택한옵션; // 정답이라는 배열에 내가 선택한 문제와 문제에 대한 옵션을 저장
          // {'문제1' : 'E'}
          // 다음 질문 보여주기
          let 다음질문 = 현재질문 + 1;

          let 현재질문div = document.getElementById("문제" + 현재질문);
          let 다음질문div = document.getElementById("문제" + 다음질문);

          // 만약에 다음질문으로 왔으면 현재질문은 숨기고 다음질문을 보여주겠다.
          if (다음질문div) {
            현재질문div.style.display = "none"; // 현재 질문 숨기기
            다음질문div.style.display = "block"; // 다음 질문 보여주기
          } else {
            결과확인하기();
          }
        }

        function 결과확인하기() {
          let 결과확인 = "당신의 성격 유형은 ";
          let MBTI개수확인 = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

          // 문제에 대해 체크한 답을 더해줄 것

          for (let 문제 in 정답) {
            // 반복적인 작업을 수행하는 for 문

            // 첫 번째 반복
            // 문제 = 문제 1
            // 정답[문제] = 정답[문제1] = E 인지 I 인지
            // let MBTI개수확인 = {'E':0, 'I':0, 'S':0, 'N':0, 'T':0, 'F':0, 'J':0, 'P':0};
            // 선택된 E or I 가 1 이 됨
            console.log("문제 : " + 문제);
            console.log("정답들 : " + 정답);
            MBTI개수확인[정답[문제]]++;
            console.log("MBTI개수확인 : " + [정답[문제]]);
          }
          // MBTI 결과 계산
          // 만약 E 와 I 가 있는데 E 가 I 보다 많다면
          if (MBTI개수확인["E"] > MBTI개수확인["I"]) {
            결과확인 += "E";
          } else {
            결과확인 += "I";
          }

          // 만약 S 와 N 가 있는데 S 가 N 보다 많다면
          if (MBTI개수확인["S"] > MBTI개수확인["N"]) {
            결과확인 += "S";
          } else {
            결과확인 += "N";
          }
          // 만약 T 와 F 가 있는데 T 가 F 보다 많다면
          if (MBTI개수확인["T"] > MBTI개수확인["F"]) {
            결과확인 += "T";
          } else {
            결과확인 += "F";
          }
          // 만약 E 와 I 가 있는데 E 가 I 보다 많다면
          if (MBTI개수확인["J"] > MBTI개수확인["P"]) {
            결과확인 += "J";
          } else {
            결과확인 += "P";
          }

          document.getElementById("결과확인").innerText = 결과확인;
          document.getElementById("결과확인").style.display = "block";
        }