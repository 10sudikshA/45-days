// Write a function to determine if a number is divisible by 3, 5, or both using if-else.

function checkDivisbility(num) {
    if(num%3 == 0 && num % 5 ==0){
        console.log(`${num} is divisible by 3 and 5 both`);
    }
    else if( num % 5 ==0){
        console.log(`${num} is divisible by 5 only`);
    }
    else if(num % 3 == 0 ){
        console.log(`${num} is divisible by 3 only`);
    }
    else{
        console.log("Try again !")
    }
    }
let num = prompt("Enter number : ");
checkDivisbility(num);