        // 자료형 var(오래된 버전)   let const(최신 버전) 
        // document = html 문서 안에서 선택하기 body
        // ID=변수명을 가지고 올 때는 getElementById("변수명")
        // querySelector -> 특정한 class 나 id 가 없을 때 선택하겠다는 의미("~~") ~~ 태그를
        const 바디 = document.querySelector("body");
        function 밝은모드(){
            바디.style.backgroundColor="white";
            바디.style.color="black";
        }
        function 어두운모드(){
            바디.style.backgroundColor="black";
            바디.style.color="white";
        }
        function 분홍모드(){
            바디.style.backgroundColor="lightsteelblue";
            바디.style.color="lightpink";
        }
        function 초록모드(){
            바디.style.backgroundColor="lightgreen";
            바디.style.color="yellowgreen";
        }
        // JS 는 오타나 철자 문제가 있을 때 문제를 보여주며 실행을 멈추는 것이 아니라
        // style 로 예를 들자면, 기본 색인 검정을 가져오거나 그 전에 사용한 색상을 가지고와서 활용