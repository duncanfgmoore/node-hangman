var Letter = require("./Letter.js");
var inquirer = require("inquirer");

var array = ["dog", "cat", "mouse", "bear", "horse", "snail"];
var guessedLetters = [];



function WordSelecter(word) {
    this.word = word;
    this.letters = word.split("").map(val => new Letter(val, false))


}

console.log("=================================")
console.log("Welcome to Animal Kingdom Hangman!")



WordSelecter.prototype.splitFunction = function () {
    //console.log(this.letters);
console.log(lettersLeft);
    //return this.letters.map(val => val.underscore()).join("");
    var wordIsEqualto = this.letters.map(function (val) {
        return val.underscore();
    })
    console.log(wordIsEqualto.join(""));
}


var randomNumber = Math.floor(Math.random() * array.length)
var hangmanWord = new WordSelecter(array[randomNumber]);

var lettersLeft = array[randomNumber].length;



function playGame() {



    hangmanWord.splitFunction();


    inquirer.prompt([
        {
            type: "input",
            message: "Please guess a letter",
            name: "answer"
        }
    ])
        .then(function (answer) {


            var userGuess = answer.answer

            guessedLetters.push(userGuess);

            console.log("=================================");
            console.log("You have guess these letters: " + guessedLetters);


            hangmanWord.letters.forEach(val => {


                if (userGuess === val.letter) {
                    val.ifshowing = true
                    lettersLeft--;
                }
            });

            

            if (lettersLeft === 0) {
                console.log("You Win!")
            

            } else {
                playGame();
            }

        });


};


playGame();




