// Ask 3 questions to user and add score
// function askQuestions() {
//   score = 0;

//   var prompt = require("prompt-sync")();
//   let question_1 = prompt("What is 5 + 3 = ");
//   let question_2 = prompt("Another name for World? ");
//   let question_3 = prompt("How many hours are their in a day: ");

//   if (question_1 === 8) {
//     console.log("Correct");
//   } else if (question_2 === "earth") {
//   } else if (question_3 === 24) {
//   } else {
//     if (question_1 === 8) {
//       if (question_2 === "planet") {
//         if (question_3 === 23) {
//           console.log("You got 2 correct");
//         } else {
//           if (question_1 === 8) {
//             if (question_2 === "planet") {
//               if (question_3 === 23) {
//                 console.log("You got 2 correct");
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }

// askQuestions();

// function userQuest() {
//   correctAnswers = 0;
//   var prompt = require("prompt-sync")();

//   let question_1 = prompt("What is 5 + 3 = ");
//   let question_2 = prompt("Another name for World? ");
//   let question_3 = prompt("How many hours are their in a day: ");

//   if (question_1 === 8) {
//     correctAnswers++;
//   }

//   if (question_2 === 'earth') {
//     correctAnswers++;
//   }

//   if (question_3 === 24) {
//     correctAnswers++;
//   }

//   if (correctAnswers === 3) {
//     console.log("Congratz you got all 3 correct");
//   } else if (correctAnswers === 2) {
//     console.log("Managed to get 2 correct, awesome!!!");
//   } else {
//     console.log('only got 1 correct')
//   }
//   console.log(correctAnswers)
// }

// userQuest();

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
