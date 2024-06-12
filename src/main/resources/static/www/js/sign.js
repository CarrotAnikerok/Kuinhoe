"use strict";

let regP = document.querySelector("#registration_p");
let regForm = document.querySelector("#registration");
let inP = document.querySelector("#signin_p");
let inForm = document.querySelector("#signin");
var inTrue = false;
var regTrue = false;

regP.onclick = function () {
    if (regTrue) {
        regP.style.color = "#BBCFFF";
        regForm.style.display = "none"
        regTrue = false;
    }
    else {
        regP.style.color = "yellow";
        regForm.style.display = "block"
        inP.style.color = "#BBCFFF";
        inForm.style.display = "none"
        inTrue = false;
        regTrue = true;
    }
}

inP.onclick = function () {
    if (inTrue) {
        inP.style.color = "#BBCFFF";
        inForm.style.display = "none"
        inTrue = false;
    }
    else {
        inP.style.color = "yellow";
        inForm.style.display = "block"
        regP.style.color = "#BBCFFF";
        regForm.style.display = "none"
        regTrue = false;
        inTrue = true;
    }
}
/*
sideMenu.onmouseover = function(event) {

    sideMenu.animate(newspaper, newspaperTiming);
    //sideMenu.style.left = "0px";
}

sideMenu.onmouseout = function(event) {
    sideMenu.animate(newspaperSpinning, newspaperTiming);
    //sideMenu.style.left = "-292px";
}
*/

