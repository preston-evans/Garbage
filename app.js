let max = prompt('Enter max number');
let random = parseInt(Math.ceil(Math.random()*max));
let guess = prompt('Guess a number between 1 and '+ max);
let counter = 1;
while(guess != random && guess !== 'q') {
    counter++;
    if(guess > random) {
        guess = prompt('Too high...guess again');
    } else {
        guess = prompt('Too low...guess again');
    }
}   
    if (guess === 'q') {
        prompt('Bitch')
    } else if(counter === 1) {
        prompt(`It took you ${counter} guess`)
    } else {
        prompt(`It took you ${counter} guesses`)
    }  

