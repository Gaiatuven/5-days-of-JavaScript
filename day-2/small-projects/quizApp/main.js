function questions() {
    let correctAnswers = 0;
    var prompt = require("prompt-sync")();
  
    let question_1 = prompt("What is 5 + 3 = ");
    let question_2 = prompt("Another name for World? ");
    let question_3 = prompt("How many hours are their in a day: ");
    //console.log(question_1, question_2, question_3);
  
    if (question_1 == 8 && question_2 == "earth" && question_3 == 24) {
      console.log("Congratz in getting all 3 correct");
    } else if (question_1 == 8 || question_2 == "earth" || question_3 == 24) {
      console.log("Congratz in getting all 2 correct");
    } else if (question_1 == 8 || (question_2 == "earth" && question_3 == 24)) {
      console.log("Congratz in getting all 1 correct");
    } else if ((question_1 == 8 && question_2 == "earth") || question_3 == 24) {
      console.log("Congratz in getting all 1 correct");
    } else {
      console.log("You got all wrong");
    }
  }
  questions();