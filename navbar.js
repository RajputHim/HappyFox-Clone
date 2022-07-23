let ram1=document.querySelector(".cs1")
document.querySelector(".ram1").style.visibility="hidden";
let count=0;
ram1.addEventListener("click",()=>{
 
  count++;
  if(count%2===1){
    document.querySelector(".ram1").style.visibility="visible";
    document.querySelector(".ram2").style.visibility="hidden";
    document.querySelector(".ram3").style.visibility="hidden";
  }else{
    document.querySelector(".ram1").style.visibility="hidden";
  }
})

let ram2=document.querySelector(".cs2")
document.querySelector(".ram2").style.visibility="hidden";
let c2=0;
ram2.addEventListener("click",()=>{
  c2++;
  if(c2%2===1){
    document.querySelector(".ram2").style.visibility="visible";
    document.querySelector(".ram1").style.visibility="hidden";
    document.querySelector(".ram3").style.visibility="hidden";
  }else{
    document.querySelector(".ram2").style.visibility="hidden";
  }
})

let ram3=document.querySelector(".cs3")
document.querySelector(".ram3").style.visibility="hidden";
let c3=0;
ram3.addEventListener("click",()=>{
 
  c3++;
  if(c3%2===1){
    document.querySelector(".ram3").style.visibility="visible";
    document.querySelector(".ram2").style.visibility="hidden";
    document.querySelector(".ram1").style.visibility="hidden";
  }else{
    document.querySelector(".ram3").style.visibility="hidden";
  }
})