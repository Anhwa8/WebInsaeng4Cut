function loadFile(input) {
    var file = input.files[0];

    var newImage = document.createElement("img");
    newImage.setAttribute("class", 'img');

    newImage.src = URL.createObjectURL(file);   

    newImage.style.width = "50%";
    newImage.style.height = "50%";
    newImage.style.objectFit = "contain";

    var container = document.getElementById('image-show');
    container.appendChild(newImage);

    var buttons = document.getElementsByClassName('button');
    if (buttons.length > 0) {
        var firstButton = buttons[0];
        firstButton.style.display = "none"; // 버튼 숨기기
    }
};