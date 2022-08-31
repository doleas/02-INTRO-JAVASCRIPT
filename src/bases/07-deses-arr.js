//desestructuracion de arreglos
const personajes = ['Goku', 'Vegeta', 'Trunks'];
console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

//desestructuramos, con f2 o fn+f2 cambia la variable en todo el archivo
const [ , ,p3 ] = personajes;
console.log( p3 );

//vamos a crearnos una funcion
const retornaArreglo = () => {
    return [ 'ABC', 123 ];
}

const arr = retornaArreglo();
console.log(arr);

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//tarea
//1. se llamara nombre
//2. se llamara setNombre
const useState = ( valor ) => {
    return [valor, () => { console.log(' Hola Mundo ') }];
}

const [nombre, setNombre] = useState( ' Goku ');
console.log(nombre);
setNombre();
 