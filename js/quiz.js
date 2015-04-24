function setUpQuestion() {
	for (i = 0; i < 4; i++) { 
		document.getElementById("lable" + i).innerHTML = options[count1];
		count1++;
	}
}

function checkAnswer() {
	
	if (document.getElementById("a" + answers[count2]).checked) {
		document.getElementById("answer").innerHTML = "CORRECT";
	}
	else {
		document.getElementById("answer").innerHTML = "The correct answer was " + (answers[count2] + 1);
	}
	
	count2++;
	setUpQuestion()
}

var answers = [2, 3, 0, 2, 1];
var options = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T"];

var count1 = 0;
var count2 = 0;

setUpQuestion();
document.getElementById("check").onclick = function() {checkAnswer()};