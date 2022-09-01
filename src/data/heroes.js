// export default = [{},{}, ...];
//De esta forma también se puede exportar por default pero recordar que en el archivo que importa este archivo debe tener la sentencia
//import  heroes  from './data/heroes'; sin llaves heroes, y ya solo es un nombre que no hace referencia al archivo


//esta es la forma correcta de hacer un export por default
const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

// export const owners = ['Goku', 'Vegeta'];
const owners = ['Goku', 'Vegeta'];
// export default heroes;

//hay muchas personas que prefieren hacer las exportacions en un solo export
export {
    heroes as default,
    owners
}