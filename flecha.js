

/*function sumar(a, b) {
    return a + b;
}*/

//let sumar = (a, b) => a + b;


//console.log(sumar(10, 20));


//let saludar = () => 'Hola mundo';

//console.log(saludar());

//let saludar = nombre => `Hola ${ nombre }`;

//console.log(saludar());


let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',

    getNombre() {
        return `${ this.nombre } ${ this.apellido } - Poder: ${ this.poder }`;
    }
};


console.log(deadpool.getNombre());