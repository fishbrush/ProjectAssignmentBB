function colorPicker(){
   let color=document.querySelector("#color").value
   document.body.style.backgroundColor = color
}

document.querySelector("#text").onkeyup=function(event){
console.log(event.target)
}
