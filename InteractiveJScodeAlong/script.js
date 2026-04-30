const answers = { 
    q1: "Buddy"
}

let playerScore = 0;

const scoreDisplay = document.querySelector("#current-score");
scoreDisplay.innerHTML = playerScore;

//gets the answers from the form
const quiz = document.querySelector("#quiz-form");

quiz.addEventListener("submit", (e) => {
    e.preventDefault();
    const q1answer = document.querySelector("#q1").value;
    
    //console.log(q1answer);
    //compare them with the correct answers
    if(q1answer === answers.q1 ){
        playerScore++;
        console.log("Yes!! Your score is: " + playerScore);
        scoreDisplay.innerHTML = playerScore;
    }else{
        console.log("actually it's Buddy")
    }
})


