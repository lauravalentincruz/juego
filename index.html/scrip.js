let numrandom = Math.floor(Math. random()* 100) + 1;

const resultado = document.querySelector(".resultado");const resAnterior = document.querySelector(".previa");const ayuda = document.querySelector(".pista");
const btn = document.querySelector(".btnEnviar");
const num = document.querySelector(".numero");

let cont = 1;
let resetbutton;

function juega(){
    let numusuario =Number(num.value);
}

if (cont===1){
    resAnterior.textContent="numeros anteriores:";
}
resAnterior.textContent +=numusuario +"-";

if (numUsuario ===numrandom){
    resultado.textcontent = "¡Felicidades! ¡Lo adivinaste!";
    resultado.style.backgroundcolor = "green";
    ayuda.textcontent = "";
    finJuego();
    }
    else if  (cont === 10){
        resultado.textcontent = "iiiFin del juego!!!";
        finJuego();
        }
        else {
            resultado.textcontent = "¡Incorrecto!";
            resultado.style.backgroundcolor = "red";
            if (numUsuario < numrandom){
            ayuda.textcontent = "¡El número es mas grande!";
            }else if (numUsuario > numrandom) {
            ayuda.textcontent = "¡El número es mas pequeño!";
            }
        }

        cont++;
        num.value="";
        num.focus();

        btn.addEventListener("clik",juega);

        function finJuego() {
        num.disabled = true;
        btn.disabled = true;
        resetButton = document.createElement("button");
        resetButton.textcontent = "Volver a Jugar";
        const formulario = document.querySelector('.form')
        formulario.appendChild(resetButton);
        resetButton.addEventListener("click", resetJuego)
         }
         function resetjuego(){
            cont=1
            const mensajes = document.querySelectorAll(".mensajes p");
                for (let i = 0; i< mensajes.length; i++) {
                    mensajes[i].textContent = "";
                }
         }
          resetbutton.parentnode.removechild(resetbutton);

          num.disabled= false;
          btnEnviar.disabled=false;
          num.value="";
          num.focus();

          resultado.style.backgroundcolor="white"
          numrandom= Math.floor(Math.random()*100)


