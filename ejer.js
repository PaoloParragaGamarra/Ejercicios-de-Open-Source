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
    for (var i = 1; i <= N5; i++) {
        var numeros = prompt("Ingrese un numero");
        listNum.push(Number(numeros));
    }
    for (var i = 1; i <= N5; i++) {
        if (listNum[i] % listNum[i] == 0 && listNum[i] % 1 == 0) {
            console.log("El numero " + listNum[i] + " es primo");
        }
    }
}
numPrimos(Number(prompt("Ingrese la cantidad de numeros")));
