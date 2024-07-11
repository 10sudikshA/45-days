// Create a function that returns the largest of three numbers using an if-else ladder.


function  largestOfThree(num1,num2,num3){
    if(num1>num2){
        if(num1>num3){
            console.log(`${num1} is greater than ${num2} and ${num3}`);
        }
        else{
            console.log(`${num3} is greater than ${num1} and ${num2}`);
        }
    }
   else{
        console.log(`${num2} is greater than ${num1} and ${num3}`);
    }

}

largestOfThree(13,12,99);