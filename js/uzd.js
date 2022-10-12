"use strict";

console.log("uzd.js");

// let muzikantai = -13;

// if (muzikantai > 0) {
//   if (muzikantai === 1) {
//     console.log("solo");
//   } else if (muzikantai === 2) {
//     console.log("duetas");
//   } else if (muzikantai === 3) {
//     console.log("trio");
//   } else if (muzikantai === 4) {
//     console.log("kvartetas");
//   } else {
//     console.log("didele grupe");
//   }
// } else {
//   console.log("ne grupe");
// }

// let number = 22;

// if (number % 2 === 0) {
//   console.log("Number is even: ", number);
// } else {
//   console.log("Number is odd: ", number);
// }

let vardas = "Julia";
let ilgis = vardas.length;

console.log(ilgis);

let arIlgas = ilgis >= 5 ? "ilgas" : "trumpas";

let sentence = `Vardas ${vardas} yra ${arIlgas}`;

console.log(sentence);

// ================================
let clientAge = 17;
let legalAge = 18;

let canDrive = clientAge >= legalAge ? "yes" : "no";

console.log(canDrive);
//==================================

let phone = "iPhone";
let isIPhoneUser = phone === "iPhone" ? "iPhone user" : "not iPhone user";

console.log(isIPhoneUser);

//=================================

let car = "Mini";
let group = "";

switch (car) {
  case "VW":
  case "Audi":
  case "Bentley":
  case "Bugatti":
  case "Lamborghini":
  case "Porche":
    group = "VW group";
    break;
  case "BMW":
  case "Mini":
  case "Rolls-Royce":
    group = "BMW group";
    break;
  default:
    group = "no group";
}

console.log(group);
