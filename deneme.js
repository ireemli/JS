const readline = require('readline');//reading the input stream line by line

function calculate(a,b,operator){ //function for calculate the numbers with selected operator
    let ans="";//variable for answer
    switch(operator){//attitude towards the selected operator
        case "+":
            ans= a+b;
            break;
        case "-":
            ans= a-b;
            break;
        case "/":
            ans= a/b;  
            break;
        case "*":
            ans= a*b; 
            break;
        default:
            console.log("Invalid operator, please enter one of the operators (+,-,*,/)");
            return null;
    }
    return ans;
}

function main(){
    const rl = readline.createInterface(process.stdin, process.stdout);//cereating interface for input and output,for interaction
    rl.question("Enter the first number to calculate: ",(num1)=>{//usage of readline 
        rl.question("Enter the second number to calculate: ",(num2)=>{//Convert a String to a Float
            rl.question("Enter a calculation operator (+,-,*,/): ",(operator)=>{
            const answer = calculate(parseFloat(num1), parseFloat(num2), operator);//Convert a String to a Float
                if (answer !== null) {
                    console.log("Answer is: " +num1 + ""+ operator+ ""+ num2 +"=" +answer);
                }
            rl.close();
            });
        });
    });
}
main();//manually calling the main function,unlike other languages
