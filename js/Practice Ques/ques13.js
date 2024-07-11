// Create a program to check if a string is a palindrome using if-else.

function checkPalindrome(str){
    let i=0;
    let j=str.length-1;
    let flag = 0;
   while(i<=j){
    if(str[i] == str[j]){
        i++;
        j--;
        flag++;
    }
   else{
         flag=0;
         break;
   }
   }
   if(i>j){
    console.log(`${str} is palindrome`);
   }
   else{
    console.log(`${str} is not palindrome`);
   }
}
checkPalindrome(" ");

