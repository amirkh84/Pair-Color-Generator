let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let hex1 = document.querySelector(".hex1");
let hex2 = document.querySelector(".hex2");
let generate = document.querySelector(".generate");
let copy1 = document.querySelector(".copy1");
let copy2 = document.querySelector(".copy2");
function color() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    color1.style.backgroundColor = "#" + randomColor;
    const randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    color2.style.backgroundColor = "#" + randomColor2;
    hex1.innerHTML = "#" + randomColor;
    hex2.innerHTML = "#" + randomColor2;
};
color();
generate.addEventListener("click" , color);