'use strict';
// Párrafos del DOM
let parrafos = document.getElementsByTagName("p");
// Enlaces del DOM
let links = document.getElementsByTagName("a");

// Acumulador de todos los encabezados
let headers = 0;
// Como sabemos que hay del h1 al h6, recogemos la cantidad de cada uno e incrementamos en el acumulador
for(let i = 1; i <= 6; i++){
  let totalheaders = document.getElementsByTagName('h'+ i)
  headers+= totalheaders.length;
}

console.log(`La cantidad de párrafos en la página son: ${parrafos.length}`);
console.log(`La cantidad de enlaces en la página son: ${links.length}`);
console.log(`La cantidad de encabezados de la página son: ${headers}`);