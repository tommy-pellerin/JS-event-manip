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
// console.log(firstCardEditBtn);
let textColorRed = function(){
  // firstCardEditBtn.style.Color = "red"; //ne fonctionne pas
  firstCardEditBtn.setAttribute("style","color:red")

}
firstCardEditBtn.addEventListener("click",textColorRed);

//F4
let secondCardEditBtn = document.querySelectorAll("button.btn-outline-secondary")[1]
// console.log(secondCardEditBtn);
let TextColorGreen = function(){
  // secondCardEditBtn.setAttribute("style","") //ceci ne sert à rien, il rentre en conflit avec .style.color
  if (secondCardEditBtn.style.color === "green"){
    secondCardEditBtn.style.color = "";
  } else {
    secondCardEditBtn.style.color = "green";
  }

}
secondCardEditBtn.addEventListener("click",TextColorGreen);

//F5
let cdnLink = document.getElementsByTagName("link")[0];
// console.log(cdnLink);
let header = document.getElementsByTagName("header")[0];
// console.log(header);
let removeLink = function(){
  if (cdnLink.disabled === true) {
    cdnLink.disabled = false;
  } else {
    cdnLink.disabled = true;
  }
}
header.addEventListener("dblclick",removeLink);

//F6
let cards = document.querySelectorAll("div.card");
// console.log(cards);
for (let card of cards) { //nouvelle méthode pour itérer et qui est compatible avec tous les navigateurs
  let img = card.firstElementChild
  // console.log(img);
  let cardBody = card.childNodes[3]
  // console.log(cardBody);
  let p = cardBody.firstElementChild
  // console.log(p);
  let viewBtn = cardBody.childNodes[3].firstElementChild.firstElementChild
  // console.log(viewBtn);
  let reduceCard = function(){
    p.classList.toggle("collapse");
    if (img.style.width === "20%"){
      img.style.width = "";
    } else {
      img.style.width = "20%";
    } 
  }
  viewBtn.addEventListener("mouseover",reduceCard)
};

//F7
let mainRow = document.getElementsByClassName("row")[1];
// console.log(mainRow);
// var card1 = mainRow.children[0];
// var card6 = mainRow.children[5];
// console.log(card6);
let arrowRight = document.querySelectorAll("a.btn-secondary")[0];
// console.log(arrowRight);
let moveCard = function(){
  console.log("je bouge les cartes");
  var card1 = mainRow.children[0];
  var card6 = mainRow.children[5];
  // console.log("la 1ere carte est :" + card1.textContent);
  // console.log("la 6e carte est :" + card6.textContent);
  mainRow.insertBefore(card6,card1);
  
}
arrowRight.addEventListener("click",moveCard);