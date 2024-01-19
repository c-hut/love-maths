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
                //... sends an alert to the user letting them know that they clicked the Submit button (visible at the top of the page)
                alert("You clicked Submit!");
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

})


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
function checkAnswer(){
// Local Scope
}

//Function Scope
function calculateCorrectAnswer() {
// Local Scope
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