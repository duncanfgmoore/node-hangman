

function Letter(letter, ifshowing) {
    this.letter = letter;
    this.ifshowing = ifshowing;

    this.underscore = function () {
        
        
        //the if statement is stating if the the letter has been already changed to true then the letter will be showing
        if (this.ifshowing === true) {
            return this.letter;
        //the else statement is stating that if it wasnt pressed then it will show an underscore
        } else {
            return "_";
        }
    };

    

};

module.exports = Letter;