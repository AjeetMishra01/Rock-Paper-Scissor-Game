let userScore=0;
let compScore=0;
let choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#userScore");
const compScorePara=document.querySelector("#compScore");

const getCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame=()=>{
    msg.innerText="Game was Draw. Play again.";
    msg.style.backgroundColor="#3A86FF";
    console.log("Game Drawn");
}
const showWinnner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        console.log("You win!");
        msg.style.backgroundColor="#E63946"
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText="You lost!"
        console.log("You lose");
        msg.style.backgroundColor="#8AC926";
    }
}

const playGame=(userChoice)=>{
    console.log("User Choice: "+userChoice);
    const compChoice=getCompChoice();
    console.log("Computer choice:"+compChoice);

    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin =compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissor"?false:true;
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinnner(userWin);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
       
        playGame(userChoice);
    })
})