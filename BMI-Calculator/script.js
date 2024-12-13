let form=document.querySelector("form")

form.addEventListener("submit", (e)=>{
     e.preventDefault();
     let height=parseInt(document.querySelector("#height").value)
     let weight=parseInt(document.querySelector("#weight").value)
     let results=document.querySelector("#results")


     if (height === '' || height < 0 || isNaN(height)) {
          results.innerHTML=`please give a valid height ${height}`
     }else if (weight === '' || weight < 0 || isNaN(weight)) {
          results.innerHTML=`please give a valid height ${weight}`
     }else{
          const bmi= (weight / ((height*height)/10000)).toFixed(2)

          //show the results
          results.innerHTML= `<span>${bmi}</span>`;
          if (bmi <= 18) {
               document.querySelector(".less").style.color="blue"

          }else if (bmi >= 19 && bmi<=25) {
          document.querySelector(".normal").style.color="green"
          }else if (bmi > 25) {
               document.querySelector(".Overweight").style.color="yellow"
               }


     }

    

})












