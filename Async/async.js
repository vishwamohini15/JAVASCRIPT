let saydate=(str) => {
     console.log(str,"vishwamohini", Date.now());
     
}

const interval=setInterval(saydate, 1000, "helo");

document.querySelector("#start").addEventListener("click", ()=>{
// const interval=setInterval(saydate, 1000, "helo");

     console.log(interval);
     
})

document.querySelector("#stop").addEventListener("click", ()=>{
     // const interval=setInterval(saydate, 1000, "helo");
     
clearInterval(interval)          
     })
