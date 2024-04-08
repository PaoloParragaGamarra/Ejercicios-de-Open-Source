console.log("Ejercicio 1");
var N;
function sumaCuadrados(N) {
    var suma = 0;
    for (var i = 1; i <= N; i++) {
        suma += i * i;
    }
    console.log("La suma de cuadrados es " + suma);
}
sumaCuadrados(3);
console.log("Ejercicio 2");
var N2;
function productoFibonnaci(N2) {
    var a = 0;
    var b = 1;
    var c = 1;
    var producto = 1;
    for (var i = 0; i < N2; i++) {
        producto *= c;
        c = a + b;
        a = b;
        b = c;
    }
    console.log("El producto de los primeros " + N2 + " numeros de la serie de Fibonacci es " + producto);
}
productoFibonnaci(5);
console.log("Ejercicio 3");
var N3;
var vector = [];
function encontrar(N3) {
    for (var i = 0; i < N3; i++) {
        var userInput = prompt("Ingrese un numero");
        vector.push(Number(userInput));
    }
    for (var i = 0; i < N3; i++) {
        //Segundo numero mas grande del arreglo
        if (vector[i] == vector[1]) {
            console.log("El segundo numero mas grande del arreglo es " + vector[i]);
        }
    }
}
var limit = prompt("Ingrese un limite");
encontrar(Number(limit));
console.log("Ejercicio 4");
var N4;
var ciudad = [];
var poblacion = [];
function ciudadPoblacionMayor(N4) {
    for (var i = 0; i < N4; i++) {
        var userInput = prompt("Ingrese el nombre de la ciudad");
        ciudad.push(String(userInput));
        var userInput2 = prompt("Ingrese la poblacion de la ciudad");
        poblacion.push(Number(userInput2));
    }
    var mayor = 0;
    var ciudadMayor = "";
    for (var i = 0; i < N4; i++) {
        if (poblacion[i] > mayor) {
            mayor = poblacion[i];
            ciudadMayor = ciudad[i];
        }
    }
    console.log("La ciudad con mayor poblacion es " + ciudadMayor + " con " + mayor + " habitantes");
}
var limit2 = prompt("Ingrese la cantidad de ciudades");
ciudadPoblacionMayor(Number(limit2));
console.log("Ejercicio 5");
var N5;
var listNum = [];
function numPrimos(N5) {
    for (var i = 0; i < N5; i++) {
        var numeros_1 = prompt("Ingrese un numero");
        listNum.push(Number(numeros_1));
    }
    for (var i = 0; i < N5; i++) {
        var isPrime = true;
        for (var j = 2; j < listNum[i]; j++) {
            if (listNum[i] % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log("El numero " + listNum[i] + " es primo");
        }
    }
}
numPrimos(Number(prompt("Ingrese la cantidad de numeros")));
console.log("Ejercicio 6");
var horaEmpleados = [];
var tarifas = [];
function sueldoTotalEmpleado(N) {
    for (var i = 0; i < N; i++) {
        var horas = prompt("Ingrese las horas trabajadas para el empleado " + (i + 1));
        horaEmpleados.push(Number(horas));
        var tarifa = prompt("Ingrese la tarifa por hora");
        tarifas.push(Number(tarifa));
    }
    var sueldoTotal = 0;
    for (var i = 0; i < N; i++) {
        sueldoTotal = horaEmpleados[i] * tarifas[i];
        console.log("El sueldo total del empleado " + (i + 1) + " es " + sueldoTotal);
    }
}
sueldoTotalEmpleado(Number(prompt("Ingrese la cantidad de empleados")));
console.log("Ejercicio 7");
var numeros = [];
function ordenAscendente(N) {
    for (var i = 0; i < N; i++) {
        var num = prompt("Ingrese un numero");
        numeros.push(Number(num));
    }
    numeros.sort();
    console.log("El arreglo ordenado de forma ascendente es " + numeros);
}
ordenAscendente(Number(prompt("Ingrese la cantidad de edades a ingresar")));
console.log("Ejercicio 8");
var arbolesAltura = [];
function promedioAltura(N) {
    var suma = 0;
    var promedio = 0;
    for (var i = 0; i < N; i++) {
        arbolesAltura.push(Number(prompt("Ingrese la altura del arbol " + (i + 1))));
        suma += arbolesAltura[i];
    }
    promedio = suma / N;
    for (var i = 0; i < N; i++) {
        if (arbolesAltura[i] > promedio) {
            console.log("El arbol " + (i + 1) + " tiene una altura mayor al promedio");
        }
    }
}
promedioAltura(Number(prompt("Ingrese la cantidad de arboles")));
console.log("Ejercicio 9");
var vector2 = [];
function desplazamiento(N) {
    for (var i = 0; i < N; i++) {
        vector2.push(Number(prompt("Ingrese un numero")));
    }
    var aux = vector2[N - 1];
    for (var i = N - 1; i > 0; i--) {
        vector2[i] = vector2[i - 1];
    }
    for (var i = 0; i < N - 1; i++) {
        console.log(vector2[i]);
    }
}
desplazamiento(Number(prompt("Ingrese la cantidad de elementos del vector")));
