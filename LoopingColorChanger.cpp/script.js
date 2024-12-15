//generate random color

const randomcolor=()=>{
     let hex="0123456789ABCDEF"
     let color= '#'
     
     for (let i = 0; i <6; i++) {
          color += hex[Math.floor(Math.random() * 16)]
     }
     return color;
}

// console.log(randomcolor());
let interval;
const startchangingColor=()=>{
     if (!interval) {
interval= setInterval(changebgcolor, 1000)
          
     }
     function changebgcolor(){
          document.body.style.backgroundColor=randomcolor()
          // console.log(randomcolor());

     }
    
}

const stopchamgingColor=()=>{
clearInterval(interval)
interval=null
}

document.querySelector("#start").addEventListener("click", startchangingColor)

document.querySelector("#stop").addEventListener("click", stopchamgingColor)
