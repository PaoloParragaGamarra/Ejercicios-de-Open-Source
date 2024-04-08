
console.log("Ejercicio 1");
var N:number;
function sumaCuadrados(N:number){
    let suma=0;
    for(let i=1;i<=N;i++){
        suma+=i*i;
    }
    console.log("La suma de cuadrados es "+suma);
}
sumaCuadrados(3);


console.log("Ejercicio 2");
var N2:number;
function productoFibonnaci(N2:number){
    let a=0;
    let b=1;
    let c=1;
    let producto=1;
    for(let i=0;i<N2;i++){
        producto*=c;
        c=a+b;
        a=b;
        b=c;
    }
    console.log("El producto de los primeros "+N2+" numeros de la serie de Fibonacci es "+producto);
}
productoFibonnaci(5);



console.log("Ejercicio 3");
var N3:number;
let vector:number[]=[];

function encontrar(N3:number){

    for(let i=0;i<N3;i++){
        let userInput:string | null = prompt("Ingrese un numero");
        vector.push(Number(userInput));
    }
    for(let i=0;i<N3;i++){
        //Segundo numero mas grande del arreglo
          if(vector[i]==vector[1]){
            console.log("El segundo numero mas grande del arreglo es "+vector[i]);
          }   
    }
}
var limit:string | null = prompt("Ingrese un limite");
encontrar(Number(limit));

console.log("Ejercicio 4");
var N4:number;
let ciudad:string[]=[];
let poblacion:number[]=[];
function ciudadPoblacionMayor(N4:number){

    for(let i=0;i<N4;i++){
        let userInput:string | null = prompt("Ingrese el nombre de la ciudad");
        ciudad.push(String(userInput));
        let userInput2:string | null = prompt("Ingrese la poblacion de la ciudad");
        poblacion.push(Number(userInput2));
    }
    let mayor:number=0;
    let ciudadMayor:string="";
    for(let i=0;i<N4;i++){
        if(poblacion[i]>mayor){
            mayor=poblacion[i];
            ciudadMayor=ciudad[i];
        }
    }
    console.log("La ciudad con mayor poblacion es "+ciudadMayor+" con "+mayor+" habitantes");
}
var limit2:string | null = prompt("Ingrese la cantidad de ciudades");
ciudadPoblacionMayor(Number(limit2));

console.log("Ejercicio 5");
var N5:number;
let listNum:number[]=[];
function numPrimos(N5:number){
    for(let i=0;i<N5;i++){
        let numeros: string | null = prompt("Ingrese un numero");
        listNum.push(Number(numeros));
    }
    for(let i=0;i<N5;i++){
        let isPrime = true;
        for (let j = 2; j < listNum[i]; j++) {
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
let horaEmpleados:number[]=[];
let tarifas:number[]=[];
function sueldoTotalEmpleado(N:number){
    for(let i=0;i<N;i++){
        let horas: string | null = 
        prompt("Ingrese las horas trabajadas para el empleado "+(i+1));
         horaEmpleados.push(Number(horas));
        let tarifa: string | null = prompt("Ingrese la tarifa por hora");
        tarifas.push(Number(tarifa));
    }
    let sueldoTotal:number=0;
    for(let i=0;i<N;i++){
        sueldoTotal = horaEmpleados[i]*tarifas[i];
        console.log("El sueldo total del empleado "+(i+1)+" es "+sueldoTotal);
    }
}
sueldoTotalEmpleado(Number(prompt("Ingrese la cantidad de empleados")));
console.log("Ejercicio 7");
let numeros:number[]=[];
function ordenAscendente(N:number){
    for(let i=0;i<N;i++){
        let num: string | null = prompt("Ingrese un numero");
        numeros.push(Number(num));
    }
    numeros.sort();
    console.log("El arreglo ordenado de forma ascendente es "+numeros);
}

ordenAscendente(Number(prompt("Ingrese la cantidad de edades a ingresar")));


console.log("Ejercicio 8");
let arbolesAltura:number[]=[];
function promedioAltura(N:number){
    var suma:number=0;
    var promedio:number=0;
    for(let i=0;i<N;i++){
        arbolesAltura.push(Number(prompt("Ingrese la altura del arbol "+(i+1))));
        suma+=arbolesAltura[i];
    }
    promedio=suma/N;
    for(let i=0;i<N;i++){
        if(arbolesAltura[i]>promedio){
            console.log("El arbol "+(i+1)+" tiene una altura mayor al promedio");
        }
    }
}

promedioAltura(Number(prompt("Ingrese la cantidad de arboles")));

console.log("Ejercicio 9");
let vector2:number[]=[];
function desplazamiento(N:number){
    for(let i=0;i<N;i++){
        vector2.push(Number(prompt("Ingrese un numero")));
    }
    let aux:number=vector2[N-1];
    for(let i=N-1;i>0;i--){
        vector2[i]=vector2[i-1];
    }
    for(let i=0;i<N-1;i++){
        console.log(vector2[i]);
    }
} 
desplazamiento(Number(prompt("Ingrese la cantidad de elementos del vector")));

