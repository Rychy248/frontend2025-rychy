

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


function comprarMacdonals(efectivo) {
    
    // si tiene más de 65
    // si tiene 65, "Tenga su mackdonals"
    // si tiene menos de 65, "Lo siento no le alcanza para la hamburguesa"
    return new Promise((resolve, reject)=>{
        if(efectivo > 65 ){
            resolve("Tenga su mackdonals")
        }else{
            reject("Lo siento no le alcanza para la hamburguesa")
        }
    })
}

function comprarPepsi(efectivo) {
    return new Promise((resolve, reject)=>{

        if(efectivo >= 5) {
            resolve("Ten tu pepsi");
        }else{
            reject("No te alcanza para la pepsi")
        }
    })
}

function cargaEfectivo(){

    // preguntar, cuanto efectivo tiene
    const efectivo = Number(prompt("Dime, cuanto tienes?"))
    // llamar la promesa y ver si se logra comprar una mack
    // el mensaje o respuesta se imprime en un alert
    comprarMacdonals(efectivo)
    .then(res => {
        alert(res)
        let restoDeEfecto = Number(prompt("Cuanto tienes aun?"))
        return comprarPepsi(restoDeEfecto)
    })
    .then(res => {
        alert(res)
    })
    .catch(err => alert(err))

}



