// axios api key

const { default: axios } = require("axios");

const apikey = 'gETMUXOTP6NC2by4QE4yOCSLkBj26Oxi';

axios.get(`http://api.giphy.com/v1/gifs/random?api_key=${apikey}`)
    .then( response => {
        // console.log(response.data.data.images.original)
        const { url } = response.data.data.images.original;
        // console.log(url);
        const imagen = document.createElement('img'); 
        imagen.src = url; 
        document.body.append( imagen );
    })
    .catch(console.warn);


