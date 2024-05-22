function 보이기숨기기(){
    // 클래스 목록에 hidden 클래스가 포함되어 있는지 확인
    const 박스 = document.getElementById("토글박스");
    if(박스.classList.contains("추가할클래스")){
        // 만약 존재한다면 hidden 삭제
        박스.classList.remove("추가할클래스");
    } else{
        // 없으면 hidden 추가
        박스.classList.add("추가할클래스");
    }
}