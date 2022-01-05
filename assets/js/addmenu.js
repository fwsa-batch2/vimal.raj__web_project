let addmenu =[];

function pageOnLoad(){
    const call = JSON.parse(localStorage.getItem("menu_added"))
        if(call !=null){
            addmenu=call ; 
            
        }

}
function menu(event){
    event.preventDefault();
    
    let image_link = document.getElementById("input1").value;
    let shopname = document.getElementById("input2").value;
    let foodname= document.getElementById("input3").value;
    let prize= document.getElementById("input4").value;
    
    
    let menu_details ={
        "image" : image_link,
        "shopname" : shopname,
        "foodname" : foodname,
        "prize" : prize,
        
        }
        addmenu.push(menu_details);
        
        localStorage.setItem("menu_added", JSON.stringify(addmenu));
     
} 

pageOnLoad()




