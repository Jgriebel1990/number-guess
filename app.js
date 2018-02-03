//variables
const submit = document.querySelector('#play-form');
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
    const element = e.target.querySelector('input');
    console.log(element.value);
    if(element.value === randomLetter) {
       console.log('win');  
    }
}

function randomChoice(array){
    const rndIndex = Math.floor(Math.random() * array.length);
    return array[rndIndex];
}

