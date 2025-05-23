// Find the given number is armstrong or not

num=153;
num2=num;
num3=num;
len=0;
while(num>0){
    num=Math.floor(num/10);
    len++;
}
// console.log(len);
sum=0;
while(num2>0){
    digit=num2%10;
    sum=sum+digit**len;
    num2=Math.floor(num2/10);
}
// console.log(sum);
if(sum==num3){
    console.log(`the given number ${num3} is armstrong number`);
}
else{
    console.log(`the given number ${num3} is not armstrong number`);
}


// Find greatest common divisor of the given numbers

num1=15;
num2=45;
if(num1>num2){
    max=num1;
    min=num2;
}
else{
    max=num2;
    min=num1;
}
gcd=1;
for(var i=1;i<=min;i++){
    if(num1%i==0 && num2%i==0){
        gcd=i;
    }
}
console.log(gcd);