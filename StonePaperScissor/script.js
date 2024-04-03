
    document.addEventListener("DOMContentLoaded", function() {
        // Your existing code here...document.addEventListener("DOMContentLoaded",function(){

    let userScore =0;
    let compScore=0;
    let choices = document.querySelectorAll(".choice");
    const msg= document.querySelector("#msg");
    
    const userScorePara =document.querySelector("#user-score");
    const compScorePara =document.querySelector("#comp-score");
    
    
    const showWinner=(userwin,userChoice,compChoice)=>{
        if(userwin){
            userScore++;
            userScorePara.innerText=userScore;
            console.log(`Congratulations\n You Won!!your choice is ${userChoice} and computer choice is ${compChoice}`);
    msg.innerText=`Congratulations!!\n Your ${userChoice} beats computer's ${compChoice}`;
        }
        else{
            compScore++;
            compScorePara.innerText=compScore;
            console.log("Oops!! You Lost!!");
            msg.innerText=`oops you Lost!!\n computer's ${compChoice} beats your ${userChoice} `;
        }
          
    };
  
    
    const drawGame=()=>{
    console.log("It's a DRAW. Play Again");
    };
    
    const playGame=(userChoice)=>{
    console.log(`Your Choice is ${userChoice}`);
    const compChoice =genCompChoice();
    console.log(`Computer Choice is ${compChoice}`);
    let userwin =true;
    if(compChoice===userChoice){
       drawGame();
       msg.innerText="It's a Draw Play Again!!";
        
    }
    else{
       
        if(userChoice==="rock"){
           userwin= compChoice==="paper" ? false:true;
        }
        else if(userChoice==="paper"){
            userwin=compChoice==="scissor"?false:true
        }
        else{
           userwin= compChoice==="rock"?false:true;
        }
    
        showWinner(userwin,userChoice,compChoice);
    }
    
    
    
    };
    const genCompChoice=()=>{
        const options =["rock","paper","scissor"];
        let randIndex=Math.floor(Math.random()*3);
        return options[randIndex];
    };
    
    choices.forEach((choice)=>{
       choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id")
    // console.log("Choice is clicked !", userChoice);
    playGame(userChoice);
       })
    }); 
    
    });
 
