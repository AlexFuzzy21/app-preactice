let startY = 0;
let currentY = 0;
let isDragging = false;

const sheet = document.getElementById("workout-sheet");
const wp_newworkout_button = document.getElementById("wp-newworkout-button");

export function startDrag(e) {
  isDragging = true;
  startY = getY(e);
  sheet.style.transition = "none";
  e.preventDefault()
}

export function drag(e) {
  if (!isDragging) return;

  currentY = getY(e);
  let diff = currentY - startY;

  if (diff > 0) {
    sheet.style.transform = `translateY(${diff}px)`;
  }
}

export function endDrag() {
  if (!isDragging)  return;
  isDragging = false;
  let diff = currentY - startY;
  sheet.style.transition = "transform 0.3s ease";

  if (diff > 150) {
    unfocus_sheet()
  } else {
    sheet.style.transform = `translateY(0dvh)`;
    sheet.style.overflowY = "auto";   // enable
  }
}

export function unfocus_sheet() {
   sheet.style.transform = `translateY(85dvh)`;
    sheet.scrollTo({
      top: 0,
    })
    sheet.style.overflowY = "hidden"; // disable
}

function getY(e) {
  return e.touches ? e.touches[0].clientY : e.clientY;
}