let customerlist =[];

function pageOnLoad(){
    const call = JSON.parse(localStorage.getItem("user_details"))
        if(call !=null){
            customerlist=call  
        }

}

function confirm(event){
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



function check() {
    let checking = document.getElementById("checkbox");
    if (checking.checked) {
        document.getElementById("password").type = "Text";
        document.getElementById("pinput1").type = "Text";
    }
    else {
        document.getElementById("password").type = "password";
        document.getElementById("pinput1").type = "password";
    }
}

//  email validation

 function emailvalidation(current_email){
     let ismailExists = false;
          let len  = customerlist.length;

     for (let i = 0; i <len; i++){
         const user = customerlist[i];
         const email = user.email;

         if(current_email ==email){
             ismailExists = true;
             break;
         }
     }
     return ismailExists;


 }

