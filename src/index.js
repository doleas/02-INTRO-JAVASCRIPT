//import, export y funciones comunes de arreglos

import { heroes } from './data/heroes';

//  import { heroes } from './data/heroes';
//hay varias formas de tener un acceso rápido
// import {heroes} from './data/heroes'

//el find recibe una funcion como argumento que comunmente se llama callback
const getHeroeById = (id) => {
    return heroes.find(heroe => heroe.id === id);
}
console.log(getHeroeById(1));
//el find recibe una funcion como argumento que comunmente se llama callback ( heroe )
const getHeroeById1 = (id) => {
    return heroes.find( ( heroe ) => heroe.id === id );
}
 
console.log(getHeroeById1(2));