window.scroll({
    top: 100,
    left: 100,
    behavior: "smooth",
  });  


const menu = document.getElementById("menu");
const menuIcon = document.querySelector ("nav ul");

menu.addEventListener ("click", function(){
    menuIcon.classList.toggle("list");
})