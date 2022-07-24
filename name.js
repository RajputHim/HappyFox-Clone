let data = JSON.parse(localStorage.getItem("signin"))||[]

console.log(data[0]);

document.getElementById("login").innerText=`Hi ${data[0].name}`
document.getElementById("login").addEventListener("click",()=>{
    document.getElementById("login").innerText="Sign in"
    alert("For SignOut click Ok")
    setTimeout(()=>{
        window.location.replace("signin.html")
    },2000)
    alert("Redirecting to Login Page")
})


