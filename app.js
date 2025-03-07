document.addEventListener("DOMContentLoaded", () => {
    console.log("Website loaded successfully");
});
const header = document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY>400)
});

console.log(header)
