

//Objeto

const persona = { //esto es un objeto
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {  //esto es otro objeto
    ciudad: 'New York',
    zip: 5456565,
    lat: 15.0548,
    lng: 45.32698,
  }
}

//const persona2 = persona; // esto no es un clon
//para ser un clon es asi

const persona2 = { ...persona };
persona.nombre = 'Peter';


console.log( persona );
console.log( persona2 );
