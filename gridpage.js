const actionButton = document.querySelector(".action-button--js");
const mainHeader = document.querySelector(".gheader--js");
let clicked = false;

actionButton.addEventListener("click", (e) => {
    if (clicked) {
        mainHeader.innerHTML = "BUTTON UNCLICKED";
        clicked = !clicked;
    } else {
        mainHeader.innerHTML = "BUTTON CLICKED";
        clicked = !clicked;
    }
    console.log(e);
})

const goButton = document.querySelector('.go-button--js');
goButton.addEventListener('click',() => {
    goButton.classList.toggle("goButtonClass");
})

