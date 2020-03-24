'use strict';
// Párrafos del DOM
let parrafos = document.getElementsByTagName("p");
// Enlaces del DOM
let links = document.getElementsByTagName("a");

let headers = 0;
for(let i = 1; i <= 6; i++){
  let totalheaders = document.getElementsByTagName('h'+ i)
  headers+= totalheaders.length;
}

console.log(`La cantidad de párrafos en la página son: ${parrafos.length}`);
console.log(`La cantidad de enlaces en la página son: ${links.length}`);
console.log(`La cantidad de encabezados de la página son: ${headers}`);