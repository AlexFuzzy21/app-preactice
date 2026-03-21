 
export function loadpage() {
    const loader = document.querySelector(".loader-wrapper");
    if (loader) {
        console.log("Loaded ")
        loader.style.transition = "opacity 0.5s ease";
        loader.style.opacity = 0;
        setTimeout(() => loader.style.display = "none", 500);
  }
}
 
 
  