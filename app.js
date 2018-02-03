//variables
const submit = document.querySelector('#submit');
let wins = 0;
let losses = 0;
let tries = 3;
const letters = [ 'a', 'b', 'c'
    
];

let randomLetter = randomChoice(letters);





//eventListeners
Submit.addEventListener('submit', generateLetter);





//functions
function generateLetter(e){
    e.preventDefault();
}

function randomChoice(array){
    const rndIndex = Math.floor(Math.random() * array.length);
    return array[rndIndex];
}

