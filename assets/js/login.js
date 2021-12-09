function confirm(){
    let array = JSON.parse(localStorage.getItem("user_details"));
    let mailid = document.getElementById("email").value;
    for(let i=0; i < array.length; i++){
      if(array[i].email !== mailid ){
         alert("Email exists");
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
