let data = JSON.parse(localStorage.getItem("signin"))||[]

console.log(data[0]);

document.getElementById("login").innerText=`Hi ${data[0].name}`
document.getElementById("login").style.fontWeight="bold"
document.getElementById("login").addEventListener("click",()=>{
    document.getElementById("login").innerText="Sign in"
    let txt;
    if(confirm("You want to sign out ?")){
        txt="Ok";
            window.location.replace("signin.html")
    }else{
        txt="Cancel"
        document.getElementById("login").innerText=`Hi ${data[0].name}`
    }

    
})


