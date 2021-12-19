let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let color3 = document.querySelector(".color3");
let hex1 = document.querySelector(".hex1");
let hex2 = document.querySelector(".hex2");
let hex3 = document.querySelector(".hex3");
let container = document.querySelector(".container");
let body = document.body;
let generate = document.querySelector(".generate");
let darkm = document.querySelector(".darkmode");
function dark() {
    container.classList.toggle("dark")
    body.classList.toggle("darkb")
    hex1.classList.toggle("darkp")
    hex2.classList.toggle("darkp")
    hex3.classList.toggle("darkp")
};
function color() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    color1.style.backgroundColor = "#" + randomColor;
    const randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    color2.style.backgroundColor = "#" + randomColor2;
    const randomColor3 = Math.floor(Math.random()*16777215).toString(16);
    color3.style.backgroundColor = "#" + randomColor3;
    hex1.innerHTML = "#" + randomColor;
    hex2.innerHTML = "#" + randomColor2;
    hex3.innerHTML = "#" + randomColor3;
};
color();
generate.addEventListener("click" , color);
darkm.addEventListener("click" , dark);