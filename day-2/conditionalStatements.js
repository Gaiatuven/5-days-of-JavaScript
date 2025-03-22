function greetingByAge(age) {
    
    if (isNaN(age)) {
        console.log('Enter a numerical number: ')
    } else {
        if (age >= 60 && age <= 90) {
            console.log("Where did I put my glasses?")
        } else if (age >= 20 && age <= 59) {
            console.log("I need more coffee.")
        } else if (age >= 13 && age <= 19) {
            console.log("Whatever, I'm going out.")
        } else if (age >= 4 && age <= 12) {
            console.log("Can we play outside?")
        } else {
            console.log("Look, shiny ball!")
        }
    }
}

console.log(greetingByAge(32));