 // creting variables
 
 let min = 1, 
 	 max = 10,
 	 winningNum = getWinningNum(min, max),
 	 guessesleft = 3;

 // creating Ui varibales 
 const  game = document.querySelector('#game'),
		minNum = document.querySelector('.min-num'),
		maxNum = document.querySelector('.max-num'),
		guessBtn = document.querySelector('#guess-btn'),
		guessInput = document.querySelector('#guess-input'),
		message = document.querySelector('.message');

// assiging ui min and max

minNum.textContent = min;
maxNum.textContent = max;

// play again event lister
game.addEventListener('mousedown',function(e){
	if(e.target.className === 'play-again'){
		window.location.reload();
	}
}); 

// listen for guess
guessBtn.addEventListener('click', function () {
	let guess = parseInt(guessInput.value);

	// validation
	if(isNaN(guess) || guess < min || guess > max){
		setMessage(`please enter a number between ${min} and ${max}`,'red');
	}
	// check if winning number
	if(guess === winningNum){
		// right
		gameOver(true, `${winningNum} is correct, YOU WIN!`);
	}else {
		// wrong
		guessesleft -= 1;
		if(guessesleft === 0){

			gameOver(false, `Game Over, you lost. The Correct number was ${winningNum}`)
			// lost
			guessInput.disable = true;
			guessInput.style.borderColor = 'red';
			setMessage(`Game Over, You Lost, the correct number was ${winningNum} `,'red');
		}else {
			// continue
			guessInput.style.borderColor = 'red';
			guessInput.value = '';
			setMessage(`${guess} is not correct, ${guessesleft} guesses are left`,'red');
		}

	}
});

// setmessage function
 function setMessage (msg, color) {
 	message.style.color = color;
 	message.textContent = msg;
 }

function gameOver (won, msg) {
	let color;
	won === true ? color = 'green' : color = 'red';

	guessInput.disable = true;
	guessInput.style.color = color;
	setMessage(msg);

	// play again
	guessBtn.value = 'Play Again';
	guessBtn.className += 'play-again';

}
function getWinningNum () {
	return Math.floor(Math.random()*(max-min+1)+min);
}