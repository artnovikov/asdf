let inputs = document.querySelectorAll("input");

function moveBlurTitle() {
    if (this.value == "") this.parentNode.parentNode.classList.remove("focus");
    else this.parentNode.parentNode.classList.add("focus");
}

function moveFocusTitle() {
    this.parentNode.parentNode.classList.add("focus");
}

for (let input of inputs) {
    input.addEventListener("blur", moveBlurTitle);
    input.addEventListener("focus", moveFocusTitle);
}