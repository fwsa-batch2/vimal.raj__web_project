let addmenu =[];

function pageOnLoad(){
    const call = JSON.parse(localStorage.getItem("user_details"))
        if(call !=null){
            customerlist=call  
        }

}

function confirm(){
    event.preventDefault();
    
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirm_password = document.getElementById("pinput1").value;
    let mobileNumber = document.getElementById("mnumber").value;
    
    const coustomer_details ={
        "email" : email,
        "password" : password,
        "confirmPasword" : confirm_password,
        "number" : mobileNumber,
        
        }
    const thisemail = emailvalidation(email);
    if(thisemail){
        alert("email Already exixts");
        return;
    }

        customerlist.push(coustomer_details);
        localStorage. setItem("user_details", JSON.stringify(customerlist));
       
    if(password != confirm_password){
        alert('password incorrect');
       
    }

    else{
       
        window.location.href ="../index.html";  

    }

}

pageOnLoad()
