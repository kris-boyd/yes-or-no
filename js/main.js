
document.querySelector('form').addEventListener('submit', check)

function check(e) {
    e.preventDefault();
let currentGuess = document.querySelector('#guess').value;
if (currentGuess === 'yes' || currentGuess === 'no') {
    document.querySelector('#response').innerText = "That\'s it, you got it!";
} else {
    document.querySelector('#response').innerText = "Nope, try again";
    }
    document.querySelector('#guess').value = "";
}