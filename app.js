//variables
const submit = document.querySelector('#play-form');
const winCount = document.querySelector('#win');
const letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g',' h', 'i', 'j', 'k', 'l', 'm', 
                  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'z'
];
let win = 0;
let tries = 3;
let randomLetter = randomChoice(letters);





//eventListeners
submit.addEventListener('submit', submitLetter);



//to do list: add the rest of the alphabet, track wins

//functions
function submitLetter(e){
    const element = e.target.querySelector('input');
    console.log(element.value);
    event.preventDefault();
    if(element.value === randomLetter) {
       window.alert('you win');
       winCount.textContent = win + 1;
       return 'You Win!!';  
    } else {
        alert('Try Again!');
    }
}

function randomChoice(array){
    const rndIndex = Math.floor(Math.random() * array.length);
    return array[rndIndex];
}

