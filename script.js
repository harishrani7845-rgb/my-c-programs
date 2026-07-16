const search = document.getElementById("search");

search.addEventListener("keyup", function(){

let value = this.value.toLowerCase();

document.querySelectorAll(".card").forEach(card=>{

card.style.display = card.textContent
.toLowerCase()
.includes(value)
? "block"
: "none";

});

});
