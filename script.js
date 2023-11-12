// function openCity(evt, cityName) {
//   // Declare all variables
//   var i, tabcontent, tablinks;

//   // Get all elements with class="tabcontent" and hide them
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }

//   // Get all elements with class="tablinks" and remove the class "active"
//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }

//   // Show the current tab, and add an "active" class to the button that opened the tab
//   document.getElementById(cityName).style.display = "block";
//   evt.currentTarget.className += " active";
// }
let loader = document.querySelector(".loader")
window.addEventListener("load", ()=>{
  loader.style.display = "none"
})


let tempHome = document.querySelector(".temp-home")
let timedoorBtn = document.querySelector(".door-btn")
let timedoor = document.querySelector(".timedoor")
let back = document.querySelector(".back-btn")
let directBtn = document.querySelector(".direct-btn")
let clearBtn = document.querySelector(".clear")
let clearing = document.querySelector(".clearing")
let directory = document.querySelector(".directory")

timedoorBtn.addEventListener("click", ()=>{
  tempHome.style.opacity = "0"
  timedoor.style.opacity = "1"
  timedoor.style.zIndex = "1";
})

directBtn.addEventListener("click", ()=>{
  tempHome.style.opacity = "0"
  timedoor.style.opacity = "0"
  timedoor.style.zIndex = "0";
  directory.style.opacity = "1";
})

back.addEventListener("click", ()=>{
  tempHome.style.opacity = "1"
  timedoor.style.opacity = "0"
  directory.style.opacity = "0"
  tempHome.style.zIndex = "1";
  timedoor.style.zIndex = "0";
})

// setTimeout(()=>{
//   clearBtn.addEventListener("click", ()=>{
//     clearing.style.display = "block"
//   })
// }, 1000)

// setTimeout(()=>{
//   if(clearing.style.display = "block"){
//     clearing.style.display = "none";
//   }
// }, 1000)