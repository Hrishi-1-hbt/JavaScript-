    //COUNTER FROGRAM

const decrement =document.getElementById("Decrement");
const Reset =document.getElementById("Reset");
const Increment =document.getElementById("Increment");
const countLabel = document.getElementById("countLabel");

let count = 0;

Increment.onclick = function () {
    count++;
    countLabel.textContent = count;
}
decrement.onclick = function () {
    count--;
    countLabel.textContent = count;
}
Reset.onclick = function () {
    count=0;
    countLabel.textContent = count;
}