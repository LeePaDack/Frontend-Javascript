메세지보이기("안녕하세요. KH 상담봇 입니다.","Bot");

function 보내기(){
    const inputbox = document.getElementById("user-input");
    const message = inputbox.value;

    메세지보이기(message,"user");
    inputbox.value = "";

    setTimeout(() => {
        메세지보이기("채팅봇입니다.","Bot");
    }, 1200);
}
function 메세지보이기(message,sender){
    const chatbox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");

    messageElement.classList.add("message" + sender + "-message");
    messageElement.textContent = message;
    chatbox.appendChild(messageElement);
}
function 열기접기(){
    const chatcontainer = document.getElementById("chat-container");
    if(chatcontainer.classList.contains("컨테이너")){
        chatcontainer.classList.remove("컨테이너");
    } else{
        chatcontainer.classList.add("컨테이너");
    }

    const 바꾸기 = document.getElementById("버튼");
    if(바꾸기.innerText == "접기"){
        바꾸기.innerText = "열기";
    } else{
        바꾸기.innerText = "접기";
    }

}

