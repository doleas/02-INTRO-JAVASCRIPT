console.log('Hola lo que sea !!!');
//var no se debe usar recordar
//Se coloca const cuando los valores no van a cambiar caso contrario let
const nombres = 'David Aníbal';
const apellidos = 'Oleas Bravo';
//solo una vez se inicializan las variables
let valorDado = '6';
valorDado = '4';

console.log(nombres, apellidos, valorDado);
//este es un scope por eso se debe definir nuevamente la variable
if (true){
    let valorDado = '1';
    console.log(valorDado);
}
console.log(valorDado|);