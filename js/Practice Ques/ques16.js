//Write a function to check if a number is within a given range using if-else.
function checkRange(lowerRange,upperRange,num){
    if(num>=lowerRange && num<=upperRange){
        console.log(`${num} lies between the given range ${lowerRange} - ${upperRange}`);
    }else{
        console.log(`${num} does not lies between the given range ${lowerRange} - ${upperRange}`);

    }
}
checkRange(1,100,10);
checkRange(1,9,19);