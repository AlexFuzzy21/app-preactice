import { loadpage } from "./js/loader.js";


window.addEventListener("load", function() {
  loadpage();
});


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

