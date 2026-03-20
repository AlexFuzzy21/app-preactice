import { test } from "./js/loader.js";

window.addEventListener("load", function() {
  const loader = document.querySelector(".loader-wrapper");
  if (loader) {
    console.log("Loaded")
    loader.style.transition = "opacity 0.5s ease";
    loader.style.opacity = 0;
    setTimeout(() => loader.style.display = "none", 500);
  }
});


window.showPage = function(pageId) {
  const pages = document.querySelectorAll(".page");
  console.log("A")
  pages.forEach(page => {
    page.classList.remove("active");
  });

  document.getElementById(pageId).classList.add("active");
};