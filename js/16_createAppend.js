function 태그추가() {
    // 새로운 div 생성하기 위해 변수 설정하기
    const newDiv = document.createElement("div");
    newDiv.textContent = "새로운 div 입니다.";

    // 새로운 p 생성하기 위해 변수 설정하기
    const newP = document.createElement("p");
    newP.textContent = "새로운 p 입니다.";

    // 새로운 div 안에 새로운 p 추가하기
    newDiv.appendChild(newP);

    /*
            위 코드는 div 를 생성하고 생성한 div 안에 p 태그를 넣어주긴 하지만
            화면 어디에다가 div 를 넣어야하는지가 없었음


            */

    // 컨테이너로 이름을 작성한 div 태그에 div 추가하기
    document.getElementById("컨테이너").appendChild(newP);
  }