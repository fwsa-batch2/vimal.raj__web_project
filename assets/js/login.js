function confirm(event) {
  event.preventDefault();
  let array = JSON.parse(localStorage.getItem("user_details"));
  let mailid = document.getElementById("email").value;
  let confirm_password = document.getElementById("password").value;

  console.table(array);
  console.log(array.length);
  let len = array.length;
  console.log(len);


  for (let i = 0; i < len; i++) {
    console.log(array[i]);
    console.log(array[i].email)
    if (array[i].email == mailid && array[i].password == confirm_password) {
      window.location.href = "../index.html";

      break;

      
    }

    if (array[i].email != mailid && array[i].password != confirm_password) {
      alert("Email or password");

      break;
      
      

    }
      
  }
}


function check() {
  const checkbox = document.getElementById("checkbox");
  if (checkbox.checked) {
    document.getElementById("password").type = "text";


  }
  else
    document.getElementById("password").type = "password";
}


    // email validation
