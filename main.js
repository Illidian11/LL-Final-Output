/* System Controls */
let ad = document.getElementById("LogAd");
let b = document.querySelector("body");




window.onload = function(){
  setTimeout(function(){
    ad.style.display = "block";
  }, 10000);
}

function myClose() {
  ad.style.display = "none";
}
function myOk() {
  ad.style.display = "none";
  alert('Invalid Source');
}

/* Design Controls */

let h1 = document.querySelector("#myH1");

window.onload = function(){
  setTimeout(function(){h1.innerText = "Family";}, 1500);
  setTimeout(function(){h1.innerText = "Friends";}, 2500);
  setTimeout(function(){h1.innerText = "Community";}, 3500);
  setTimeout(function(){h1.innerText = "Life";}, 4500);
  setTimeout(function(){h1.innerText = "Growth";}, 5500);
  setTimeout(function(){h1.innerText = "Success";}, 6500);
  setTimeout(function(){h1.innerText = "and Future";}, 7500);
  setTimeout(function(){h1.innerText = "Chorreffic Entertainment";}, 8500);
}