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
