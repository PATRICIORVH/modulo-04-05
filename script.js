// FUNCION 1: Validar Numero
function validar_numero(callback) {
    var dato = prompt("Ingrese un numero:");
    
    if (dato === null) {
        return;
    }
    
    if (!isNaN(dato) && dato !== "") {
        callback("Correcto", "resultado1");
    } else {
        callback("Error: Usted ingreso caracteres incorrectos", "resultado1");
    }
}

// CALLBACK 1
function callback1(mensaje, idDiv) {
    document.getElementById(idDiv).innerHTML = mensaje;
}

// FUNCION 2: Calcular y Avisar Despues
function calcular_y_avisar_despues(numero, callback) {
    var suma = 0;
    
    for (var i = 1; i <= numero; i++) {
        if (i % 2 !== 0) {
            suma = suma + i;
        }
    }
    
    setTimeout(() => {
        callback(suma);
    }, 5000);
}

// CALLBACK 2
function callback2(resultado) {
    var mensaje = "El valor de la sumatoria es " + resultado + ". Este resultado se obtuvo hace 5 segundos";
    document.getElementById("resultado2").innerHTML = mensaje;
}

// FUNCION 3: Calcular y Avisar Dependiendo
function calcular_y_avisar_dependiendo(numero, callback, callbackError) {
    var suma_total = 0;
    
    for (var i = 1; i <= numero; i++) {
        for (var j = 1; j <= i; j++) {
            suma_total = suma_total + j;
        }
    }
    
    if (suma_total < 1000) {
        callback(numero, suma_total);
    } else {
        callbackError(numero, suma_total);
    }
}

// CALLBACK 3 (Exito)
function callback3(numero, resultado) {
    var mensaje = "Las sumatorias sucesivas de " + numero + " es " + resultado;
    document.getElementById("resultado3").innerHTML = mensaje;
}

// CALLBACK 3 (Error)
function callbackError3(numero, resultado) {
    var mensaje = "Error: El numero sobrepasa el objetivo de la funcion. Resultado: " + resultado;
    document.getElementById("resultado3").innerHTML = mensaje;
}
