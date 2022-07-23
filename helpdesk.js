// scroll 
let t1 = document.getElementById("first");
t1.addEventListener("click", scrollFirst);
function scrollFirst() {
  document.documentElement.scrollTop = 600;
}
let t2 = document.getElementById("second");
t2.addEventListener("click", scrollSecond);
function scrollSecond() {
  document.documentElement.scrollTop = 1000;
}
let t3 = document.getElementById("third");
t1.addEventListener("click", scrollThird);
function scrollThird() {
  document.documentElement.scrollTop = 1700;
}
let t4 = document.getElementById("fourth");
t4.addEventListener("click", scrollFourth);
function scrollFourth() {
  document.documentElement.scrollTop = 2900;
}
let t5 = document.getElementById("fifth");
t5.addEventListener("click", scrollFifth);
function scrollFifth() {
  document.documentElement.scrollTop = 3800;
}


//first image slide js

let index1 = 0;
i = 0;
let slider1 = document.getElementsByClassName("slider1");
let line1 = document.getElementsByClassName("line1");
auto1();
function show1(n) {
  for (i = 0; i < slider1.length; i++) {
    slider1[i].style.display = "none";
  }
  for (i = 0; i < line1.length; i++) {
    line1[i].className = line1[i].className.replace("active");
  }
  slider1[n - 1].style.display = "block";
  line1[n - 1].className += " active";
}
function auto1() {
  index1++;
  if (index1 > slider1.length) {
    index1 = 1;
  }
  show1(index1);
  setTimeout(auto1, 5000);
}
// second image slide js
let index2 = 0;

let slider2 = document.getElementsByClassName("slider2");
let line2 = document.getElementsByClassName("line2");
auto2();
function show2(n) {
  for (i = 0; i < slider2.length; i++) {
    slider2[i].style.display = "none";
  }
  for (i = 0; i < line2.length; i++) {
    line2[i].className = line2[i].className.replace("active");
  }
  slider2[n - 1].style.display = "block";
  line2[n - 1].className += " active";
}
function auto2() {
  index2++;
  if (index2 > slider2.length) {
    index2 = 1;
  }
  show2(index2);
  setTimeout(auto2, 5000);
}
// third image slide js

let index3 = 0;

let slider3 = document.getElementsByClassName("slider3");
let line3 = document.getElementsByClassName("line3");
auto3();
function show3(n) {
  for (i = 0; i < slider3.length; i++) {
    slider3[i].style.display = "none";
  }
  for (i = 0; i < line3.length; i++) {
    line3[i].className = line3[i].className.replace("active");
  }
  slider3[n - 1].style.display = "block";
  line3[n - 1].className += " active";
}
function auto3() {
  index3++;
  if (index3 > slider3.length) {
    index3 = 1;
  }
  show3(index3);
  setTimeout(auto3, 5000);
}
