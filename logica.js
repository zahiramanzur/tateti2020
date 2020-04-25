thisGame=false;



//Comienzo de juego

var gamer1 = document.getElementById("gamer1");
var gamer2 = document.getElementById("gamer2");
var error = document.getElementById("error");
error.style.color = "red";

function startGame(){    
    
    var errorMessage = [];
    
    if (gamer1.value === null || gamer1.value === "") {
        document.getElementById("gamer1").focus();
        errorMessage.push("Ingresa el nombre para un nuevo jugador");
    } else {
        thisGame = true;
    }

    if (gamer2.value === null || gamer2.value === "") {
        document.getElementById("gamer2").focus();
        errorMessage.push("Ingresa el nombre para un nuevo jugador2");
    } else {
        thisGame = true;
    }

    error.innerHTML = errorMessage.join(', ');
    
    game(thisGame);
    return false;

}
var moveGamer1 = false;
function game(gameOn){
    debugger;
    if (gameOn == true) {
        alert('Comienza el juego el jugador 1, selecciona un casillero del tablero');
        moveGamer1 = true;
        
        
    } else {
        alert("Aún no ha comenzado la partida");
        
    }  
    
}




//Creación de piezas para tateti
var setPieceX = document.createElement('span');
var x = setPieceX.innerHTML= "<span>X</span>";

var setPieceO = document.createElement('span');
var o = setPieceO.innerHTML= "<span>O</span>";




//Seteo de piezas en el tablero
function move (id_element){
    //debugger;
    if (moveGamer1 == true) {
       document.getElementById(id_element).innerHTML = x; 
    }else {
        document.getElementById(id_element).innerHTML = o; 
    }
}