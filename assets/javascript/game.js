

   
	//Hiding text. 
function myFunction(){
document.getElementById("myDIV").innerHTML = " ";
}
 // The words to be guessed.
var words =  ['sail', 'bats', 'cans']; 
// right letters
var right = [];
// wrong letters
var wrong = [];
// Array for _ markers
var anArray = [];
// Guess numbers
var lives = 10; 
// Player Wins
var wins = 0;
// Player Loses
var loss = 0;

// Choose a random word.  
var word = words[Math.floor(Math.random() * words.length)];
console.log(words);
console.log(word);

 //Creating Underscores with word length. 
	for (var i = 0; i < word.length; i++) {
    	anArray.push('_'); 
  	}

   console.log(anArray);
 //Call forth a new game, after win or loss. 
   function newGame() {
				anArray = [];
				wrong = [];
				word = words[Math.floor(Math.random() * words.length)];
				//alert(word);
				for (var i = 0; i < word.length; i++) {
    				anArray.push('_'); 
  				}

			}
 
 
// User Guess
document.addEventListener('keypress', (event) => {
	var keycode = event.keyCode;
	var keyword = String.fromCharCode(keycode);
	var keynote = word.indexOf(keyword);
	console.log(word.indexOf(keyword));
	console.log(keyword);
// Player gueses. Sorting letters in right n wrong. 
	if (keynote > -1) {
		right.push(keyword);
		console.log(right);
//Replacing _ with the right letter. 
		anArray[word.indexOf(keyword)] = keyword;
		console.log(anArray);
// Using join to turn array into string then seeing if it matches the word to create win condition. 
		if (anArray.join('') === word) {
			alert("you win");
			wins++;
			lives = 10;
			newGame();
			

		}
	}
	else {
		wrong.push(keyword);
		console.log(wrong);
		lives--;
		console.log(lives);
		 if (lives === 0) {
		 	alert("over")
		 	loss++;
		 	newGame();
		 }
	
	}
// Write to the Page the Elements.
document.getElementById("under").innerHTML = anArray;
document.getElementById("guesLet").innerHTML = "Guessed Letters:" + wrong;
document.getElementById("guesRemain").innerHTML = "Guesses Remaining: " + lives;
document.getElementById("wins").innerHTML = "Wins: " + wins;
document.getElementById("loss").innerHTML = "Loses: " + loss;

});





