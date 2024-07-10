// Variables
let numeroSecreto = Math.floor(Math.random()*10)+1;
let numeroUsuario = 0;
let intentos = 1;

let numeroMaximo = parseInt (prompt("Indica el número máximo posible a adivinar, debe de ser mayor a 5:"));
if (numeroMaximo > 5){
while (numeroUsuario != numeroSecreto) {
  let numeroUsuario = parseInt(prompt(`indica un número entre 1 y ${numeroMaximo}`));

  /*Código de comparación*/

  if (numeroUsuario == numeroSecreto) {
    alert(`Acertaste, el número es: ${numeroSecreto}, lo hiciste en ${intentos} ${intentos > 1 ? "intentos" : "intento"}`);
    break;
  } else {
    //Códigp que apoya al usuario a adivinar el número
    if (numeroUsuario > numeroSecreto) {
      alert("El número es menor");
    } else {
      alert("El número es mayor");
    }
  }

  //recuento de intentos
  intentos = intentos + 1;

  //límite de intentos
  if(intentos > 5){
    alert ("Llegaste al máximo de intentos")
    break;
  }
} 
}else {
    alert("¡ERROR! no escogiste un núermo mayor a 5, reinicia el juego")
}