"use strict";
console.log("terenary.js");

/*
Sukurti kintamaji isStudent (boolean), sukurti kintamaji Name, irasom varda. Sukurti town kintamaji, irasyti miesta.

Norim sugeneruoti sakini kintamajame sentence:
<vardas> gyvena <miestas> ir studijuoja / ir dirba
james gyvena London ir studijuoja
*/

let isStudent = true;
let name = "Anna";
let town = "London";
let sentence = `${name} gyvena ${town} ir `;

if (isStudent === true) {
  sentence = `${sentence} studijuoja`;
} else {
  sentence = `${sentence} dirba`;
}

console.log("If: ", sentence);

let sentence1 = `${name} gyvena ${town} ir `;
switch (isStudent) {
  case true:
    sentence1 = `${sentence1} studijuoja`;
    break;
  case false:
    sentence1 = `${sentence1} dirba`;
}
console.log("Switch: ", sentence1);

let veikla = isStudent ? "studijuoja" : "dirba";

let sentence2 = `${name} gyvena ${town} ir ${veikla}`;
console.log("Ternary: ", sentence2);

//sukurti kintamaji isLoggedIn.
let state = "";
let isLoggedIn = false;

state = isLoggedIn ? "in to" : "out of";
let message = `You are currently logged ${state} the System.`;

console.log("Message: ", message);
