let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genComputerChoice = () =>{
    let options = ["rock" , "paper" , "scissors"]
    // rock, paper, scissors
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    // console.log("Draw Game!!");
    msg.innerText = "Game Draw!! Play again!";
    msg.style.backgroundColor = " rgb(96, 79, 192)";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("you win!!");
        msg.innerText = `You Win!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        // console.log("you lose!!");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose!! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice = " , userChoice);


    // Grenerate computer choice
    const compChoice = genComputerChoice();
    console.log("Computer Choice = ", compChoice);


    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            //comp: scissor, paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach ((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        //console.log("Choice was clicked" , userChoice);
        playGame (userChoice);
    });
});