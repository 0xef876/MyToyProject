// span태그인 rank를 가져온다.
// 클릭하면, ranking 다이얼로그를 띄운다.
// 다이얼로그에서는, 랭킹을 보여준다.

const rank = document.querySelector(".rank");
const close_x = document.querySelector(".close_x");
const rank_content = document.querySelector(".rank_content");
rank.addEventListener("click", () => {
    const ranking = document.querySelector(".rank_popup");
    ranking.style.display = "block";
    rank_db();
});

close_x.addEventListener("click", () => {
    const ranking = document.querySelector(".rank_popup");
    ranking.style.display = "none";
});


function rank_db() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://kittypark.duckdns.org:8443/rank_db");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
    console.log("rank_db");
    xhr.addEventListener("load", function () {
        var result = JSON.parse(xhr.responseText);
        // console.log(result);
        var rank_str = result["_rank"];
        var rank_list = rank_str.split("\n");

        // console.log(rank_list);

        var rank_content = document.querySelector(".rank_content");
        rank_content.innerHTML = "";
        for (var i = 0; i < rank_list.length-1; i++) {
            var rank_item = document.createElement("div");
            rank_item.classList.add("rank_item");
            var rank_name = document.createElement("div");
            rank_name.classList.add("rank_name");
            rank_name.textContent = rank_list[i];
            rank_item.appendChild(rank_name);
            rank_content.appendChild(rank_item);
            if (i == 4){
                break;
            }
        }
    }

    );


}






// Path: swipe_brick/rank.js
