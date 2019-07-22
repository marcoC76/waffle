function populate() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }

};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Pregunta " + currentQuestionNumber + " de " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Resultados</h1>";
    gameOverHTML += "<h2 id='score'> Tus puntos: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("¿Cuál no es un lenguaje de programación orientado a objetos?", ["Java", "C#", "C++", "C"], "C"),
    new Question("¿Qué idioma se usa para estilizar páginas web?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("Hay ____ componentes principales de la programación orientada a objetos.", ["1", "6", "2", "4"], "4"),
    new Question("¿Qué idioma se usa para las aplicaciones web?", ["PHP", "Python", "Javascript", "All"], "All"),
    new Question("MVC es un ____.", ["Lenguaje", "Libreria", "Framework", "Todas"], "Framework")
];
var questions2 = [
    new Question("¿1+1?", ["1", "2", "3", "4"], "2"),
    new Question("¿1+2?", ["3", "5", "7", "8"], "3"),
    new Question("1+3?", ["1", "6", "2", "4"], "4"),
    new Question("¿1+4?", ["8", "9", "5", "3"], "5"),
    new Question("1+5?", ["7", "8", "9", "6"], "6"),
    new Question("1+6?", ["7", "8", "9", "6"], "7")
];
var questions3 = [
    new Question("¿1*1?", ["1", "2", "3", "4"], "1"),
    new Question("¿1*2?", ["2", "5", "7", "8"], "2"),
    new Question("¿1*3?", ["1", "6", "3", "4"], "3"),
    new Question("¿1*4?", ["8", "4", "5", "3"], "4"),
    new Question("¿1*5?", ["7", "5", "9", "6"], "5")
];

// create quiz
    var quiz = new Quiz(questions);


// display quiz
populate();