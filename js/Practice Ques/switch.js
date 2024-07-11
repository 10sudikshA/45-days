let age = prompt("Enter your age : ");
let key ;
if(age>=18){
    key = 1;
}
else if(age>0 && age <18){
    key = 0;
}
switch (key) {
    case 0:
        console.log("You are under 18 , you are not eligible to vote");
        break;
    case 1:
        console.log("You are 18 , you are now eligible to vote");
        break;
    default:
        console.log("Enter a valid age");
        break;
}