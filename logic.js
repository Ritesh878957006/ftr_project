document.addEventListener("DOMContentLoaded", function() {
  let buttons = document.querySelectorAll(".select");
  buttons.forEach(function(button) {
      button.addEventListener("click", function() {
          buttons.forEach(function(btn) {
              btn.classList.remove("active");
          });
          this.classList.add("active");
      });
  });
});


function open_percentage(){
    document.getElementById("percent").style.display="flex";
    document.getElementById("cgpa").style.display="none";
    document.getElementById("sgpa").style.display="none";
}
function open_cgpa(){
    document.getElementById("percent").style.display="none";
    document.getElementById("cgpa").style.display="flex";
    document.getElementById("sgpa").style.display="none";
}
function open_sgpa(){
    document.getElementById("percent").style.display="none";
    document.getElementById("cgpa").style.display="none";
    document.getElementById("sgpa").style.display="flex";
}
var per = document.getElementById("percentage_value");
var cgp = document.getElementById("cgpa_value");
var sgp = document.getElementById("sgpa_value");
  
per.onchange = () => {
    var cgpa = (parseFloat(per.value))/9.5;
    document.getElementById("in_cgpa").innerHTML = cgpa;
    var sgpa = (parseFloat(per.value) + 7.5) / 10;
    document.getElementById("in_sgpa").innerHTML = sgpa;
  }

cgp.onchange = () => {
    var perc = (parseFloat(cgp.value))*9.5;
    document.getElementById("in_percent").innerHTML = perc;
    var sgpax = (parseFloat(perc) + 7.5) / 10;
    document.getElementById("in_sgpa2").innerHTML = sgpax;
  }

sgp.onchange = () => {
    var perce = (parseFloat(sgp.value) * 10) - 7.5;
    console.log(perce);
    document.getElementById("in_percent2").innerHTML = perce;
    var cgpa = (perce)/9.5;
    document.getElementById("in_cgpa2").innerHTML = cgpa;
  }
