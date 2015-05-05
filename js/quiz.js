function quiz() {
    function setUpQuestion() {
        document.getElementById("answer").innerHTML = "";
        if (count2 < answers.length) {
            for (var i = 0; i < 4; i++) {
                document.getElementById("lable" + i).innerHTML = options[count1];
                count1++;
                document.getElementById("check").value="Check Answer";
            }
            document.getElementsByTagName("h4")[0].innerHTML = questions[count2];
        }
        else {

            document.getElementById("answer").innerHTML = "You Got " + correct + "/" + answered + " Correct";
            document.getElementById("answer").style.color = "#000000";
            fin = true;
        }
        nextQuestion = true;
    }

    function checkAnswer() {

        if (document.getElementById("a" + answers[count2]).checked) {
            document.getElementById("answer").innerHTML = "CORRECT";
            document.getElementById("answer").style.color = "#00ff00";
            correct++;
            answered++;
        }
        else {
            switch (answers[count2]) {
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
        nextQuestion = false;
        document.getElementById("check").value="Next Question";
    }

    document.getElementById("answer").innerHTML = " ";
    document.getElementById("check").value="Check Answer";

    var questions = ["Which resource is renewable? ", "A supply curve for a good is drawn to show how quantity supplied varies with?", "The market for a normal good is in equilibrium at point . Consumers' income increases and the government gives a subsidy to the producers of the good, what would happen?", "In 2014, floods caused severe damage to grain production.<br>How would this be shown on a market demand and supply diagram for grain? ", "Potatoes and fuel are used in the production of potato chips. In 2010 farmers produced a record potato crop but in 2011 rises in the price of fuel increased costs for potato chip makers.<br>What is likely to have happened to the price of potato chips in 2010 and 2011?", "What is not held constant in constructing a demand table?", "What kind of resource is a teacher?", "Why might the government introduce a tax on cigarettes?", "What might cause demand to increase for a product?", "Which one of these is a want?"];
    var answers = [3, 3, 2, 1, 1, 2, 0, 1, 0, 2];
    var correctanswer;
    var options = ["A. Coal", "B. Gas", "C. Oil", "D. Water", "A. Government taxes", "B. Income", "C. Tastes", "D. The price of the good", "A. Price increases", "B. Price decreases", "C. Quantity increases", "D. Quantity decreases", "A. Supply: no change, Demand: shift to the right", "B. Supply: shift to the left, Demand: no change", "C. Supply: shift to the left, Demand: shift to the left", "D. Supply: shift to the right, Demand: shift to the left", "A. 2010: decrease, 2011: decrease", "B. 2010: decrease, 2011: increase", "C. 2010: increase, 2011: decrease", "D. 2010: increase, 2011: increase", "A. The incomes of consumers", "B. The prices of complementary goods", "C. The price of the good itself", "D. The tastes of consumers", "A. Labour", "B. Non-renewable", "C. Natural", "D. Capital", "A. To make goods cheaper for consumers", "B. To discourage consumption of the good", "C. To reduce costs of production", "D. To increase productivity", "A. Decrease in the cost of a complementary good", "B. Addition of tax on the product", "C. Decrease in the price of a substitute good", "D. Increase in the price of a related good", "A. Water", "B. House", "C. Computer", "D. Clothing"];

    var count1 = 0;
    var count2 = 0;
    var answered = 0;
    var correct = 0;
    var nextQuestion = false;
    var fin = false;

    setUpQuestion();

    document.getElementById("check").onclick = function () {
        if (nextQuestion == true) {
            checkAnswer();
        }
        else {
            setUpQuestion();
        }
    };
}

quiz();
document.getElementById("reset").onclick = function () {
    quiz();
};