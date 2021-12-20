let addmenu =[];

function pageOnLoad(){
    const call = JSON.parse(localStorage.getItem("user_details"))
        if(call !=null){
            addmenu=call  
            
        }

}

function menu(){
    event.preventDefault();
    
    let image_link = document.getElementById("input1").value;
    let shopname = document.getElementById("input2").value;
    let foodname= document.getElementById("input3").value;
    let prize= document.getElementById("input4").value;
    
    
    const coustomer_details ={
        "image" : image_link,
        "shopname" : shopname,
        "foodname" : foodname,
        "prize" : prize,
        
        }
   

        addmenu.push(coustomer_details);
        localStorage. setItem("user_details", JSON.stringify(addmenu));

 
        
}

pageOnLoad()


