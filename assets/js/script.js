//Global Scope

// Wait for the DOM to finish loading before executing the game code
document.addEventListener("DOMContentLoaded", function() {
    // Add event listeners to the button elements and execute code when a user clicks them
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }
})


//Function Scope
function runGame() {
// Local Scope
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