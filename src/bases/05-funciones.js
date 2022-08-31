//funciones en js
//no es muy recomendable implementar este tipo de funciones por integridad de datos
// function saludar( nombre ){
//     return `Hola ${ nombre }`;
// }

//forma correcta de implementar una funcion

const saludar = function(nombre){
    return `Hola ${ nombre }`;
}

console.log( saludar("Sofía") )

//funciones de flecha o flecha gorda
const saludar2 = (nombre) => {
     return `Hola Sra ${nombre}`;
};

//una de las ventajas de las funciones de flecha es que se puede puede simplificar cuano se tiene un unico valor de retorno
const saludar3= (nombre) => `Hola ${nombre}`;

//si no tiene parametros se la puede definir de esta forma
const saludar4= () => `Hola Mundo`;

//funcion de flecha que retorna un objeto
const getUser = () => ({
    uid: 1210,
    username: "doleas"     
});

const user = getUser();

console.log(saludar2("Sofía"));

console.log(saludar3("como estás"));

console.log(saludar4());

console.log(user);

//Tarea
function getUsuarioActivo( nombre ){
    return {
        uid: 100,
        username: nombre
    }
};

const usuarioActivo = getUsuarioActivo(' David ');
console.log(usuarioActivo);

//1. Pasar a funncion de flechas
const  getUsuarioActivo1 = ( nombre ) => ({
    uid: 101,
    username: nombre
});
 
const usuarioActivo1 = getUsuarioActivo1(' Oleas ');
console.log(usuarioActivo1);

