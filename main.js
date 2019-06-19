const myName = 'Mateusz';
const mySurname = 'Hadrian';

console.log(`Dobry wieczór, tutaj ${myName} ${mySurname}. Co tam słychać?`)

const ThingsParagraphJS = document.querySelector('.things__paragraph--js');

ThingsParagraphJS.innerHTML = `Tutaj jest paragraf dodany z poziomu JavaScript jako proste zadanko domowe. Ciekawe czy będzie się zachowywał dokładnie tak samo jak wszystkie paragrafy powyżej. Przynajmniej powinny. Żeby napisać jeszcze trochę tekstu to wrzucę sobie tutaj zmienną z moim imieniem. Jednocześnie dzięki temu poćwiczę sobie wrzucania zmiennych do stringów. No więc moje imię to ${myName}. Dziękuję Państwu za uwagę. Pisał ${mySurname}.`;

