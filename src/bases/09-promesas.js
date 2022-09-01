// import { getHeroeById2 } from './bases/08-imp-exp';

import { getHeroeById2 } from "./bases/08-imp-exp";

//promesas

//resolve cuando la promesa es exitosa con el valor del resultado, reject cuando la promesa falla
// const promesa = new Promise( ( resolve, reject ) => {
//     //utilizamos el snnipet el cubo son objetos propios de javascript o react o del lenguaje que estemos utilizando
//     //setTimeout es una funcion que permite ejecutar una tarea en cierto tiempo y recibe un callback
//     // const timeout = 2000;
//     setTimeout(() => {
//         //tarea
//         //importen el imp-exp
//         const var1 = getHeroeById2(2)
//         // console.log(var1);
//         //los parametros del resolve por consecuencia evia al then
//         // resolve( var1 );//cuando esta tarea termine llamas al resolve, este va a notificar a cualquier persona que este escuchando el then
//         reject( " No se pudo encontrar el héroe" );
//     }, 2000);

// });

// //imaginemos que nosotros vamos hacer algo cuando la promesa se cumpla o la promesa termine
// //then es el más importante e indica que la promesa se hizo correctamente; exception es el catch
// promesa.then( ( heroe ) => {
//     console.log('heroe', heroe);
// })
// .catch( err => console.warn( err ));

const getHeroeByIdAsync = (id) => {
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            const var1 = getHeroeById2(id)
            // resolve(var1);
            // console.log(var1);
            if (var1){
                resolve(var1);
            } else {
                reject(" esto es una falla ");
            }
        }, 3000);

    });
    return promesa;
}

//cuando mandamos directo el console.log o warn toma la primera ocurrencia
getHeroeByIdAsync(5)
    // .then( heroe => console.log(heroe));
    .then( console.log)    //forma resumida tips
    .catch( console.warn);

//tarea
