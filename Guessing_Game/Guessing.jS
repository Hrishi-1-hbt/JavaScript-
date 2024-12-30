
//NUMBER GUESSSING GAME


const minimun = 1;
const maximum = 100;

const answer = Math.floor(Math.random() * (maximum - minimun + 1)) + minimun;

let attempt = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt(`Guess a Number Between ${minimun} - ${maximum}`);
    guess = Number(guess);

    if (isNaN(guess)) {
        window.alert("Please enter a valid number");
    } else if (guess < minimun || guess > maximum) {
        window.alert(`Please enter a number between ${minimun} and ${maximum}`);
    } else {
        attempt++;
        if (guess < answer) {
            window.alert("Too Low!.. Try Again");
        } else if (guess > answer) {
            window.alert("Too High!.. Try Again");
        } else {
            window.alert(`CONGRATULATIONS.. YOUR GUESS IS CORRECT! IT TOOK YOU ${attempt} ATTEMPTS.`);
            running = false;
        }
    }
}
