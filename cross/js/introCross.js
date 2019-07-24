// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function ($) {
	$(function () {
		// proporcionar entradas de crucigramas en una matriz de objetos como el siguiente ejemplo
		// Posición se refiere al orden numérico de una entrada. Cada posición puede tener
		// dos entradas: una entrada cruzada y una entrada abajo
		var puzzleData = [
			{
				clue: "Tema de la segunda unidad",
				answer: "programacion",
				position: 1,
				orientation: "across",
				startx: 4,
				starty: 10
			},
			{
				clue: "Tiene el 30% de valor en la calificación de cada periodo",
				answer: "proyecto",
				position: 2,
				orientation: "across",
				startx: 4,
				starty: 7
			},
			{
				clue: "Se resuelven de manera individual en formularios de google",
				answer: "cuestionarios",
				position: 3,
				orientation: "across",
				startx: 1,
				starty: 3
			},
			/* {
				clue: "Complex resistances",
				answer: "impedances",
				position: 10,
				orientation: "across",
				startx: 2,
				starty: 7
			},
			{
				clue: "This device is used to step-up, step-down, and/or isolate",
				answer: "transformer",
				position: 13,
				orientation: "across",
				startx: 1,
				starty: 9
			},
			{
				clue: "Type of ray emitted frm the sun",
				answer: "gamma",
				position: 16,
				orientation: "across",
				startx: 1,
				starty: 11
			},
			{
				clue: "C programming language operator",
				answer: "cysan",
				position:17,
				orientation: "across",
				startx: 7,
				starty: 11
			},*/
			{
				clue: "Tema de la tercera unidad",
				answer: "comunicacion",
				position: 4,
				orientation: "across",
				startx: 1,
				starty: 13
			},
			{
				clue: "Tema de la cuarta unidad",
				answer: "seguridad",
				position: 5,
				orientation: "down",
				startx: 8,
				starty: 6
			},
			{
				clue: "En ella se realizaran los apuntes de la clase asi como los reportes de las reuniones de pie",
				answer: "bitacora",
				position: 6,
				orientation: "down",
				startx: 5,
				starty: 1
			} /* ,
			{
				clue: "Greek variable that usually describes rotor positon",
				answer: "theta",
				position: 6,
				orientation: "down",
				startx: 7,
				starty: 3
			},
			{
				clue: "Electromagnetic (abbr.)",
				answer: "em",
				position: 7,
				orientation: "down",
				startx: 11,
				starty: 3
			},
			{
				clue: "No. 13 across does this to a voltage",
				answer: "steps",
				position: 9,
				orientation: "down",
				startx: 5,
				starty: 5
			},
			{
				clue: "Emits a lout wailing sound",
				answer: "siren",
				position: 11,
				orientation: "down",
				startx: 11,
				starty: 7
			},
			{
				clue: "Information technology (abbr.)",
				answer: "it",
				position: 12,
				orientation: "down",
				startx: 1,
				starty: 8
			},
			{
				clue: "Asynchronous transfer mode (abbr.)",
				answer: "atm",
				position: 14,
				orientation: "down",
				startx: 3,
				starty: 9
			},
			{
				clue: "Offset current control (abbr.)",
				answer: "occ",
				position: 15,
				orientation: "down",
				startx: 7,
				starty: 9
			} */
		]

		$('#puzzle-wrapper').crossword(puzzleData);

	})

})(jQuery)