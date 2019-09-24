function check(){

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var correct = 0; 

    if (question1 == "Captain Hook"){
        correct++;
    }
    
    if (question2 == "Sharks"){
        correct++;
    }

    if (question3 == "Tadpoles"){
        correct++;
    }
    if (question4 == "five"){
        correct++;
    }

    if (question5 == "eight"){
        correct++;
    }

    var message = ["Great job", "That's just Okay", "You really need to do better"];
    var pictures = ["./assets/images/win.gif","./assets/images/meh.gif","./assets/images/lose.gif"]
    var range;

    if (correct <1){

        range = 2;
    }
   
    if (correct>0 && correct <4){

        range = 1;
    }
    
    if (correct > 3 ){

        range = 0;
    }

document.getElementById('after_submit').style.visibility = "visible";
document.getElementById("message").innerHTML = message[range];
document.getElementById("number_correct").innerHTML ="You got " + correct + " correct";
document.getElementById("picture").src = pictures[range];

}
