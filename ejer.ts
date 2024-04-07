
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
        if(listNum[i]%listNum[i]==0 && listNum[i]%1==0){
            console.log("El numero "+listNum[i]+" es primo");   
        }
    }
}
numPrimos(Number(prompt("Ingrese la cantidad de numeros")));
