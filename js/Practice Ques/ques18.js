//Write a function to calculate the factorial of a number using if-else for error handling (e.g., negative numbers).
function factorial(num) {
    if(num<0){
        return "invalid number";

    }
    if(num==0){
        return 1;
    }
    return num * factorial(num-1);
    
}
console.log(factorial(-1));