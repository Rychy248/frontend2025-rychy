

function imprimirNombre() {
    
    let nombre = prompt("Dame tu nombre")
    let imprimeMiNombre = document.getElementById("nombreUsuario")

    imprimeMiNombre.innerHTML = `Bievenido ${nombre}`
}
