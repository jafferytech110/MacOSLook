const fontAwesome = document.querySelectorAll(".fab");
if (window.innerWidth < 700) {
  for (i = 1; i < fontAwesome.length; i++) {
    fontAwesome[i].classList.remove("fa-4x");
    fontAwesome[i].classList.add("fa-3x");
  }
};
if (window.innerWidth < 400) {
  for (i = 1; i < fontAwesome.length; i++) {
    fontAwesome[i].classList.remove("fa-4x");
    fontAwesome[i].classList.remove("fa-3x");
    fontAwesome[i].classList.add("fa-2x");
  }
};
