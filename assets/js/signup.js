let customerlist =[];

function confirm(){
    event.preventDefault();
    console.log("hello")
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirm_password = document.getElementById("pinput1").value;
    let mobileNumber = document.getElementById("mnumber").value;
    
    const coustomer_details ={
        "email" : email,
        "password" : password,
        "confirm pasword" : confirm_password,
        "Mobile Number" : mobileNumber,
        
        }

    
    if(password != confirm_password){
        alert('password incorrect');
        let detail = JSON.stringify(coustomer_details);
        customerlist.push= detail;
        localStorage. setItem("coustomer_details", detail);
       
        
       
    }

    else{
       
        window.location.href ="../index.html";  

    }

}


