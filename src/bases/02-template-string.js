const nombre = 'David';
const apellido = 'Oleas';

// const nombreCompleto = nombre +' '+apellido;
//uno de los usos principales de los Templates String es no tener que hacer concatenación con el signo +
//usamos backits ``
const nombreCompleto = ` 
    ${nombre} 
    ${apellido} 
    ${1 + 1}
    `;

console.log(nombreCompleto);

function getSaludo(nombre){
    return nombre;
}

console.log(` Esto es un saludo: Hola ${getSaludo(nombre)}

`);

