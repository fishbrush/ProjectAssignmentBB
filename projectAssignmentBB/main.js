document.querySelector("#addbtn").onclick=function(){
   const value = document.querySelector("#add").value
   const list = document.querySelector("#addlist")
   const li = document.createElement("li")
   li.textContent=value
   list.appendChild(li),reset()
}


