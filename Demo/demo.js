function submit() {
    let obj = {};
    // getting data from form 
    obj.name = document.getElementById("name").value;
    obj.email = document.getElementById("email").value;
    obj.phone = document.getElementById("phone").value;
    obj.company = document.getElementById("company").value;
    obj.CompanySize = document.getElementById("CompanySize").value;
    obj.Industry = document.getElementById("Industry").value;
    obj.AgentCount = document.getElementById("AgentCount").value;
    obj.YourTerritory = document.getElementById("YourTerritory").value;

    // setting data in local storage 
    localStorage.setItem("userdata", JSON.stringify(obj))
    
    // for onboardikng on to diffrent page use 
    //window.location.href = "filename.html";

    console.log(obj)
}

// for checking just inspect and see console all done 