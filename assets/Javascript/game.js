var heroes = ["Batman","Superman","GreenLantern","Flash","WonderWoman","Aquaman"];
var wrongGuess = [];
var rightGuess = [];

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
document.addEventListener("keypress", (event) => {
    var keyletter = String.fromCharCode(event.keyCode);

    if( chosenWord.indexOf(keyletter) > -1){
        rightGuess.push(keyletter);
        underScore[chosenWord.indexOf(keyletter)] = keyletter;
        
    }
    if(underScore.join("") == chosenWord){
        alert("you win");
    }
   else{
       wrongGuess.push(keyletter);
       console.log(wrongGuess);
   }
  
})