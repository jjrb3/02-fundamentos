let nombre = 'Deadpool';
let real = 'Wade Winston';

console.log(nombre + ' ' + real);
console.log(`${ nombre } ${ real } = ${ 1 + 2}`);

function getNombre() {
    return `${ nombre } is ${ real }`;
}

console.log(`El nombre de: ${ getNombre() }`);