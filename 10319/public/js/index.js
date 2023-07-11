function changeBackgroundColor() {
    var color = prompt("색깔을 입력하세요!");
    document.body.style.background = "linear-gradient(to right, rgb(160, 12, 12), " + color + ")";
}

function changeButtonText() {
    var inputText = prompt("텍스트를 입력하세요!")
    var h1 = document.getElementById("teamLog");
    h1.innerHTML = "";
    
    for (var i = 0; i < inputText.length; i++) {
        var span = document.createElement("span");
        span.textContent = inputText.charAt(i);
        h1.appendChild(span);
    }
}