// example 1:

var user="roshni";
var pswd="Kanna@123";

if(user=="roshni" && pswd=="Kanna@123"){
    console.log("login successfully!");
}
else if(user=="roshni" && pswd!="Kanna@123"){
    console.log("invalid password!");
}
else if(user!="roshni" && pswd=="Kanna@123"){
    console.log("invalid user name!");
}
else{
    console.log("invalid credentialss")
}


// example 2:

marks=prompt("enter the valid marks: ");
if(marks>=80){
    console.log("A grade!");
}
else if(marks>65 && marks<=79){
    console.log("B grade!");
}
else if(marks>50 && marks<=64){
    console.log("C grade!");
}
else if(marks>35 && marks<=49){
    console.log("D grade!");
}
else if(marks<35){
    console.log("Fail!");
}
else{
    console.log("Marks should be greater than zero!")
}


// example 3:

// print even numbers between 1-50 only

for(var i=1;i<=50;i++){
    if(i%2==0){
        console.log(i)
    }
}

// example 4:

// Write a JavaScript program to count and display all the numbers between 1 and 100 that are divisible by 7. 
// , print how many such numbers were found.

count=0;
for(var i=1;i<=100;i++){
    if(i%7==0){
        count++;
        console.log(i);
    }
}
console.log(`They are ${count} multiples`)
