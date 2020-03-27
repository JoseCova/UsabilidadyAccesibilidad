"use strict";

const moneda = document.getElementById("moneda");
const valor = document.getElementById("cantidad");
const parrafo = document.createElement("pre");
let text;

function conversion() {
    if (moneda.value == "eur") {
        text = `
        ${valor.value} euros equivalen a ${(valor.value * 1.09).toFixed(3)} dolares
        ${valor.value} euros equivalen a ${(valor.value * 69.6).toFixed(3)} pesos argentinos
        ${valor.value} euros equivalen a ${(valor.value * 121.0).toFixed(3)} yenes
        `;
        parrafo.textContent = text;
        document.body.appendChild(parrafo);

    } else if (moneda.value == "yen") {
        text = `
        ${valor.value} yenes equivalen a ${(valor.value * 0.0083).toFixed(3)} euros
        ${valor.value} yenes equivalen a ${(valor.value * 0.009).toFixed(3)} dólares
        ${valor.value} yenes equivalen a ${(valor.value * 0.58).toFixed(3)} peso argentino
		`;
        parrafo.textContent = text;
        document.body.appendChild(parrafo);
    } else if (moneda.value == "dollar") {
        text = `
        ${valor.value} dólares equivalen a ${(valor.value * 0.92).toFixed(3)} euros
        ${valor.value} dólares equivalen a ${(valor.value * 111.31).toFixed(3)} yenes
        ${valor.value} dólares equivalen a ${(valor.value * 64.06).toFixed(3)} peso argentino
		`;
        parrafo.textContent = text;
        document.body.appendChild(parrafo);
    } else if (moneda.value == "pesos") {
        text = `
        ${valor.value} pesos argentinos equivalen a ${(valor.value * 0.014).toFixed(3)} euros
        ${valor.value} pesos argentinos equivalen a ${(valor.value * 1.74).toFixed(3)} yenes
        ${valor.value} pesos argentinos equivalen a ${(valor.value * 0.016).toFixed(3)} dólares
		`;
        parrafo.textContent = text;
        document.body.appendChild(parrafo);
    } else {
        text = `
		Introduzca un tipo de moneda que esté soportado...
		eur para Euros
		dollar para US Dollars
		yen para Yenes Japoneses
		pesos para Pesos Argentinos
		`;
        parrafo.textContent = text;
        document.body.appendChild(parrafo);
    }
}