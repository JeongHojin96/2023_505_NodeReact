// DOM HTML JS 영역
document.addEventListener("DOMContentLoaded", () => {});

// JQuery Script 영역
$(document).ready(function () {});
$(function () {});
$(() => {
  $("div.home").html("반갑소");
  $("div.bbs").css("color", "blue");

  //   document.querySelector();
  const divs = $("div.main");
  divs.on("click", function (e) {
    const text = this.innerText;
    alert(text);
  });
});
