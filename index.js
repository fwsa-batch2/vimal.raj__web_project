let user_list = [];

function pageOnLoad() {
}
let menulist = localStorage.getItem("user_details");
function addmenu() {
    let getvalue = JSON.parse(localStorage.getItem("menu_added"));
    let menuname = "";
    for (let i = 0; i < getvalue.length; i++) {
        let foodname = getvalue[i];
        console.log(foodname);
        let menudiv = "<div class='menu'><div class='img'><img class='imageid' src='" + foodname.image + "'height='100%' alt='food name'></div><div class='name_div'><div class='name'><h3 class='shopname'>" + foodname.shopname + "</h3><button class='addcartbtn'>Add to cart</button></div></div><div class='dish_name'><div><h3 class='foodname'>" + foodname.foodnme + "</h3><h3 class='price'>$" + foodname.prize + "</h3></div></div></div></div>"

        menuname = menuname + menudiv;
    }

    document.getElementById("menu_div").innerHTML = menuname;
}

// function cart(){
//     event.preventDefault();
    
//     let image_link = document.getElementById("imageid").src;
//     let shopname = document.getElementById("shopname").innerText;
//     let foodname= document.getElementById("foodname").innerText;
//     let prize= document.getElementById("price").innerText;
    
    

 
        
// } 


addmenu()





