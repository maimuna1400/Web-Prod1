function myFunction() {
    var linksDiv = document.getElementById("nav_wrapper");
    if (linksDiv.style.display === "flex") {
        linksDiv.style.display = "none";
    } else {
        linksDiv.style.display = "flex";
    }
}

document.getElementById("js_hover").onmouseover = function() {mouseOver()};
document.getElementById("js_hover").onmouseout = function() {mouseOut()};



function mouseOver(js_hover) {
    js_hover.style.color = "#AF8664";
}

function mouseOut(js_hover) {
    js_hover.style.color = "#222";
}

function change(hw_links) {
    hw_links.style.color = "#4EA699";
}


function toTop() {
  window.scrollTo({
      top:0, 
      behavior:"smooth",
  });
}

function togglePopup(){
    document.getElementById("popup").classList.toggle("active");
}
