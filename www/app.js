import { loadpage } from "./js/loader.js";
import { startDrag, drag, endDrag, unfocus_sheet } from "./js/workout_sheet.js";


window.addEventListener("load", function() {
  loadpage();
});


// workout sheet
const newWorkoutBtn = document.querySelector(".wp-newworkout-button");
const sheet = document.getElementById("workout-sheet");

newWorkoutBtn.addEventListener("click", () => {
  sheet.classList.add("active");
});

sheet.addEventListener("mousedown", startDrag);
sheet.addEventListener("touchstart", startDrag);

window.addEventListener("mousemove", drag);
window.addEventListener("touchmove", drag);

window.addEventListener("mouseup", endDrag);
window.addEventListener("touchend", endDrag);




//for showing pages
window.showPage = function(pageId, buttonId) {
  const pages = document.querySelectorAll(".page");
  const buttons = document.querySelectorAll(".TBbutton")
  unfocus_sheet();
  buttons.forEach(TBbutton => {
    TBbutton.classList.remove("active");
  });

  pages.forEach(page => {
    page.classList.remove("active");
  });
  document.getElementById(buttonId).classList.add("active");
  document.getElementById(pageId).classList.add("active");
};

document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('selectstart', e => e.preventDefault());