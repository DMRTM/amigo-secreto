// El siguiente codigo define la estructura logica del juego "El Amigo secreto"

//Definicion de variables
let nombreAmigo;
let listaAmigos=[];
let indicesSorteados=[];
let amigosSorteados=[];

//Funciones
//Asignacion de textos en los elementos del archivo index.html
function asignarTextoElementos(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//Mensajes de entrada al juego
function mensajesEntrada(){
    asignarTextoElementos('h1','Juego del Amigo Secreto');
    asignarTextoElementos('h2','Ingresa el nombre de cada uno de tus amigos');
    return;
}

//Funcion para ir agregando nombres a la lista de amigos
function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;
    // Validacion del amigo secreto
    // Aseguramos que no entren valores en blanco
    if (nombreAmigo == "") {
        alert("Por favor ingresa un nombre valido");
        limpiezaInput();
    
    } else if (!isNaN(nombreAmigo)){   //aseguramos que no entren valores numericos
            alert("Por favor ingresa un nombre valido, no se aceptan numeros");
            limpiezaInput();
            }
            else {
                //Si el nombre ya esta en la lista
                if (listaAmigos.includes(nombreAmigo)){
                    alert("Ese nombre ya existe, por favor Ingresa otro nombre");
                    limpiezaInput();
                      }
                    else{ //Si el nombre es nuevo en la lista
                        listaAmigos.push(nombreAmigo);
                        let listaAmigosElemento = document.getElementById('listaAmigos');
                        listaAmigosElemento.innerHTML = listaAmigos.map(amigo => `<li>${amigo}</li>`).join(''); 
                        limpiezaInput();
                     }
            }
return;
}

//Funcion de limpieza del input
function limpiezaInput(){
   document.querySelector('#amigo').value = '';
}

//La funcion que determina cual de los valores del arreglo sera seleccionado
function sortearAmigo() {
    return Math.floor(Math.random()*(listaAmigos.length));
   }

// Funcion que evalua si el amigo sorteado ya salio en previos sorteos   
function mostrarAmigoSorteado(){
    //validar si hay amigos
    if (listaAmigos.length === 0) {
        alert("Por favor agrega al menos un nombre antes de sortear.");
        //validar si todos los amigos ya han sido sorteados
    } else if (indicesSorteados.length === listaAmigos.length){
        alert("Todos los amigos han sido sorteados");
        }
        else {
            let posicionAmigoSecreto = sortearAmigo();    
            //verificar si el amigo sorteado ya esta en la lista 
            while (indicesSorteados.includes(posicionAmigoSecreto)){
                posicionAmigoSecreto = sortearAmigo();
            }
            indicesSorteados.push(posicionAmigoSecreto);
            let amigoSorteado = listaAmigos[posicionAmigoSecreto];
            amigosSorteados.push(amigoSorteado);

            //limpiar la lista de amigos ingresados en pantalla
            let listaAmigosElemento = document.getElementById('listaAmigos');
            listaAmigosElemento.innerHTML = '';
            
            //actualizar el amigo seleccionado
            asignarTextoElementos('#resultado',`<li>${listaAmigos[posicionAmigoSecreto]}</li>`);
        }
                  
    }

// Ejecucion de funciones
mensajesEntrada();
