// Pregunta
function aleatorio (min, max) {
	return Math.floor(Math.random() * (max, min + 1) + min)
 } 
function eleccion(jugada) {
	let resultado = ""
	if (jugada == 1) {
		resultado = "piedra"
	} else if (jugada == 2) {
		resultado = "tijera"
	} else if (jugada == 3) {
		resultado = "papel"
	} else {
		resultado = "invalido"
	} 
	return resultado
}


let player = 0
let pc = 0
let wins = 0
let lose = 0
// choice
	
// Win or lose
while(wins < 3 && lose < 3) {
	pc = aleatorio (1, 3)
	player = prompt("Elige: 1 es para piedra, 2 es para tijera y 3 es para papel")

	alert("Tu elegiste " + eleccion(player))
	alert("PC elige " + eleccion(pc))

	if (pc == player) {
	alert("TIE")
	} else if (player == 1 && pc == 2 || player == 2 && pc == 3 || player == 3 && pc == 1) {
	alert("YOU WIN")
	wins = wins + 1
	} else {
	alert("YOU LOSE")
	lose = lose + 1
	}
}

// Combat
 
alert("WINS: " + wins + " times. LOSE: " + lose + " times")