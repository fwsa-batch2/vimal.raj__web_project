let review_list = [];

function pageOnLoad() {
    const call = JSON.parse(localStorage.getItem("review_members"))
    if (call != null) {
        review_list = call;

    }

}

function review(event) {
    event.preventDefault();
    let name = document.getElementById("review_name").value;
    let city = document.getElementById("city").value;
    let Review = document.getElementById("textarea").value;

    const review_details = {
        "name": name,
        "city": city,
        "review": Review,


    }

    review_list.push(review_details);
    localStorage.setItem("review_members", JSON.stringify(review_list));

}

function addmenu() {
    let getvalue = JSON.parse(localStorage.getItem("review_members"));
    let menuname = "";
    let lens = getvalue.length;
    for (let i = 0; i < lens; i++) {
        let Review = getvalue[i];
        let menudiv = `<div id="div1"><br><br><img src="../assets/image/IMG_20211005_182554 (1).jpg" alt="" class="avatar"><label id="lvimal" for="vimal"><strong>${review.name} -</strong></label><label id="lvimal1" for="vimal"><strong>${review.city}</strong></label><br><br><p class="p">${review.review}</p><br><img src="../assets/image/pngfind.com-rating-png-transparent-6687141.png" alt="" class="rating"><img src="../assets/image/430-4304893_png-file-svg-comment-icon-png-transparent-png.png" alt="" id="icons"><label class="comment" for="comment">Comment</label></div><br><br><br></div>`
        menuname = menuname + menudiv;
    }

    document.getElementById("review-div").innerHTML = menuname;
}

addmenu()
pageOnLoad()
