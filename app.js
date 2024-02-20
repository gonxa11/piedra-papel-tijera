let botonPiedra = document.querySelector('.piedra')
let botonPapel = document.querySelector('.papel')
let botonTijera = document.querySelector('.tijera')

let manoUsuario = document.querySelector('.mano-usuaria')
let manoComputador = document.querySelector('.mano-computadora')

let puntajeUsuario = document.querySelector('.puntaje-usuaria p')
let puntajeComputador = document.querySelector('.puntaje-computadora p')

let labelResultado = document.querySelector('.resultado')

let tablero = document.querySelector('.tablero')

let eleccionUsuario = "";
let eleccionCompu = "";

let contadorUsuario = 0;
let contadorComputador = 0;

Swal.fire(
    'Bienvenido!',
    'Gana el primero que tenga 3 puntos!',
    'success'
)

const swalGanador= () => {
  Swal.fire({
    icon: 'success',
    title: 'Enhorabuena!...',
    text: 'Has sido el primero en llegar a 3 puntos.',
    confirmButtonText: 'Cool',
    allowOutsideClick: false
  })
}

const swalPerdedor = () => {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Sigue intentado',
    allowOutsideClick: false
  })
}

const eleccionComputadora = () =>{
    let opcionAlAzar = Math.floor(Math.random() * 3);

    //opcion
    if(opcionAlAzar == 0){
        manoComputador.src = "./assets/piedra_computadora.png";
        eleccionCompu = "piedra";        
    } else if(opcionAlAzar == 1){
        manoComputador.src = "./assets/papel_computadora.png";
        eleccionCompu = "papel";
    } else {
        manoComputador.src = "./assets/tijera_computadora.png";
        eleccionCompu = "tijera";
    }
}

botonPiedra.onclick = () => {
   manoUsuario.src = "./assets/piedra_user.png";
   manoComputador.src = "./assets/piedra_computadora.png";
   labelResultado.textContent = '...';
   tablero.classList.add("jugando");
   setTimeout(() => {
    eleccionUsuario = "piedra";
    manoUsuario.src = "./assets/piedra_user.png";
    eleccionComputadora();
    resultado();
    tablero.classList.remove("jugando")
   }, 200);
}

botonPapel.onclick = () => {
    manoUsuario.src = "./assets/papel_user.png";
    manoComputador.src = "./assets/papel_computadora.png";
    labelResultado.textContent = '...';
    tablero.classList.add("jugando");
    setTimeout(() => {
        eleccionUsuario = "papel";
        manoUsuario.src = "./assets/papel_user.png";
        eleccionComputadora();
        resultado()
        tablero.classList.remove("jugando")
       }, 200);
}

botonTijera.onclick = () => {
    manoUsuario.src = "./assets/tijera_user.png";
    manoComputador.src = "./assets/tijera_computadora.png";
    labelResultado.textContent = '...';
    tablero.classList.add("jugando");
    setTimeout(() => {
        eleccionUsuario = "tijera";
        manoUsuario.src = "./assets/tijera_user.png";
        eleccionComputadora();
        resultado();    
        tablero.classList.remove("jugando");
       }, 200);
}

const resultado = () => {
    if(eleccionUsuario == "piedra"){
        if(eleccionCompu == "papel"){
            labelResultado.textContent = "Has perdido!";
            contadorComputador++;
            puntajeComputador.textContent = contadorComputador
            ganador(contadorUsuario, contadorComputador);
        }

        if(eleccionCompu == "tijera"){
            labelResultado.textContent = "Has ganado!";
            contadorUsuario++;
            puntajeUsuario.textContent = contadorUsuario
            ganador(contadorUsuario, contadorComputador);
        }

        if(eleccionCompu == "piedra"){
            labelResultado.textContent = "Empate!";
        }
    }

    if(eleccionUsuario == "papel"){
        if(eleccionCompu == "tijera"){
            labelResultado.textContent = "Has perdido!";
            contadorComputador++;
            puntajeComputador.textContent = contadorComputador
            ganador(contadorUsuario, contadorComputador);
        }

        if(eleccionCompu == "piedra"){
            labelResultado.textContent = "Has ganado!";
            contadorUsuario++;   
            puntajeUsuario.textContent = contadorUsuario 
            ganador(contadorUsuario, contadorComputador);        
        }

        if(eleccionCompu == "papel"){
            labelResultado.textContent = "Empate!";
        }
    }

    if(eleccionUsuario == "tijera"){
        if(eleccionCompu == "piedra"){
            labelResultado.textContent = "Has perdido!";
            contadorComputador ++;
            puntajeComputador.textContent = contadorComputador
            ganador(contadorUsuario, contadorComputador);
        }

        if(eleccionCompu == "papel"){
            labelResultado.textContent = "Has ganado!";
            contadorUsuario ++;
            puntajeUsuario.textContent = contadorUsuario
            ganador(contadorUsuario, contadorComputador);
        }

        if(eleccionCompu == "tijera"){
            labelResultado.textContent = "Empate!";
        }
    }
}

const limpiarMarcador = () => {
    contadorComputador = 0;
    contadorUsuario = 0;
    puntajeComputador.textContent = contadorComputador;
    puntajeUsuario.textContent = contadorUsuario;
}

const ganador = (userPuntaje, compuPuntaje) => {
    if(userPuntaje >= 3 && userPuntaje > compuPuntaje) {
        console.log("Usuario ganador.");
        swalGanador();
        setTimeout(limpiarMarcador, 1000);
    } else if(compuPuntaje >= 3 && userPuntaje < compuPuntaje){
        console.log("Computador ganador.");
        swalPerdedor();
        setTimeout(limpiarMarcador, 1000);
    }
}