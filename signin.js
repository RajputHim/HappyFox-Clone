userData = JSON.parse(localStorage.getItem("UserData")) || [];
var form = document.querySelector("form");
form.addEventListener("submit", checkData);
function checkData(event) {
  event.preventDefault();
  var Email = form.email.value;
  var password = form.password.value;
  var data = {
    email: Email,
    password: password,
    flag: false,
  };
  if (checkStatus(data.email, data.password) == true) {
    let x=userData.filter((el)=>{
         if(el.email===data.email){
            return el;
         }
    })
    localStorage.setItem("signin", JSON.stringify(x));
    
    alert("Sign in succussfully");
    setTimeout(function () {
      window.location.replace("index.html")
    }, 2000);
  } else {
    alert("Wrong username or password");
  }
}
function checkStatus(Email, password) {
  var filtered = userData.filter(function (el) {
    return Email == el.email && password == el.password;
  });
  if (filtered.length > 0) {
    console.log(filtered);
    return true;
  } else {
    return false;
  }
}