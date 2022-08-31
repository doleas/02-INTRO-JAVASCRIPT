//vamos a trabajar con objetos literales tambien conocidos como diccionarios
//los objetos trabajan con pares de valores
const persona = {
    nombre: 'Tony',
    apellido: 'Perez',
    edad: 42,
    direccion: {
        ciudad: 'Santo Domingo' ,
        codigoPostal: 175254,
        lat: 14.16,
    }
};

// console.table( persona);
console.log( { persona } );

const persona2 = { ...persona };
persona2.nombre = 'Antonio';

console.log( { persona2 } );