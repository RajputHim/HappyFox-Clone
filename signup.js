userData = JSON.parse(localStorage.getItem("UserData")) || [];
var form = document.querySelector("form");
form.addEventListener("submit", myFunction);

function myFunction(event) {
  event.preventDefault();
  var name = form.name.value;
  var email = form.email.value;
  var password = form.password.value;
  var contact = form.contact.value;
  userObj = {
    name: name,
    email: email,
    contact: contact,
    password: password,
  };
  if (checkExist(userObj.email)) {
    userData.push(userObj);
    console.log(userData)
    localStorage.setItem("UserData", JSON.stringify(userData));
    alert("You are redirecting to Login page")
    setTimeout(function () {
      window.location.replace("signin.html")
    }, 2000);
  } else {
    alert("Account Already Exists");
  }


} //Close bracket of function
function checkExist(Email) {
  var Filtered = userData.filter(function (el) {
    return Email === el.email;
  });
  if (Filtered.length > 0) {
    return false;
  } else {
    return true;
  }
}