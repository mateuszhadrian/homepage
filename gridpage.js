const actionButton = document.querySelector(".action-button--js");
const mainHeader = document.querySelector(".gheader--js");
let clicked = false;

actionButton.addEventListener("click", function(){
    if (clicked) {
        mainHeader.innerHTML = "BUTTON UNCLICKED";
        clicked = !clicked;
    } else {
        mainHeader.innerHTML = "BUTTON CLICKED";
        clicked = !clicked;
    }
})
