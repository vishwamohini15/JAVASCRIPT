let btns=document.querySelectorAll(".button");
let container=document.querySelector(".container")

console.log(btns);
btns.forEach((button)=>{
     console.log(button);
     button.addEventListener("click",(e)=>{
          console.log(e.target);
          if (e.target.id ==='grey') {
               container.style.backgroundColor=e.target.id;
          }else if (e.target.id ==='white') {
               container.style.backgroundColor=e.target.id;
               
          }else if (e.target.id ==='blue') {
               container.style.backgroundColor=e.target.id;
          }
          else if (e.target.id ==='yellow') {
               container.style.backgroundColor=e.target.id;
          }
          else if (e.target.id ==='red') {
               container.style.backgroundColor=e.target.id;
          }
     })
     
})

