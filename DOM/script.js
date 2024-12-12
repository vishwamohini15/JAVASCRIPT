// document.getElementById("title");
// document.getElementById("title").setAttribute("class", "test ");
// document.getElementById("title").getAttribute("id")
// document.getElementById("title").className
// document.getElementById("title").class
// document.getElementById("title").id



// title.textContent
// title.innerHTML
// title.style.color="red";



let ul=document.querySelectorAll("bg-black, li");
let h22=document.querySelector("h2");
console.log(h22);
h22.style.color="yellow"


ul[0].style.color="blue"
console.log(ul);

ul.forEach((elm)=>{
     console.log(elm);
     
})

let liclass=document.getElementsByClassName("listitem")
console.log(liclass);
let convertArray=Array.from(liclass)
convertArray.forEach((g)=>{
     g.style.background="green"
     console.log(g);
     
})









