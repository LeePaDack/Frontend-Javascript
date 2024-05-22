function 제출하기() {
    const 이름 = document.getElementById("이름").value;
    const 설문내용 = document.getElementById("설문내용").value;

    // 이름과 설문내용에 작성한 결과를 표시하기
    document.getElementById("설문이름").textContent = 이름;
    document.getElementById("설문내용결과").textContent = 설문내용;

    // 결과보이기
    document.getElementById("설문결과").style.display="block";

}