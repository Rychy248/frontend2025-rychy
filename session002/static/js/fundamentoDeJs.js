

/**
 * 
 * @param { number } edad 
 */
function renap(edad) {
    // esperar un segundo, para decir si es mayor de edad

    // si es mayor edad, les da un DPI

    // si no es mayor de dad, los saca del RENAP, FUERA, reject


    // return new PROMISE
    // if, resolve : reject
    return new Promise((resolver, rechazar)=>{
        setTimeout(() => {
            
            if(edad >= 18){
                resolver('Tenga su DPI')
            }else{
                rechazar("Fuera, usted es menor de edad.")
            }

        }, 1000);
    })
}


function solicitarDPI() {
    // PROMPT, pedir la edad
    const edad = Number(prompt("Por favor deme su edad"));

    const siResuelve = (mensaje) =>{
        alert(`FELICITACIONES: ${mensaje}`)
    };

    const siRechaza = (mensaje)=>{
        alert(`LO SENTIMOS: ${mensaje}`)
    };

    renap(edad)
    .then(siResuelve)
    .catch(siRechaza)
    // si es mayor de edad. RESOLVE, felicitamos
    // si no es mayor de edad. REJECT, "Lo sentimos"

    // .then
    // .catch
}