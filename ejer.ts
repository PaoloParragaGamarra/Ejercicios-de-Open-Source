
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
        console.log("i["+i+"] ->  "+vector[i]);
    }
}
var limit:string | null = prompt("Ingrese un limite");
encontrar(Number(limit));