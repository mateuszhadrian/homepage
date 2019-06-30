const myName = 'Mateusz';
const mySurname = 'Hadrian';
const num = 4;

console.log(`Dobry wieczór, tutaj ${myName} ${mySurname}. Co tam słychać?`)

const switcher = document.querySelector(".navigation__switcher--js");
const navigationList = document.querySelector(".navigation__list--js")

switcher.addEventListener('click', (e) => {
    navigationList.classList.toggle('navigation__list--visible')
})