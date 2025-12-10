let number1, number2, correctAnswer;

function startQuiz() {
    number1 = Math.floor(Math.random() * 20) + 1;
    number2 = Math.floor(Math.random() * 20) + 1;

    correctAnswer = number1 + number2;

    document.getElementById("question").innerHTML =
        `Berapa hasil dari <b>${number1} + ${number2}</b> ?`;

    document.getElementById("result").innerHTML = "";
    document.getElementById("answer").value = "";
}

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer").value);

    if (userAnswer === correctAnswer) {
        document.getElementById("result").innerHTML = "<span style='color:green;'>Benar! 🎉</span>";
    } else {
        document.getElementById("result").innerHTML = "<span style='color:red;'>Salah! Jawaban benar: " + correctAnswer + "</span>";
    }
}
