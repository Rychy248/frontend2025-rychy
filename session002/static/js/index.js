

let contador = -1
let fizzBuzz = []

function pintarEnPantalla() {
    //Encargada de modificar el paragrahp "fizzBuzzResult"
}

function esFizzOEsBuzz(num) {
    // Encargada de devolver, fizz, buzz o el numero
    // si es multiplo de 3, devolver fizz
    // si es multiplo de 5, devolver buzz
    // si es multiplo de 3 y 5, devolver fizzBuzz
    if(num === 0){
     return num
    }else if(num % 3 === 0 && num % 5 === 0 ){
        return 'fizzBuzz'
    }else if(num % 3 === 0){
        return 'fizz'
    }else if(num % 5 === 0){
        return 'buzz'
    }
    
    return num
}

function siguiente(){
    // añadir un siguiente numero aL array fizzBuzz
    let siguienteElemento = esFizzOEsBuzz(++contador)
    fizzBuzz.push(siguienteElemento)
    console.log(fizzBuzz)
}

function siguienteN(rondas){
    // encargada de llamar de manera iterada, a la funcion siguiente
}

function limpiar(){
    //encargada de vaciar la lista fizzBuzz, y limpiar el paragrahp
}
// Hola estoy añadiendo una linea a este fichero

// function main(){

//     // ORQUESTAR LLAMADAS
// }