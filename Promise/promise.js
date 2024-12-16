const promiseone=new Promise(function (resolve,reject){
     //do an async task...
     //db calls cryptography, network
     setTimeout(function(){
          console.log("async task is complete");
          resolve()
     }, 1000);
})

promiseone.then(function(){
     console.log("promise consumrd");
     
})

new Promise(function(resolve,reject){
     setTimeout(() => {
          console.log("async task 2");
          resolve;
     }, 1000);
}).then(function(){
     console.log("async 2 resolved");
     
})

const promisethree=new Promise(function(resolve,reject){
     setTimeout(() => {
          resolve({username: "vishwamohini", email: "vishwamohini@gmail.com"})
     }, 1000);
})

promisethree.then(function(user){
console.log(user);

})


const promisefour=new Promise(function (reject, resolve){
     setTimeout(() => {
          let error=true;
          if (!error) {
               resolve({username: "mohini", passward: "456gfr"})
          }else{
               reject("error hai data mr")
          }
     }, 1000);
})

promisefour.then((user)=>{
console.log(user);
return user.username

}).then((username)=>{
console.log(username);

}).catch(function(error){
     console.log(error);
     
}).finally(()=>{
     console.log("the promise is resolve or reject");
     
})


const promisefive=new Promise(function(resolve,reject){
     setTimeout(() => {
          let error=true;
          if (!error) {
               resolve({username: "javascript", passward: "ty7532"})
          }else{
               reject("error JS me hai")
          }
     }, 1000);
})
async function consumePromisefive(){
try {
     const respone= await promisefive   
     console.log(respone);         
} catch (error) {
     console.log(error);
     
}
 
}
consumePromisefive()


// async function getallusers(){
//   try {
//      const respone= await fetch("https://dummyjson.com/users")
//      const data=await respone.json()
//      console.log(data);

//   } catch (error) {
//      console.log("error in fetching", error);
     
//   }
// }

// getallusers()


fetch ("https://dummyjson.com/users")
.then((respone)=>{
return respone.json()
}).then((data)=>{
     console.log(data);
     
})
.catch((error)=>console.log(error));
