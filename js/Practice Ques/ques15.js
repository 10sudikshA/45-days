//Develop a function that returns "Even" or "Odd" based on whether a number is even or odd using if-else.
function EvenOdd(num){
    if(num %2==0){
        return `${num} is Even`;
    }else {
        return `${num} is Odd`;
    }
}
console.log(EvenOdd(10));
console.log(EvenOdd(11));