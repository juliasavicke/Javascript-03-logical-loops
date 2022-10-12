"use strict";
console.log("terenary.js");

/*
Sukurti kintamaji isStudent (boolean), sukurti kintamaji Name, irasom varda. Sukurti town kintamaji, irasyti miesta.

Norim sugeneruoti sakini kintamajame sentence:
<vardas> gyvena <miestas> ir studijuoja / ir dirba
james gyvena London ir studijuoja
*/

let isStudent = false;
let name = "Anna";
let town = "London";
let sentence;

if (isStudent === true) {
  sentence = `${name} gyvena ${town} ir studijuoja`;
} else {
  sentence = `${name} gyvena ${town} ir dirba`;
}

console.log("If: ", sentence);

switch (isStudent) {
  case true:
    sentence = `${name} gyvena ${town} ir studijuoja`;
    break;
  case false:
    sentence = `${name} gyvena ${town} ir dirba`;
}
console.log("Switch: ", sentence);

let veikla = isStudent ? "studijuoja" : "dirba";

sentence = `${name} gyvena ${town} ir ${veikla}`;
console.log("Ternary: ", sentence);
