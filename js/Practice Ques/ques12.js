// Write a function that determines the grade of a student based on their score using an if-else ladder.

function Grade(score){
   
    if(score>=0 && score <=30){
       console.log(`Your score is ${score} and Grade is E`);
    }
    else if(score>=31 && score <= 50){
        console.log(`Your score is ${score} and Grade is D`);
    }
    else if(score>=51 && score<=60){
        console.log(`Your score is ${score} and Grade is C`);
    }
    else if(score>=61 && score<= 90){
        console.log(`Your score is ${score} and Grade is B`);
    }
    else if(score>=91 && score <=100){
        console.log(`Your score is ${score} and Grade is A`);
    }
    else{
        console.log("Invalid score");
    }
}
Grade(12);