var Letter = require("./Letter.js");
var inquirer = require("inquirer");

var array = ["dog", "cat", "mouse"];

 

function WordSelecter(word) {
    this.word = word;
    this.letters = word.split("").map(val => new Letter(val, false))


}

WordSelecter.prototype.splitFunction = function () {
    console.log(this.letters);
    //return this.letters.map(val => val.underscore()).join("");
    var wordIsEqualto = this.letters.map(function(val){
        return val.underscore();
    })
    console.log(wordIsEqualto.join(""));
}


var hangmanWord = new WordSelecter("dog")




function playGame() {



hangmanWord.splitFunction();

    
inquirer.prompt([
    {
        type: "input",
        message: "Please guess a letter",
        name: "answer"
    }
])
.then(function(answer) {


    var userGuess = answer.answer

hangmanWord.letters.forEach(val => {
    

    if (userGuess === val.letter) {
        val.ifshowing = true
        playGame();
    }
    
})
})


}

playGame();



