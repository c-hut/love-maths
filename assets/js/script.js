// N.B. I've decided to add comments in order to better understand what each part of the code is doing

//Global Scope

// Waits for the DOM to finish loading before executing the game code
document.addEventListener("DOMContentLoaded", function() {
    // Adds event listeners to the button elements and executes code when a user clicks them
    let buttons = document.getElementsByTagName("button");

    // Executes a loop whose values are sourced from an iterable object; in this case, it's an array of buttons
    for (let button of buttons) {
        // Listens for a click, and executes the function once heard
        button.addEventListener("click", function() {
            // If the Submit button is clicked...
            if (this.getAttribute("data-type") === "submit") {
                //... the check answer function is executed
                checkAnswer();
              // If any of the other buttons are clicked...
            } else {
                // Lets the event listener know that it should run a game when one of the remaining buttons is clicked...
                let gameType = this.getAttribute("data-type");
                //... when the user clicks a button, the code for the corresponding game type will be executed
                runGame(gameType);
            }
        })
    }
    // The runGame function is passed to the event listener and the "addition" variable is passed along with it
    runGame("addition");

});


//Function Scope

/** 
* This is the main game "loop"; it will be called when the script is first loaded
* and after a user's answer has been processed
*/

// Side-note: docstrings (as above) will display upon hover if their accompanying function is called at a later point

function runGame(gameType) {
// Local Scope
    // Creates two random numbers between 1 and 25, respectively
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
    // If the addition button is clicked, two numbers (as per the above two lines of code) will be displayed with a '+' sign in the middle
    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        // If there's an error, the code execution will stop...
        alert(`Unknown game type: ${gameType}`);
        // ... and it will throw an error
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

//Function Scope

/**
 * Checks the answer against the first element [0]
 * located in the returned array which has been 
 * assigned to the 'calculateCorrectAnswer' array
 */
function checkAnswer(){
// Local Scope
    // .value is used to retrieve the user input from the DOM, and parseInt() is used to ensure the value is treated as an integer
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    // The correct answer is retrieved from the 'calculateCorrectAnswer() function
    let calculatedAnswer = calculateCorrectAnswer();
    // The answer input by the user is compared with the correct answer (via strict comparison and string indexing)
    let isCorrect = userAnswer === calculatedAnswer[0];
    // If the answer is correct, this message will be displayed...
    if (isCorrect) {
        alert("Hey! You got it right! :D");
      // ... whereas if the answer is incorrect, this message will be displayed instead
    } else {
        alert(`Awwww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
    }
    // Executes another game based on the second element of the returned array ("addition")
    runGame(calculatedAnswer[1]);
}

//Function Scope

/**
 * Retrieves the operands (the numbers) and the operator (plus, minus, divide or subtract symbol)
 * directly from the DOM; the correct answer is then returned.
 */
function calculateCorrectAnswer() {
// Local Scope
    // parseInt() is used to ensure the retrieved values are treated as integers and not any other data type
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;
    // Checks whether the operator in question is the '+' sign...
    if (operator === "+") {
        //... if so, the correct answer will be calculated and an array containing the correct answer (element 1) and the subsequent game type (element 2)
        
        return [operand1 + operand2, "addition"];
        /**
         * Return syntax breakdown:
         * -> operand1 = randomly generated number
         * -> operand2 = randomly generated number
         * -> game type to be executed next: addition
         */
    } else {
        // If there's an error, the code execution will stop...
        alert(`Unimplemented operator ${operator}`);
        // ... and it will throw an error
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
}

//Function Scope
function incrementScore() {
// Local Scope
}

//Function Scope
function incrementWrongAnswer() {
// Local Scope
}

//Function Scope
function displayAdditionQuestion(operand1, operand2) {
// Local Scope
    // Accesses the HTML IDs which correspond to the two values and the operator betwist them
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}

//Function Scope
function displaySubtractionQuestion() {
// Local Scope
}

//Function Scope
function displayMultiplicationQuestion() {
// Local Scope
}