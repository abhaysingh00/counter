let countVar =document.getElementById("count-increase");
let count =0;
function increment(){
    count = count +1 ;
    countVar.innerText=count;   
}
let saveEl=document.getElementById("save-el");

function save()
{
    let countStr=count+ "-" 
    saveEl.textContent+=countStr;
   count =0;
   countVar.textContent=0;
}