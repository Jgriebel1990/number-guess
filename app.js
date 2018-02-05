//variables
const submit = document.querySelector('#play-form');
let win = 0;
let lose = 0;
let tries = 3;
const letters = [ 'a', 'b', 'c', 
    
];

let randomLetter = randomChoice(letters);





//eventListeners
submit.addEventListener('submit', submitLetter);


//to do list: need to write code to be able to have more than one try, add the rest of the alphabet, track wins

//functions
function submitLetter(e){
    const element = e.target.querySelector('input');
    console.log(element.value);
    if(element.value === randomLetter) {
       window.alert('you win');
       return 'You Win!!';  
    }
    if(element.value !== randomLetter) {
        window.alert('you lose');
    }
}

function randomChoice(array){
    const rndIndex = Math.floor(Math.random() * array.length);
    return array[rndIndex];
}

