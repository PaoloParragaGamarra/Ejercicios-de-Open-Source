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
        console.log("i[" + i + "] ->  " + vector[i]);
    }
}
var limit = prompt("Ingrese un limite");
encontrar(Number(limit));
