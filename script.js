//F1
/*
let footer = document.getElementsByTagName("footer")[0];
console.log(footer);
let showClick = function(){
  console.log("Je clique!")
};
footer.addEventListener("click",showClick);
*/

//F1-bis
let counter = 0
let footer = document.getElementsByTagName("footer")[0];
// console.log(footer);
let showClick = function(){
  counter += 1
  console.log("Je clique! numéro " + counter)
  
};
footer.addEventListener("click",showClick);

//F2
let navbarHeader = document.getElementById("navbarHeader");
// console.log(navbarHeader);
let burgerMenu = document.querySelectorAll("span.navbar-toggler-icon")[0];
// console.log(burgerMenu);
let dropBurgerMenu = function(){
  navbarHeader.classList.toggle("collapse");
}
burgerMenu.addEventListener("click",dropBurgerMenu);

//F3
let firstCardEditBtn = document.querySelectorAll("button.btn-outline-secondary")[0]
console.log(firstCardEditBtn);
let changeColor = function(){
  // firstCardEditBtn.style.Color = "red"; //ne fonctionne pas
  firstCardEditBtn.setAttribute("style","color:red")

}
firstCardEditBtn.addEventListener("click",changeColor);

//F4