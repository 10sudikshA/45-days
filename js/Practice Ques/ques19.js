//Develop a program that returns the day of the week based on a number input (1-7) using if-else.
function GetDay(num){
    let day = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    if(num>=1 && num<=7){
        console.log(`Day ${num} of week is ${day[num-1]}`);
    }else{
        console.log("Enter a valid number, between 1-7");
    }
}
GetDay(7);