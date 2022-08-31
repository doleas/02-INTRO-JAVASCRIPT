//vamos a trabajar con Arreglos en JS

// const arreglo = Array();

//Esta no es una forma correcta de definir arreglos pero es conveniente solo cuanto se quiere definir posiciones
// const arreglo1 = new Array(100);
// arreglo1.push( 1 ); //se pueden agregar mas posiciones

// console.log( arreglo );
// console.log( arreglo1 );

const arreglo = [1,2,3,4];
// arreglo.push( 1 );
// arreglo.push( 2 );
// arreglo.push( 3 );
// arreglo.push( 4 );
//let arreglo2 = [...arreglo, 5];
let arreglo2 = [...arreglo];
arreglo2.push( 5 ); //tambien se puede utilizar el operador ...spread para asiganar la referencia al arreglo
//esta funcion dentro de un metodo se llama callback, esto recorre el arreglo
const arreglo3 = arreglo2.map(function(num) {
    return num*2;
})

console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo3 );
