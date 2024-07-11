// Create a function that takes an age and returns whether the person is a minor, an adult, or a senior citizen using an if-else ladder.


function AgeCategory(age) {
    if(age>=0 && age<18){
        alert("You are a minor");
    }
    else if(age>=18 && age<=60){
        alert("You are an Adult");
    }
    else if(age>60){
        alert("Yor are a senior citizen");
    }
    else{
        alert("Invalid age");
    }
    
}

let age = prompt("Enter your age : ");
AgeCategory(age);