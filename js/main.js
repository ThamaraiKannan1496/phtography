var className = "activeColor";
var scrollTrigger = 60;

// ---------NavBar scroll background color----------
window.onscroll = function () {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("nav")[0].classList.add(className);
  } else {
    document.getElementsByTagName("nav")[0].classList.remove(className);
  }
};

let all = 5;
let alls = 12;
// ----------- Navbar active color-----------
// Get the container element
let btnContainer = document.getElementById("myDIV");

// Get all buttons with class="btn" inside the container
let btns = btnContainer.getElementsByClassName("nav-link");

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("myActive");
    current[0].className = current[0].className.replace(" myActive", "");
    this.className += " myActive";
  });
}
