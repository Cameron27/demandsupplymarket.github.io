function setUpQuestion() {
    for (var i = 0; i < 4; i++) {
        document.getElementById("lable" + i).innerHTML = options[count1];
        count1++;
    }
    document.getElementsByTagName("h4")[0].innerHTML = questions[count2];
}

function checkAnswer() {

    if (document.getElementById("a" + answers[count2]).checked) {
        document.getElementById("answer").innerHTML = "CORRECT";
        document.getElementById("answer").style.color = "#00ff00";
        correct++;
        answered++;
    }
    else {
        switch(answers[count2]) {
            case 0:
                correctanswer = "A";
                break;
            case 1:
                correctanswer = "B";
                break;
            case 2:
                correctanswer = "C";
                break;
            case 3:
                correctanswer = "D";
                break;
        }
        document.getElementById("answer").innerHTML = "The correct answer was " + correctanswer;
        document.getElementById("answer").style.color = "#ff0000";
        answered++;
    }

    count2++;

    if (count2 < answers.length) {
        setUpQuestion()
    }
    else {
        document.getElementById("final").innerHTML += "You Got " + correct + "/" + answered + " Correct";
    }
}

var questions = ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5"];
var answers = [2, 3, 0, 2, 1];
var correctanswer;
var options = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T"];

var count1 = 0;
var count2 = 0;
var answered = 0;
var correct = 0;

setUpQuestion();

document.getElementById("check").onclick = function () {
    checkAnswer()
};
