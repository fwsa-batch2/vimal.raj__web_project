let user_list = [];

let menulist = localStorage.getItem("user_details");
function addmenu() {
    let getvalue = JSON.parse(localStorage.getItem("menu_added"));
    let menuname = "";
    let lens = getvalue.length;
    for (let i = 0; i < lens; i++) {
        let foodname = getvalue[i];
        let menudiv = "<div class='menu'><div class='img'><img class='imageid' src='" + foodname.image + "'height='100%' alt='food name'></div><div class='name_div'><div class='name'><h3 class='shopname'>" + foodname.shopname + "</h3><button class='addcartbtn'>Add to cart</button></div></div><div class='dish_name'><div><h3 class='foodname'>" + foodname.foodname + "</h3><h3 class='price'>$" + foodname.prize + "</h3></div></div></div></div>"

        menuname = menuname + menudiv;
    }

    document.getElementById("menu_div").innerHTML = menuname;
}




addmenu()





