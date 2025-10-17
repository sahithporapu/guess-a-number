let random = Math.ceil(Math.random() * 100);
let input = document.getElementById("input");
let result = document.getElementById("result");
let score=document.getElementById("score");
let c=0;
// console.log(random)
function guess() {
    c++;
    if (input.value == random) {
        result.textContent = "Congrats Your Guess is Correct!"
        result.style.color = "White"
        score.textContent = "Chances: "+c;
        
    }
    else if (input.value < random) {
        result.textContent = "Your Guess is too low!"
        // result.style.color = "black"
    } else {
        result.textContent = "Your Guess is too high!"
        // result.style.color = "black"
    }
}