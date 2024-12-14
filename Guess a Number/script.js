let randomnum=parseInt(Math.random() * 100+1);

const submit=document.querySelector("#subt")
const userinput=document.querySelector("#guessfield")
const guessSlot=document.querySelector(".guessing")
const remaning=document.querySelector(".lastresult")
const loworhy=document.querySelector(".loworHi")
const startover=document.querySelector(".resultparas")

const p=document.createElement('p');

let prevguess=[]
let numguess=1

let playgame=true;

if (playgame) {
     submit.addEventListener("click", (e)=>{
          e.preventDefault();
          const guess=parseInt(userinput.value)
          // console.log(guess);
          
          validateguess(guess)
     })
     
}

function validateguess(guess){
if (isNaN(guess)) {
     alert("please type a valid number")
}else if (guess<1) {
     alert("please type numer more than 1!")
     
}else if (guess>100) {
     alert("please enter number less than 100!")
}else{
     prevguess.push(guess)
     if (numguess === 11) {
          displayguess(guess)
          displaymessage(`game over. random number was ${randomnum}`)
          endgame()
     }else{
          displayguess(guess)
          checkguess(guess)
     }
}
}

function checkguess(guess){
if (guess===randomnum) {
     displaymessage('you guessed it right')
     endgame();
}else if (guess< randomnum) {
     displaymessage(`number is too low `)
}else if (guess> randomnum) {
     displaymessage(`number is too high `)
}
}

function displayguess(guess){
userinput.value=''
guessSlot.innerHTML +=`${guess}   `
numguess++
remaning.innerHTML=`${11-numguess}`

}

function displaymessage(message){
loworhy.innerHTML=`<h2>${message}</h2>`
}

function endgame(){
userinput.value=''
userinput.setAttribute('disabled', '')
p.classList.add('button')
p.innerHTML=`<h2 id="newgame">Start a new game</h2>`
startover.appendChild(p)
playgame=false;
newgame();
}

function newgame(){
let newgamebutton=document.querySelector("#newgame")
newgamebutton.addEventListener("click", (e)=>{
     let randomnum=parseInt(Math.random() * 100+1);
prevguess=[]
numguess=1;
guessSlot.innerHTML=''
remaning.innerHTML=`${11-numguess}`
userinput.removeAttribute('disabled')
startover.removeChild(p)
playgame=true
})
}












