data = JSON.parse(localStorage.getItem("signin"))
console.log(data);

document.getElementById("login").innerText=data.email
