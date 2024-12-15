// setTimeout(()=>{
//      console.log("mohini");
     
// },2000)

// setInterval(()=>{
//      console.log("muskan");
     
// },2000)


const sayvishwa=()=>{
     console.log("vishwa");
     
}
const changetext=()=>{
     console.log("vishwa");
document.querySelector("h1").innerHTML="im best"
     
}
const changeme=setTimeout(changetext,2000)



document.querySelector("#stop").addEventListener("click", ()=>{
     console.log("stoped");
clearTimeout(changeme)

     
})

