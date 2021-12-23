let user_list = [];

function pageOnLoad() {

}

// function addfood(vimal) {

//     let len = vimal.length;



// }

let menulist = localStorage.getItem("user_details");

// addfood(menulist);

function addmenu() {
    let getvalue = JSON.parse(localStorage.getItem("menu_added"));

    let menuname = "";


    for (let i = 0; i < getvalue.length; i++) {
        let foodname = getvalue[i];
        console.log(foodname);
        let menudiv = "<div class='menu'><div class='img'><img src='" + foodname.image + "'height='100%' alt='food name'></div><div class='name_div'><div class='name'><h3>" + foodname.shopname + "</h3><button>Add to cart</button></div></div><div class='dish_name'><div><h3>" + foodname.foodnme + "</h3><h3>$" + foodname.prize + "</h3></div></div></div></div>"

        menuname = menuname + menudiv;
    }

    document.getElementById("menu_div").innerHTML = menuname;



}

addmenu()





