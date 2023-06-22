// span태그인 rank를 가져온다.
// 클릭하면, ranking 다이얼로그를 띄운다.
// 다이얼로그에서는, 랭킹을 보여준다.

const rank = document.querySelector(".rank");
const close_x = document.querySelector(".close_x");
const rank_content = document.querySelector(".rank_content");
rank.addEventListener("click", () => {
    const ranking = document.querySelector(".rank_popup");
    ranking.style.display = "block";
});

close_x.addEventListener("click", () => {
    const ranking = document.querySelector(".rank_popup");
    ranking.style.display = "none";
});









// Path: swipe_brick/rank.js
