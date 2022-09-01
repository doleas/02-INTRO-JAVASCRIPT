//import, export y funciones comunes de arreglos
// { owneres } estamos desestructurando el objeto ownersn y es una exportacion individual
import  heroes, { owners } from '../data/heroes';


//  import { heroes } from './data/heroes';
//hay varias formas de tener un acceso rápido
// import {heroes} from './data/heroes'

//el find recibe una funcion como argumento, esta es una forma rapida
const getHeroeById = (id) => {
    return heroes.find(heroe => heroe.id === id);
}
console.log(getHeroeById(1));
//el find recibe una funcion como argumento que comunmente se llama callback ( heroe ), recorre cada elemento
//es mejor de esta forma 
const getHeroeById1 = (id) => {
    return heroes.find( ( heroe ) => heroe.id === id );
}
console.log(getHeroeById1(3));

//Se lo puede resumir de la siguiente forma, queda a discrecion de cada desarrollador
export const getHeroeById2 = (id) => heroes.find( ( heroe ) => heroe.id === id ); 
// console.log(getHeroeById2(5));

//Otra prueba
//es esta prueba el find no funciona, utilizar filter - leer la documentacion para ver como implementar
// const  getHeroesByOwner = ( owner ) =>  heroes.find( ( heroe ) => heroe.owner === owner );
export const  getHeroesByOwner = ( owner ) =>  heroes.filter( ( heroe ) => heroe.owner === owner );
console.log( getHeroesByOwner( 'Marvel' )  );


console.log(owners);
 
