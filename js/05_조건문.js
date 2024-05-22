                 /* if 문을 사용해서 양수인지 검사하기 */
      const 인풋1 = document.getElementById("인풋1");

      function 체크1() {
        const 양수확인 = 인풋1.value;

        // 만약 input 에서 입력 받은 값이 0 보다 커서 true 가 되면 양수 출력

        if (양수확인 > 0) {
          alert("양수입니다.");
        }
        // 만약 input 에서 입력받은 값이 0 보다 같거나 작으면 양수가 아님
        if (양수확인 <= 0) {
          alert("양수가 아닙니다.");
        }
      }
           
           // 랜덤 숫자 -> 난수 : 정의된 범위 내에서 무작위로 추출된 수 
            // 자바에서 Random(), Math.random() 사용하는 것 처럼
            // 자바스크립트에서도 Math.random() 사용할 수 있음
            /*
            Math.floor() : 주어진 정수와 같거나 작은 정수 중에서 가장 큰 수 반환 (내림)
            Math.ceil() : 주어진 정수와 같거나 큰 정수 중에서 가장 작은 수 반환 (올림)
            Math.round() : 입력한 값을 정수와 가장 가까운 정수를 반환 (반올림)

            random 으로 나온 실수를 정수로 반환하고 싶다면 위 세가지 중에 넣고 싶은 값 괄호() 안에
            Math.random 을 넣어주면 됨

            */
            function 체크2(){
                const 랜덤숫자 = Math.floor(Math.random() * 101)// 0 ~ 100 101가지 랜덤 추출
                

                // 만약 홀수일 경우 숫자 % 2 == 1 , 숫자 % 2 != 0
                if(랜덤숫자 % 2 != 0){
                    alert(랜덤숫자 + "은/는 홀수입니다.");
                }
                else{
                    alert(랜덤숫자 + "은/는 짝수입니다.");
                }
            }

                  // 입력한 나이 값 가져오기
      function 체크4() {
        // const 입력받은나이 = document.getElementById(나이값).value; 아래와 동일한 코드
        const age = document.getElementById("나이값");
        const 입력받은나이 = age.value;

        let 메세지;
        
        if (입력받은나이 >= 0 && 입력받은나이 <= 13) {
            메세지 = "어린이";
        } 
        else if (입력받은나이 >= 14 && 입력받은나이 <= 19) {
            메세지 = "청소년";
        }
        else {
            메세지 = "성인";
        }
        console.log("키보드로 입력받은 나이 " + 입력받은나이);
          alert(메세지);
      }