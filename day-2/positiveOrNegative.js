
function checkInterger(interger) {

    if (typeof interger === 'string') {
        console.log('Inter an interger value');
    } else {
        if (interger === 0) {
            console.log('Interger is zero');
        } else if (interger < 0) {
            console.log('Interger is negative');
        } else if (interger > 0) {
            console.log('Interger is positive');
        }
    }
}

checkInterger(50); 
checkInterger('helo');
checkInterger(5);
checkInterger(-3);
checkInterger(0);
checkInterger('123');