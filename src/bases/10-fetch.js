// fetch api key
const apikey = 'gETMUXOTP6NC2by4QE4yOCSLkBj26Oxi';

const httpcall = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apikey }`);

//las promesas es algo que pueden encadenarse, el codigo del json es algo que se debe arreglar
// httpcall.then( resp => {
//     // console.log(resp)
//     resp.json().then( data => {
//         console.log(data)
//     });
// })
// .catch(console.warn);

//promesas en cadena
httpcall
    .then( resp => resp.json())//el resultado de la promesa para al siguiente then
    .then( ({ data }) => { //hacemos la desestructuracion para poder obtener la data
        // console.log(data.images.original.url) //con esto capturo la url que tengo en el console del navegador y lo pego en una nueva ventana
        const { url } = data.images.original;
        const img = document.createElement('img'); //creo el elmento de tipo img
        img.src = url; //creo la imagen en memoria y copio la url que obtengo

        //por ultimo insertamos la imagen en el html
        document.body.append( img );
    })
    .catch(console.warn);