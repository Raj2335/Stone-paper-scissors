let uScore=0;
let cScore=0;
let choices=document.querySelectorAll(".choice")
const msg=document.querySelector("#msg");
let uscore =document.querySelector("#uscore");
let cscore =document.querySelector("#cscore");

const genCompChoice=() =>{
   let options=["stone","paper","scissors"];
   const randIndx=Math.floor(Math.random()*3)
   return options[randIndx];

}
choices.forEach((choice) =>
{
   console.log(choices);
   choice.addEventListener("click",()=>{
      const userChoice=choice.getAttribute("id");
      playGame(userChoice);


   })
})

const playGame=(userChoice)=>{
   console.log("user choice=",userChoice)
   const compChoice=genCompChoice();
   console.log("Computer choice=",compChoice);

   if(userChoice===compChoice){
     drawGame();
   }

   else{
      let userWin=0;
      if((userChoice==="stone" && compChoice==="scissors") || (userChoice==="paper" && compChoice==="stone") || (userChoice==="scissors" && compChoice==="paper"))
      {
      userWin=1;
      }

      showWinner(userWin);
   }
}
const drawGame=()=>{
   console.log("Draw game!")
   msg.innerText=("Draw game! Play again!");
   msg.style.backgroundColor=("pink");
}
const showWinner=(userWin)=>{
   if(userWin===1)
   {
      uScore++;
      uscore.innerText= uScore;
      msg.innerText=("You wins!");
      msg.style.backgroundColor=("Yellow");

   }
   else{
      cScore++;
      cscore.innerText=cScore;
      msg.innerText=("You loose!");
      msg.style.backgroundColor=("red");
   }
}