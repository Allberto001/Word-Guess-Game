var heroes = ["batman","superman","greenLantern","flash","wonderwoman","aquaman"];
var chosenWord = "";
var letters = [];
var numberOfBlanks = 0;
var rightGuess = [];
var wrongGuess = [];
var winCount = 0;
var lossCount = 0;
var chances = 10;


function startGame() {
    chosenWord = heroes[Math.floor(Math.random() * heroes.length)];
    letters = chosenWord.split("");
    numberOfBlanks = letters.length;
    chances = 10;
    wrongGuess = [];
    rightGuess = [];
    for (var i = 0; i < numberOfBlanks; i++) {
        rightGuess.push("_");
	}
    document.getElementById("underscores").innerHTML = rightGuess.join(" ");
	document.getElementById("countdownnumber").innerHTML = chances;
	//document.getElementById("wrongguess").innerHTML = wrongGuess;
    document.getElementById("wincounter").innerHTML = winCount;
    document.getElementById("losscounter").innerHTML = lossCount;
    console.log(chosenWord);
    console.log(letters);
    console.log(numberOfBlanks);
    console.log(rightGuess);
}

function checkLetters(key) {
    var LetterInWord = false;
    for (var i = 0; i < numberOfBlanks; i++) {
        console.log(chosenWord[i]);
        console.log(key);
        if (chosenWord[i] == key) {
			LetterInWord = true;
        }
    }
    if (LetterInWord) {
        for (var i = 0; i < numberOfBlanks; i++) {
            if (chosenWord[i] == key) {
                rightGuess[i] = key;
                document.getElementById("underscores").innerHTML = rightGuess.join("");
                if (document.getElementById("underscores").innerHTML == chosenWord){
                    alert("Victory!");
                    //incriment win counter
                    winCount ++
                    document.getElementById("wincounter").innerHTML = winCount;
                    startGame();
    
                }
            }
        }
	}
	
	else {
        if (chances == 0) {
            alert("Your Defeated!");
            lossCount ++
            document.getElementById("losscounter").innerHTML = lossCount;
            startGame();
        }
        else {
            wrongGuess.push(key);
			chances--;
			document.getElementById("wrongguess").innerHTML = wrongGuess;
        }
	}
	console.log(rightGuess);
}

function roundComplete() {
    console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | chances Left" + chances);
    count = document.getElementById("countdownnumber");
    count.innerHTML = chances;
}

startGame();
document.onkeyup = function () {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();
}

/*var letterRepeat = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","x"];
var heroes = ["batman","superman","greenLantern","flash","wonderwoman","aquaman"];
var chosenWord = "";
var letters = [];
var numberOfBlanks = 0;
var rightGuess = [];
var wrongGuess = [];
var rightCounter= 0;
var chances = 10;

function reset(){
// to get random word from my array
chosenWord = heroes[ Math.floor(Math.random() * heroes.length)];
// creates spacing in between the letters
letters = chosenWord.split(" ");

numberOfBlanks = letters.length;


    letterGuessed = 0;
	rightCounter = 0;
	chances = 10;
	wrongGuess =[];
	rightGuess =[];
	letterRepeat = ['a','b','c',
					  'd','e','f',
					  'g','h','i',
					  'j','k','l',
					  'm','n','o',
					  'p','q','r',
					  's','t','u',
					  'v','w','x',
					  'y','z'];
	test=false;
	startGame();
    }

function startGame() {
    chosenWord = heroes[ Math.floor(Math.random() * heroes.length)];
    letters = chosenWord.split(" ");
    numberOfBlanks = letters.length;

	rightCounter = 0;
	chances = 10;
	wrongGuess =[];
	rightGuess =[];
	letterRepeat = ['a','b','c',
					  'd','e','f',
					  'g','h','i',
					  'j','k','l',
					  'm','n','o',
					  'p','q','r',
					  's','t','u',
					  'v','w','x',
                      'y','z'];

 // this will create my blanks   
    for( var i = 0; i < numberOfBlanks; i++){
                        rightGuess.push("_");
                        document.getElementById("underscores").innerHTML = rightGuess;
                }   
            
 // what the user will see
 document.getElementById("underscores").innerHTML = rightGuess.join(" ");
 document.getElementById("countdownnumber").innnerHTML = chances;
 document.getElementById("wrongguess").innerHTML = wrongGuess;  
 
 // if you want to see what was the word go to your console
 console.log(chosenWord);
 //console.log(letters);
 //console.log(numberOfBlanks);
 //console.log(rightGuess);
}

function lettercomparison(userkey){
    //if the letter exist in the word go with the if statement
    if(chosenWord.indexOf(userkey) > -1){
        
        for(var i = 0; i < numberOfBlanks; i++){
            
                 if(letters[i] === userkey){
                     rightCounter++;
                     rightGuess[i] = userKey;
                     document.getElementById("underscores").innerHTML = rightGuess.join("");
                 }
        }
       // console.log(rightGuess);
    }
    else{
        wrongGuess.push(userKey);
        chances--;
        //will put all the letter you guess wrong in my wrong guess box
        document.getElementById("wrongguess").innerHTML = wrongGuess;
        //will make the the number in the coundown box go down
        document.getElementById("countdownnumber").innerHTML = chances;

        //console.log("Wrong Letters = " + wrongGuess);
		//console.log("Guesses left are " + chances);
    }
}
function winLose()
{
	// When number blanks if filled with right leters then you win
	if(rightCounter === numberOfBlanks)
	{
		alert('You Win');
		reset();
	}
	// When number of Guesses reaches 0  You lose
	else if(chances === 0)
	{
		alert('You Lose');
		reset();
	}
}

 //startGame();

document.onkeyup = function(event)
{
	test = true;
	var letterGuessed = event.key;
	for(var i = 0; i < letterRepeat.length; i++)
	{	
		if(letterGuessed === letterRepeat[i] && test === true)
		{
			var spliceDword = letterRepeat.splice(i,1);
			//Test / Debug
			//console.log("Double word is = " + letterRepeat[i])
			//console.log("Spliced Word is = " + spliceDword);

			lettercomparison(letterGuessed);
			winLose();
		}
	}		
		
} */
