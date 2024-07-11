// Develop a program that checks if a character is a vowel or consonant using if-else.

let ch = prompt("Enter a character : ");
let vowel = ['a','e','i','o','u','A','E','I','O','U'];
let flag = 0;
for(let i=0;i<vowel.length;i++){
    if(ch === vowel[i]){
        flag=1;
        break;
    }
}
if(flag){
    console.log(`${ch} is a vowel`);
}
else{
    console.log(`${ch} is a consonant`);
}