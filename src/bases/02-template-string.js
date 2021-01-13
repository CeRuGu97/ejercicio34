

const nombre ='Cesar';
const apellido = 'Rubio';


const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre){
  return 'Hola Mundo ' + nombre;
}

console.log(`este es un texto: ${getSaludo(nombre)}`)