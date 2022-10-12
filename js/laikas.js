"use strict";
console.log("laikas.js");

/*
6 - 12 = rytas
13 - 18 = diena
19 - 23 = vakaras
24 - 5 = naktis
*/

// let laikas = 24;

// if (laikas >= 6 && laikas <= 12) {
//   console.log("Labas rytas!");
// } else if (laikas >= 13 && laikas <= 18) {
//   console.log("Laba diena!");
// } else if (laikas >= 19 && laikas <= 23) {
//   console.log("Labas vakaras!");
// } else if (laikas === 24 || (laikas <= 5 && laikas > 0)) {
//   console.log("Labanaktis!");
// } else {
//   console.log("Blogai nurodytas laikas!");
// }

function rand(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// const num1to5 = rand(1, 5);

// if (num1to5 === 1) {
//   console.log("Pirmadienis");
// } else if (num1to5 === 2) {
//   console.log("Antradienis");
// } else if (num1to5 === 3) {
//   console.log("Treciadienis");
// } else if (num1to5 === 4) {
//   console.log("Ketvirtadienis");
// } else if (num1to5 === 5) {
//   console.log("Penktadienis");
// } else {
//   console.log("Blogai ivestas skaicius");
// }

// let num1 = 5;
// if (num1 < 0 || num1 > 7) {
//   console.log("Skaicius netinkamas");
// } else {
//   console.log("Skaicius tinkamas");
// }

const day = rand(1, 7);

switch (day) {
  case 1:
    console.log("Pirmadienis");
    break;
  case 2:
    console.log("Antradienis");
    break;
  case 3:
    console.log("Treciadienis");
    break;
  case 4:
    console.log("KEtvirtadienis");
    break;
  case 5:
    console.log("Penktadienis");
    break;
  case 6:
  case 7:
    console.log("Savaitgalis", day);
    break;
  default:
    console.log("kazkas negerai", day);
}
