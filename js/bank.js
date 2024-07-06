let limit = 1000;
let creditAmount = 5000;
let bankBalance = 10000;
if(creditAmount<=bankBalance && creditAmount>=limit){
    console.log(`Credit amount ${creditAmount} Successfull`);
    console.log(`Remaining balance ${bankBalance-creditAmount}`);
}
else{
    console.log(`Invalid amount! , please enter amount above ${limit}`);
}