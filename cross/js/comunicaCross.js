// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function ($) {
	$(function () {
		// proporcionar entradas de crucigramas en una matriz de objetos como el siguiente ejemplo
		// Posición se refiere al orden numérico de una entrada. Cada posición puede tener
		// dos entradas: una entrada cruzada y una entrada abajo



		var puzzleData = [
			{
				clue: "Al mismo tiempo",
				answer: "sincrona",
				position: 1,
				orientation: "across",
				startx: 2,
				starty: 5
			},
			{
				clue: "Transmitir un mensaje",
				answer: "comunicacion",
				position: 2,
				orientation: "down",
				startx: 8,
				starty: 1
			},
			{
				clue: "En distinto tiempo",
				answer: "asincrona",
				position: 3,
				orientation: "down",
				startx: 2,
				starty: 4
			},
			{
				clue: "Sirve para enviar y recibir mensajes de manera asíncrona",
				answer: "correo",
				position: 4,
				orientation: "across",
				startx: 1,
				starty: 10
			},
			{
				clue: "Los participantes comparten su opinión, experiencias y dudas",
				answer: "foro",
				position: 5,
				orientation: "down",
				startx: 6,
				starty: 3
			} 
		]

		$('#puzzle-wrapper').crossword(puzzleData);

	})

})(jQuery)