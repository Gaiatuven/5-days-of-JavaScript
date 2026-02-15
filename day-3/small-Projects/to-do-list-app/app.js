import * as readline from 'node:readline/promises';
import { stdin, stdout } from 'node:process';

const rl = readline.createInterface({
    input: stdin,
    output: stdout
});

const addList = [];

// Define the function before using it
async function addItem() {
    const item = await rl.question('Add item name: ');
    const price = await rl.question('Add price of Item: ');

    addList.push({
        item, 
        price: Number(price) // Convert price to number
    });
    
    console.log(`Added: ${item} - $${price}`);
    console.log('Current list:', addList);
    return addList;
}

// Main application loop
let running = true;
while (running) {
    const choice = await rl.question('\nSelect an Option 1: Add - 2: Edit - 3: Delete - 4: Exit: ');
    
    const choiceNum = Number(choice);
    switch (choiceNum) {
        case 1:
            await addItem();
            break;
        case 2:
            console.log('Option 2: Edit selected (not implemented yet)');
            break;
        case 3:
            console.log('Option 3: Delete selected (not implemented yet)');
            break;
        case 4:
            console.log('Goodbye!');
            running = false;
            break;
        default:
            console.log('Invalid option selected');
    }
}

rl.close();