let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;

console.log(numeroSecreto)

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero secreto en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','el numero secreto es menor');
        } else{
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
     
    }
    return;
}

function limpiarCaja() {
   document.querySelector("#valorUsuario").value = '';
}   

function generarNumeroSecreto() {
    //generar un numero pseudo aleatorio 
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;  

    console.log(numeroGenerado);
    console.log(listaNumeroSorteado);

    if (listaNumeroSorteado.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se Sortearon todos los numeros posibles')        
    } else {
    //Si el # esta en lista generara un nuevo numero
    if(listaNumeroSorteado.includes(numeroGenerado)){
        return generarNumeroSecreto();
    //si el # no esta en la lista lo incuira a ella y generara un nuevo #    
    } else {
        listaNumeroSorteado.push(numeroGenerado)
        return numeroGenerado;
    }
}
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto!');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja, 
    limpiarCaja();
    condicionesIniciales();
    //Generar el numero aleatorio
    //indicar mensaje de inicio intervalo de numero
    //Reinicar conteos 
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    //Deshabilitar el buton del nuevo juego
}

condicionesIniciales();
