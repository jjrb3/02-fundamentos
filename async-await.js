/**
 * Async Await
 */

/*
let getNombre = async() => {

    return 'Jeremy';
};*/

// Lo anterior seria lo mismo que esto
let getNombre = () => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('Jeremy');
        }, 3000);
    });
};

let saludo = async () => {

    let nombre = await getNombre();

    return `Hola ${ nombre }`;
};

saludo().then(mensaje => {
        console.log(mensaje);
    });
    /*.catch(e => {
        console.log('Error de ASYNC: ', e);
    });*/