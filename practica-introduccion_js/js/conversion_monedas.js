"use strict";

const moneda = document.getElementById("moneda").value;
const valor = document.getElementById("cantidad").value;

function conversion() {
    if (moneda === "eur") {
        console.log(valor + " euros = " + (valor * 1.09).toFixed(3) + "dolares");
        console.log(valor + "euros = " + (valor * 69.6).toFixed(3) + "pesos argentinos");
        console.log(valor + " euros = " + (valor * 121.0).toFixed(3) + " yenes");
    } else if (moneda === "yen") {
        console.log(valor + " yenes = " + (valor * 0.0083).toFixed(3) + " euros");
        console.log(valor + " yenes = " + (valor * 0.009).toFixed(3) + "dolares");
        console.log(valor + " yenes = " + (valor * 0.58).toFixed(3) + " pesos argentinos");
    } else if (moneda === "dollar") {
        console.log(valor + " dolares = " + (valor * 0.92).toFixed(3) + " euros");
        console.log(valor + " dolares = " + (valor * 0.92).toFixed(3) + " euros");
        console.log(valor + " dolares = " + (valor * 0.92).toFixed(3) + " euros");
    } else if (moneda === "pesos") {
        console.log(valor + " pesos argentinos = " + (valor * 0.014).toFixed(3) + " euros");
        console.log(valor + " pesos argentinos = " + (valor * 0.016).toFixed(3) + " dolares");
        console.log(valor + " pesos argentinos = " + (valor * 1.74).toFixed(3) + " yenes");
    }
}

/*
var valor = 420

function toEuros() {
    console.log(valor + ' dolares = ' + (valor * 0.92).toFixed(3) + ' euros')
    console.log(valor + ' yenes = ' + (valor * 0.0083).toFixed(3) + ' euros')
    console.log(valor + ' pesos argentinos = ' + (valor * 0.014).toFixed(3) + ' euros')
}

function toDollars() {
    
    console.log(valor + ' yenes = ' + (valor * 0.0090).toFixed(3) + 'dolares')
    console.log(valor + ' pesos argentinos = ' + (valor * 0.016).toFixed(3) + ' dolares')
}

function toPesosArgentinos() {
    console.log('${valor.}  euros = (valor * 69.60).toFixed(3) pesos argentinos')
    console.log(valor + ' yenes = ' + (valor * 0.58).toFixed(3) + ' pesos argentinos')
    console.log(valor + ' dolares = ' + (valor * 0.92).toFixed(3) + ' euros')
}

function toYenes() {
    console.log(valor + ' euros = ' + (valor * 121.00).toFixed(3) + ' yenes')
    console.log(valor + ' pesos argentinos = ' + (valor * 1.74).toFixed(3) + ' yenes')
    console.log(valor + ' dolares = ' + (valor * 0.92).toFixed(3) + ' euros')
}

console.log('Conversión de varias monedas a euros')
toEuros()
console.log('Conversión de varias monedas a dólares estadounidenses')
toDollars()
console.log('Conversión de varias monedas a pesos argentinos')
toPesosArgentinos()
console.log('Conversión de varias monedas a yenes')
toYenes()
*/