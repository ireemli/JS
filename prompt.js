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
    const num1= parseFloat(prompt("Enter the first number to calculate: "));//usage of prompt for getting the info from user
    const num2= parseFloat(prompt("Enter the second number to calculate: "));//Convert a String to a Float
    const operator= prompt ("Enter a calculation operator (+,-,*,/): ");
    const answer = calculate(num1, num2, operator);
    if (answer !== null) {
        console.log("Answer is: " +num1 + ""+ operator+ ""+ num2 +"=" +answer);
      }
}
main();//manually calling the main function,unlike other languages
