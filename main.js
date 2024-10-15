document.addEventListener("DOMContentLoaded", function () {
  let bigImg = document.querySelector(".big");
  let smallImgs = document.querySelectorAll(".small");

  for (let i = 0; i < smallImgs.length; i++) {
    smallImgs[i].addEventListener("click", changeImg);
  }

  function changeImg(event) {
    let newImg = event.target.src; // 클릭된 이미지의 src를 가져옴
    bigImg.setAttribute("src", newImg); // 큰 이미지 src 변경
  }

  
})