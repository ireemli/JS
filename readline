const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculate(num1, num2, operator) {
    let result;
    switch(operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            console.log("Invalid operator. Please use +, -, *, or /");
            return null;
    }
    return result;
}

function main() {
    rl.question('Enter the first number: ', (firstNumber) => {
        const num1 = parseFloat(firstNumber);
        
        rl.question('Enter the second number: ', (secondNumber) => {
            const num2 = parseFloat(secondNumber);
            
            rl.question('Enter the operator (+, -, *, /): ', (operator) => {
                const result = calculate(num1, num2, operator);
                
                if (result !== null) {
                    console.log(`The result of ${num1} ${operator} ${num2} is: ${result}`);
                }
                rl.close();
            });
        });
    });
}

main();
