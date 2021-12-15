function confirm(){
  event.preventDefault();
    let array = JSON.parse(localStorage.getItem("user_details"));
    let mailid = document.getElementById("email").value;
    let passwords = document.getElementById("password").value;
    for(let i=0; i < array.length; i++){
      if(array[i].email !== mailid && array[i].password !== passwords ){
         alert("Email or password");
         break
      }
      else{
        window.open("../index.html");
      }
    }
   }


   function check(){
       const checkbox = document.getElementById("checkbox");
       if(checkbox.checked){
           document.getElementById("password").type ="text";
           

       }
       else
       document.getElementById("password").type = "password";
    }


    // email validation
