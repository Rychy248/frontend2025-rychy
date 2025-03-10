
/**
 * 
 * @param { number } num1 sumando1 de la adicion
 * @param { number } num2 sumando2 de la adcion
 * @returns number
 */
const suma = (num1, num2) =>{
    return num1 + num2
}

/**
 * 
 * @param { number } num1 minuendo de la resta
 * @param { number } num2 sustraendo de la resta
 * @returns number
 */
const resta = (num1, num2) => {
    return num1 - num2
}
/**
 * 
 * @param { number } num1 factor1 de la multiplicacion
 * @param { number } num2 factor2 de la multiplicacion
 * @returns number
 */
const multiplicacion = (num1, num2) => num1 * num2

/**
 * 
 * @param { number } num1 dividendo de la division
 * @param { number } num2 divisor de la division
 * @returns number
 */
const division = (num1, num2) => num1 / num2


/**
 * 
 * @returns number[]
 */
function obtenerInputs() {
    const numero1 = Number(document.getElementById('numero1').value)
    const numero2 = Number(document.getElementById('numero2').value)
    return [numero1, numero2]
}

/**
 * 
 * @param { number } num1 
 * @param { number } num2 
 * @param { callback } operacionARealizar 
 * @returns number
 */
function operar(num1, num2, operacionARealizar) {
    return operacionARealizar(num1, num2)
}

function pintarPantalla(nuevoValor) {
    document.getElementById('operacion-resultado').innerHTML = nuevoValor
}

/**
 * 
 * @param { string } operacionArealizar Esto define el tipo de operaecion a realizar
 */
function operacion(operacionArealizar) {
    const [ num1, num2 ] = obtenerInputs();
    let resultado;
    
    switch (operacionArealizar) {
        case 'suma':
            resultado = operar(num1, num2, suma);
            break;
        case 'resta':
            resultado = operar(num1, num2, resta);
            break;
        case 'multiplicacion':
            resultado = operar(num1, num2, multiplicacion);
            break;
        default:
            resultado = operar(num1, num2, division);
        break;
    };

    pintarPantalla(resultado);
}

