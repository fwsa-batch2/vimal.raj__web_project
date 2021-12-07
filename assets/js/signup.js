function confirm(){
    event.preventDefault();
    
    let password= document.getElementById('pinput').value;
    let confirm_password= document.getElementById('pinput1').value;

    if(password != confirm_password){
        alert('password incorrect');
       


    }

    else{
        window.location.href ="./index.html";
        

    }
}