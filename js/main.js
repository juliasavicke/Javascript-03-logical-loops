"use strict";

console.log("main.js");

// logical operators

// && - IR operatorius
console.group("&& - IR operatorius");
console.log("true && true ===", true && true);
console.log("true && false ===", true && false);
console.log("false && true ===", false && true);
console.log("false && false ===", false && false);
console.groupEnd();

// || - ARBA operatorius
console.group("|| - ARBA operatorius");
console.log("true || true ===", true || true);
console.log("true || false ===", true || false);
console.log("false || true ===", false || true);
console.log("false || false ===", false || false);
console.groupEnd();

console.log("!true", !true);
console.log("!false", !false);
console.log("!kazkas", !kazkas);
// !! - bang bang - pavercia i boolean('kazkas')
console.log('!!""', !!"");
