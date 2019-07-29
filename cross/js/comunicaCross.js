// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function ($) {
	$(function () {
		// proporcionar entradas de crucigramas en una matriz de objetos como el siguiente ejemplo
		// Posición se refiere al orden numérico de una entrada. Cada posición puede tener
		// dos entradas: una entrada cruzada y una entrada abajo



		var puzzleData = [
			{
				clue: "",
				answer: "sincrona",
				position: 1,
				orientation: "across",
				startx: 1,
				starty: 8
			},
			{
				clue: "Con el se le dan instrucciones a la computadora",
				answer: "codigo",
				position: 2,
				orientation: "down",
				startx: 3,
				starty: 7
			},
			{
				clue: "Existen 3 tipos: maquina, bajo nivel y alto nivel",
				answer: "lenguaje",
				position: 3,
				orientation: "down",
				startx: 6,
				starty: 3
			},
			{
				clue: "Se evalúa una condición en su interior, y dependiendo del resultado, se selecciona uno de los caminos establecidos",
				answer: "decision",
				position: 4,
				orientation: "across",
				startx: 5,
				starty: 4
			},
			{
				clue: "Secuencia ordenada de pasos para solucionar un problema",
				answer: "algoritmo",
				position: 5,
				orientation: "down",
				startx: 11,
				starty: 1
			},
			{
				clue: "Se repite",
				answer: "bucle",
				position: 6,
				orientation: "across",
				startx: 8,
				starty: 2
			} 
		]

		$('#puzzle-wrapper').crossword(puzzleData);

	})

})(jQuery)