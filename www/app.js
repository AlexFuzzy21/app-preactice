import { loadpage } from "./js/loader.js";


window.addEventListener("load", function() {
  loadpage();
});

window.new_workout = function() {
  console.log("New workout")
};



//for showing pages
window.showPage = function(pageId, buttonId) {
  const pages = document.querySelectorAll(".page");
  const buttons = document.querySelectorAll(".TBbutton")
  buttons.forEach(TBbutton => {
    TBbutton.classList.remove("active");
  });

  pages.forEach(page => {
    page.classList.remove("active");
  });
  document.getElementById(buttonId).classList.add("active");
  document.getElementById(pageId).classList.add("active");
};

//document.addEventListener('contextmenu', e => e.preventDefault());
//document.addEventListener('selectstart', e => e.preventDefault());