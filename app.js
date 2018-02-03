//variables
const submit = document.querySelector('#submit-button');
let win = 0;
let lose = 0;
let tries = 3;
const letters = [ 'a', 'b', 'c'
    
];

let randomLetter = randomChoice(letters);





//eventListeners
submit.addEventListener('submit', submitLetter);





//functions
function submitLetter(e){
    e.preventDefault();
    element = element.querySelector(input);
    if(element.value === 'a') {
        return 'win';
    } else {
        return 'lose';
    }
}

function randomChoice(array){
    const rndIndex = Math.floor(Math.random() * array.length);
    return array[rndIndex];
}

