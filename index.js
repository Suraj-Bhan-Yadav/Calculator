// var toggled = false;

// var bodyTag = document.getElementsByTagName("body")[0];
// var circle = document.getElementById("circle");

// document.getElementById("toggle").onclick = function () {
//   if (!toggled) {
//     bodyTag.classList.add("bck-color-black");
//     circle.style.marginLeft = "20px";

//     toggled = true;
//   } else {
//     bodyTag.classList.remove("bck-color-black");
//     circle.style.marginLeft = "1px";

//     toggled = false;
//   }
// };
var toggled = true;
var contin = document.querySelector(".container");
var toggleTheme = document.querySelector(".toggle1");
var cal = document.querySelector(".calculator");
var circle = document.querySelector("circle");

toggleTheme.onclick = function () {
  contin.classList.toggle("whit");
  cal.classList.toggle("dark");
  toggleTheme.classList.toggle("active");
  toggled = !toggled;
};
