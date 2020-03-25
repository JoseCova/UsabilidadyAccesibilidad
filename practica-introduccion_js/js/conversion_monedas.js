'use strict';

let valor = 420

function toEuros() {
    console.log(valor + ' dolares = ' + (valor * 0.92).toFixed(3) + ' euros')
    console.log(valor + ' yenes = ' + (valor * 0.0083).toFixed(3) + ' euros')
    console.log(valor + ' pesos argentinos = ' + (valor * 0.014).toFixed(3) + ' euros')
}

function toDollars() {
    console.log(valor + ' euros = ' + (valor * 1.09).toFixed(3) + ' dolares')
    console.log(valor + ' yenes = ' + (valor * 0.0090).toFixed(3) + ' dolares')
    console.log(valor + ' pesos argentinos = ' + (valor * 0.016).toFixed(3) + ' dolares')
}

function toPesosArgentinos() {
    console.log(valor + ' euros = ' + (valor * 69.60).toFixed(3) + ' pesos argentinos')
    console.log(valor + ' yenes = ' + (valor * 0.58).toFixed(3) + ' pesos argentinos')
    console.log(valor + ' dolares = ' + (valor * 64.06).toFixed(3) + ' pesos argentinos')
}

function toYenes() {
    console.log(valor + ' euros = ' + (valor * 121.00).toFixed(3) + ' yenes')
    console.log(valor + ' pesos argentinos = ' + (valor * 1.74).toFixed(3) + ' yenes')
    console.log(valor + ' dolares = ' + (valor * 111.31).toFixed(3) + ' yenes')
}

console.log('Conversión de varias monedas a euros')
toEuros()
console.log('Conversión de varias monedas a dólares estadounidenses')
toDollars()
console.log('Conversión de varias monedas a pesos argentinos')
toPesosArgentinos()
console.log('Conversión de varias monedas a yenes')
toYenes()