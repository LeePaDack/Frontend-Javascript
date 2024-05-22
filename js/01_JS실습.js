        /* 
        script 도 마찬가지로 head 와 body 에 넣어도 되지만 
        맨 밑으로 모으거나 맨 위로 모으면 좋음
        
            버튼 클릭할 경우 body 에 있는 글자색과 배경색을 변경

            함수(function) button 에서 onclick 안에 작성한 기능명을 작성
            function 기능명() {
                기능을 클릭하거나 사용할 때 수행할 동작들 작성
            }
        */

            const 바디 = document.querySelector("body"); // body 태그 선택
            // 라이트 모드 버튼을 눌렀을 때 실행되는 기능 작성
            function 밝은모드(){
                // body 태그 안에 style 을 변경 style 안에서 글자 색을 변경하는 color 를 설정
                // 태그 안으로 무언가를 작성할 때는 . 작성
                바디.style.color="black"; // 글자 색을 흰색으로 변경
    
                // body 태그 안에 style 변경 style 안에서 배경색을 변경하는 backgroundcolor 설정
                바디.style.backgroundColor="white";
            }
            // 다크 모드 버튼을 눌렀을 때 실행되는 기능 작성
            function 어두운모드(){
                바디.style.color="white";
    
                바디.style.backgroundColor="black";
            }