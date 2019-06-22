const myName = 'Mateusz';
const mySurname = 'Hadrian';
const num = 4;

console.log(`Dobry wieczór, tutaj ${myName} ${mySurname}. Co tam słychać?`)

const ThingsParagraphJS = document.querySelector('.things__paragraph--js');

ThingsParagraphJS.innerHTML = `Tutaj jest paragraf dodany z poziomu JavaScript jako proste zadanko domowe. Ciekawe czy będzie się zachowywał dokładnie tak samo jak wszystkie paragrafy powyżej. Przynajmniej powinny. Żeby napisać jeszcze trochę tekstu to wrzucę sobie tutaj zmienną z moim imieniem. Jednocześnie dzięki temu poćwiczę sobie wrzucania zmiennych do stringów. No więc moje imię to ${myName}. Dziękuję Państwu za uwagę. Pisał ${mySurname}.`;

switch(num){
    case 1:
        console.log('num is 1');
        break;
    case 3:
        console.log('num is 3');
        break;
    case 6: 
        console.log('num is 6');
        break;
    default:
        console.log('num is not 1, not 3 and not 6');
}

const calculate = (x, y, z) => (x + y)*z 

console.log(calculate(2, 3, 5))