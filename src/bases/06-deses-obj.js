//desestructuracion de objetos, clase muy importante
//asignacion desestructurante
const persona = {
    nombre: "Tony",
    edad: 45,
    clave: "Ironman",
    rango: "soldado"
}

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

//la desestructuracion sería ver las propiedades sin poner persona

const {nombre, edad} = persona;//se puede poner en cualquier orden
console.log(nombre);
console.log(edad);

const retornaPersona = ( usuario ) => {
    // console.log( usuario );
    const {nombre, edad, clave} = usuario;
    console.log(edad, nombre, clave);
};
retornaPersona(persona);

//es muy usada la desestructuracion en el argumento
const retornaPersona1 = ( { nombre, edad, rango = "capitán  " } ) => {
    console.log(nombre, edad, rango);
};
retornaPersona1( persona );

//esto es muy importante
const retornaPersona2 = ( { clave, nombre, edad, rango = "capitán " } ) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 15.1416,
            lng: -12.3232
        }
    }
};
const avenger = retornaPersona2( persona );
// const {nombreClave, anios, latlng} = avenger;
// console.log(nombreClave, anios);
// console.log(latlng);

//podemos desestructurar la latitud y longitud de esta forma
const {nombreClave, anios, latlng:{ lat, lng } } = avenger;
console.log(nombreClave, anios);
console.log(lat, lng);