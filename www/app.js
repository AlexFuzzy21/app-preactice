import { loadpage } from "./js/loader.js";
import { startDrag, drag, endDrag, unfocus_sheet } from "./js/workout_sheet.js";

const workoutState = {
  active: false,
  exercises: [],
  startTime: null
};

window.addEventListener("load", function() {
  loadpage();
});


// workout sheet
const newWorkoutBtn = document.querySelector(".wp-newworkout-button");
const sheet = document.getElementById("workout-sheet");
const handle = document.querySelector(".sheet-header");


handle.addEventListener("touchstart", startDrag, { passive: false });

newWorkoutBtn.addEventListener("click", () => {
  if (workoutState.active) return;
  sheet.classList.add("active");
  workoutState.active = true;
});

handle.addEventListener("mousedown", startDrag);
handle.addEventListener("touchstart", startDrag);
window.addEventListener("mousemove", drag);
window.addEventListener("touchmove", drag);
window.addEventListener("mouseup", endDrag);
window.addEventListener("touchend", endDrag);


//for showing pages
window.showPage = function(pageId, buttonId) {
  const pages = document.querySelectorAll(".page");
  const buttons = document.querySelectorAll(".TBbutton")
  if (workoutState.active) {
    unfocus_sheet();
  };
  
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