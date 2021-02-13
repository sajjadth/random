"use strict"
document.getElementById("submit").value = "Generate";
document.getElementById("number").innerText = randomMain()
function random(min, max) {
    return document.getElementById("number").innerText =
        Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1)) + parseInt(min);
}
function randomMain() {
    const val2 = document.getElementById("val2").value;
    const val1 = document.getElementById("val1").value;
    const num = document.getElementById("number").value;
    return random(val1, val2)
}
const dd = console.log("sajjad")