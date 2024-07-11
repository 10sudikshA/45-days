//Write a function to find the largest of four numbers using nested if-else.

function findLargest(num1,num2,num3,num4){
   if(num1>num2){
    if(num1>num3){
        if(num1>num4){
            console.log(`${num1} is greatest among ${num2},${num3},${num4}`);
        }
        else{
            console.log(`${num4} is greatest among ${num1},${num2},${num3}`);
        }
    }else{
        if(num2>num3){
            console.log(`${num2} is greatest among ${num1},${num3},${num4}`);
        }
        else{
            console.log(`${num3} is greatest among ${num1},${num2},${num4}`);
        }
    }
   }else{
    if(num2>num3){
        if(num2>num4){
            console.log(`${num2} is greatest among ${num1},${num3},${num4}`);
        }
        else{
            console.log(`${num4} is greatest among ${num1},${num2},${num3}`);
        }
    }
    else{
        if(num1>num3){
            console.log(`${num1} is greatest among ${num2},${num3},${num4}`);
        }
        else{
            console.log(`${num3} is greatest among ${num1},${num2},${num4}`);
        }
    }
   }
}
findLargest(10,1,2,3);
findLargest(10,11,2,3);
findLargest(10,1,12,3);
findLargest(10,1,2,13);