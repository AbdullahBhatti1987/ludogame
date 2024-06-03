// -----------Blue Pieces----------------

var bp1 = document.getElementById("bp1");
var bp2 = document.getElementById("bp2");
var bp3 = document.getElementById("bp3");
var bp4 = document.getElementById("bp4");


// -----------Yellow Pieces--------------

var yp1 = document.getElementById("yp1");
var yp2 = document.getElementById("yp2");
var yp3 = document.getElementById("yp3");
var yp4 = document.getElementById("yp4");


// -----------Green Pieces--------------

var gp1 = document.getElementById("gp1");
var gp2 = document.getElementById("gp2");
var gp3 = document.getElementById("gp3");
var gp4 = document.getElementById("gp4");


// -----------Red Pieces----------------

var rp1 = document.getElementById("rp1");
var rp2 = document.getElementById("rp2");
var rp3 = document.getElementById("rp3");
var rp4 = document.getElementById("rp4");


// ---------------Dies 1------------------

var d11 = document.getElementById("one1");
var d12 = document.getElementById("two1");
var d13 = document.getElementById("three1");
var d14 = document.getElementById("four1");
var d15 = document.getElementById("five1");
var d16 = document.getElementById("six1");


// ------------------Dies 2------------------

var d21 = document.getElementById("one2");
var d22 = document.getElementById("two2");
var d23 = document.getElementById("three2");
var d24 = document.getElementById("four2");
var d25 = document.getElementById("five2");
var d26 = document.getElementById("six2");

var bp = [bp1, bp2, bp3, bp4];
var yp = [yp1, yp2, yp3, yp4];
var gp = [gp1, gp2, gp3, gp4];
var rp = [rp1, rp2, rp3, rp4];

var dies1 = [d11, d12, d13, d14, d15, d16];
var dies2 = [d21, d22, d23, d24, d25, d26];


// ------------Chat GPT--------------------

function generateRandomDiceNumber1() {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}

function reset(){
for (var i = 0; i < 6; i++) {
  dies1[i].style.display = "none";
  dies2[i].style.display = "none";
}}
function turn(){
  var firstDice1 = generateRandomDiceNumber1();
  dies1[firstDice1 - 1].style.display = "flex";
  
  var firstDice2 = generateRandomDiceNumber1();
  dies2[firstDice2 - 1].style.display = "flex";

}

function blueturn() {
  reset();
    turn();
}
function greenturn() {
  reset();
  turn();
}
function redturn() {
  reset();
  turn();
}
function yellowturn() {
  reset();
  turn();
}


// ------------Chat GPT--------------------


// function hide(){
//   for (var i = 0; i < 4; i++) {
//     bp[i].style.display = "none";
//     yp[i].style.display = "none";
//     rp[i].style.display = "none";
//     gp[i].style.display = "none";
//   }}
// function hide(){
//   for (var i = 0; i < 4; i++) {
//     bp[i].style.display = "flex";
//     yp[i].style.display = "flex";
//     rp[i].style.display = "flex";
//     gp[i].style.display = "flex";
//   }}


// function newgame(){
  
//   hide();

// }
