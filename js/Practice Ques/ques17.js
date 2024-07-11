//Create a program that determines the type of a triangle (equilateral, isosceles, scalene) given its side lengths using an if-else ladder.
function Triangle(s1,s2,s3){
    if(s1==s2 && s2==s3){
        console.log("Equilateral Traingle");
    }
    else if(s1==s2 || s2==s3 || s1==s3){
            console.log("isoceles traingle");
        }
    
    else{
        console.log("Scalene");
    }
}
Triangle(10,10,10);
Triangle(10,10,20);
Triangle(10,20,20);
Triangle(10,1,10);
Triangle(10,8,7);