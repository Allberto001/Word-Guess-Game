var heroes = ["batman","superman","greenLantern","flash","wonderwoman","aquaman"];


// to get random word from my array
var randomWord = Math.floor(Math.random() * heroes.length);
var chosenWord = heroes[randomWord];
console.log(chosenWord);

// creating underscore based on the length of the word
var underScore = [];
var Underscores = () =>{
    for( var i = 0; i < chosenWord.length; i++){
        underScore.push( "_" );

    }
    return underScore;
}
console.log(Underscores());

// get the letters that user is inputing
var rightGuess = [];
var wrongGuess = [];

document.addEventListener("keypress", (event) => {
    var key = String.fromCharCode(event.keyCode);
   //for testing console.log(chosenWord.indexOf(key));

    if(chosenWord.indexOf(key) > -1){
      //for testing console.log(true);
      // so the below commands will push the keys or letters into the rightGuess array 
      rightGuess.push(key);
      underScore[chosenWord.indexOf(key)] = key;
      //testing console.log(underScore);
    }
    if(underScore.join("") == chosenWord){
        alert("you win");
    } 
    else{
      // same thing as the above commands but pushing it into a different array in this case being a wrongGuess array i created  
        wrongGuess.push(key);
        
    }
  
});

// to put it into myactual webpage
var userunderscore = document.getElementsByClassName("underscores");

userunderscore[0].innerHTML = Underscores().join("");