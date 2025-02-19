
let ultimo = 1
let penultimo = 1

function fibonnacciSiguiente(){
    // determinar el siguiente numero, y añadirlo al paragraph de los resultados de fibonacci
    let siguienteNumero = ultimo + penultimo
    penultimo = ultimo
    ultimo = siguienteNumero
    document.getElementById('fibonacciResultado').innerHTML += `, ${siguienteNumero}`
}

function fibonnacciSiguienteN(rondas=10){
    // iterar sobre la funcion siguiente
    for (let index = 0; index < rondas; index++) {
        fibonnacciSiguiente()
    }
}

function fibonnacciLimpiar(){
    // reiniciar las variables iniciales y luego limpiar el paragraph
    ultimo = 1
    penultimo = 1   
    document.getElementById('fibonacciResultado').innerHTML = 'Fibonacci: 0, 1, 1'
}