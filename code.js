var user="roshni";
var pswd="Kanna@123";
if(user=="roshni" &&pswd=="Kanna@123"){
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