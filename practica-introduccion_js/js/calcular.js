'use strict';

function calcular(){

    var json = { "datos1": [
    {
        dni : 43388811,
        año_nacimiento : 1968,
        ingreso_empresa : 2008,
        plus_productividad : 20,
        plus_antigüedad : 10,
        sueldo_base : 1100
    }],
        "datos2": [
    {
        dni : 78641370,
        año_nacimiento : 1985,
        ingreso_empresa : 2014,
        plus_productividad : 10,
        plus_antigüedad : 10,
        sueldo_base : 1000
    }
    ]};
    
    var edad1 = 0;
    var sueldo1 = 0;
    var antigüedad1 = 0;
    var contador1 = 0;
    
    var edad2 = 0;
    var sueldo2 = 0;
    var antigüedad2 = 0;
    var contador2 = 0;
    
    var year = new Date();

    for(var i = 0; i < json.datos1.length; i++){

        edad1 = year.getFullYear() - json.datos1[i].año_nacimiento;
        antigüedad1 = year.getFullYear() - json.datos1[i].ingreso_empresa;
        contador1 = antigüedad1 / 3;

        sueldo1 = json.datos1[i].sueldo_base + json.datos1[i].sueldo_base * (json.datos1[i].plus_productividad / 100)
                + json.datos1[i].sueldo_base * (json.datos1[i].plus_antigüedad * contador1 / 100);

    }

    for(var i = 0; i < json.datos2.length; i++){

        edad2 = year.getFullYear() - json.datos2[i].año_nacimiento;
        antigüedad2 = year.getFullYear() - json.datos2[i].ingreso_empresa;
        contador2 = antigüedad2 / 3;

        sueldo2 = json.datos2[i].sueldo_base + json.datos2[i].sueldo_base * (json.datos2[i].plus_productividad / 100)
                + json.datos2[i].sueldo_base * (json.datos2[i].plus_antigüedad * contador2 / 100);

    }

    console.log('Edad del usuario 1:' , edad1, 'años');
    console.log('Sueldo del usuario 1:', sueldo1, 'euros');
    console.log('Edad del usuario 2:' , edad2, 'años');
    console.log('Sueldo del usuario 2:', sueldo2, 'euros');    
    
}

calcular()