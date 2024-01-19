// N.B. I've decided to add comments in order to better understand what each part of the code is doing

//Global Scope

// Wait for the DOM to finish loading before executing the game code
document.addEventListener("DOMContentLoaded", function() {
    // Add event listeners to the button elements and execute code when a user clicks them
    let buttons = document.getElementsByTagName("button");

    // Execute a loop whose values are sourced from an iterable object; in this case, it's an array of buttons
    for (let button of buttons) {
        // Listen for a click, and execute the function once heard
        button.addEventListener("click", function() {
            // If the Submit button is clicked...
            if (this.getAttribute("data-type") === "submit") {
                //... send an alert to the user letting them know that they clicked the Submit button (visible at the top of the page)
                alert("You clicked Submit!");
              // If any of the other buttons are clicked...
            } else {
                //... send an alert to the user letting them know which button they clicked...
                let gameType = this.getAttribute("data-type");
                //... this is how the clicked button will be identified
                alert(`You clicked ${gameType}`);
            }
        })
    }
})


//Function Scope
function runGame() {
// Local Scope
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
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
function displayAdditionQuestion() {
// Local Scope
}

//Function Scope
function displaySubtractionQuestion() {
// Local Scope
}

//Function Scope
function displayMultiplicationQuestion() {
// Local Scope
}