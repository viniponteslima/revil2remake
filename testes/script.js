function changePage(next) {
  var current = document.querySelector(".page.visible");
  current.classList.remove("visible");
  
  var nextPage = document.getElementById(next);
  nextPage.classList.add("visible");
}
