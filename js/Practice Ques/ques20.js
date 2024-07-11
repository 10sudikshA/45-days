// Write a function that checks if a person is eligible to vote based on their age using if-else.
function EligibleVoter(age){
    if(age<0){
        console.log("Enter your valid age");
        return ;
    }
    if(age>=18){
        console.log(`Your age is ${age} you are eligible to vote`);
    }
    else{
        console.log(`Your age is ${age} you are not eligible to vote`);
    }
}
EligibleVoter(18);
EligibleVoter(-1);
EligibleVoter(10);