
/** FUNCIONES EN EXPRESION */
const suma = function(numero1, numero2) {
    let resultado = numero1 + numero2
    return resultado
};

// Arrow function
const multiplicacion = (numero1, numero2) => {
    let resultado = numero1 * numero2;
    return resultado;
}

// REALICE UNA FUNCION, que reciba como parametro un ID, lo obtenga del DOM y retorne un numero
const obtenerValorDeDom = function(id){
    let nodo = document.getElementById(id)
    return Number(nodo.value)
};

/** FUNCIONES DECLARADAS */
function saludame1(){
    alert("Hola")
}

function saludame2(nombre) {
    let apellido = "cualquier apellido"
    
    alert(`Hola, bienvenido ${nombre} ${apellido}`)
}


function operacion() {
    const resta = function(numero1, numero2){
        return numero1 - numero2
    }
    // Arrow function
    const division = (numero1, numero2 ) => numero1 / numero2
    
    // HACER UNA ARROW FUNCTION, que reciba como parametro, numero1 y numero2, y 
    // devuelva el resultado de una division

    let resultadoOperacion;
    let numero1 = obtenerValorDeDom("numero1")
    let numero2 = obtenerValorDeDom("numero2")

    let operacionElegida = prompt("Que operación deseas hacer? \nSuma \nResta \nMultiplicacion \nDivision")
    
    operacionElegida = operacionElegida.toLocaleLowerCase()

    if(operacionElegida === 'suma'){
        resultadoOperacion = suma(numero1, numero2)
    }else if(operacionElegida === 'resta'){
        resultadoOperacion = resta(numero1, numero2)
    }else if(operacionElegida === 'multiplicacion'){
        resultadoOperacion = multiplicacion(numero1, numero2)
    }else if(operacionElegida === 'division'){
        resultadoOperacion = division(numero1, numero2)
    }else{
        resultadoOperacion = "La opcion elegida no es valida."
    }
    // añadir el caso division

    alert(`El resultado de la suma es: ${resultadoOperacion} `)
}

// console.log("CONSOLE EXTERNO")
// console.log(this)

function dimeQuienEres(){
    const yoSoy = 'Yo soy la funcion "DimeQuienEres"'
    console.log("CONSOLE INTERNO")
    console.log(this)

    const quienSoy1 = function(){
        console.log("Llamando a quienSoy1")
        console.log("CONSOLE FUNCION ANONIMA")
        console.log(this)
    }

    const quienSoy2 = ()=>{
        console.log("Llamando a quienSoy2")
        console.log("CONSOLE ARROY FUNCION")
        console.log(this)
    }

    quienSoy1()
    quienSoy2()
}

const person = {
    nombre:"Fredy Romero",
    saludar:function(){
        alert(`Hola soy ${this.nombre}`)
    },
    imprimeTuThis:function() {
        console.log("IMPRIMIENDO DENTRO DEL OBJETO")
        console.log(this)
    },
    saludar2:()=>{
        alert(`Hola soy ${this.nombre}`)
    },
    imprimeTuThisDesdeUnArrow: () =>{
        console.log("IMPRIMIENDO DENTRO DEL OBJETO")
        console.log(this)
    }
}
// person.saludar()
// person.imprimeTuThis()
// person.saludar2()
// person.imprimeTuThisDesdeUnArrow()


// (IIFE - Immediately Invoked Function Expression) Se ejecutan automáticamente cuando se definen.
// (function(){
//     alert("Hola yo soy una funcion de ejecucion inmediata")
// })();