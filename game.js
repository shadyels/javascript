var number = Math.floor(Math.random() * 100) + 1;
var tries = 5;
var won = false;
var i = 0;
var guesses = [];

// for (i = 0; i <= tries; i++) {
//     var userGuess = parseInt(window.prompt("Guess a number"));
//
//     if (userGuess === number) {
//         document.write("You guessed right the number was " + number);
//         break;
//     } else {
//         window.alert("Sorry you're wrong.\n You still have " + (tries - i) + " tries.");
//     }
// }

function isPreviousGuess(guess) {
    for(x = 0; x < guesses.length; x++){
        if(guesses[x] === guess){
            return true;
        }
    }
    return false;
}

function isNan(guess) {
    return isNaN(guess);
}

while (won === false && tries > 0) {
    do {
    var userGuess = parseInt(window.prompt("Guess a number"));
    } while (isNan(userGuess) || isPreviousGuess(userGuess));

    if (userGuess === number) {
        document.write("You guessed right the number was " + number);
        won = true;
    } else {
        tries -= 1;
        guesses[i] = userGuess;
        i++;
        window.alert("Sorry the wrong.\nSo far you have guessed: "+ guesses +"\nYou have "+ tries + " remaining");
    }
}

if(won === false){
    document.write("You ran out of tries<br>Your guesses were "+ guesses + "<br>The right answer was "+number);
}