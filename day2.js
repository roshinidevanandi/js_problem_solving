// Find the length of number

num=9989017822
len=0
while(num>0){
    num=Math.floor(num/10)
    len++
}
console.log(len)


// Find the reverse of a number

num=123
reverse=0
while(num>0){
    digit=num%10
    reverse=reverse*10+digit
    num=Math.floor(num/10)
}
console.log(reverse)

// find the even and odd numbers count of a given number

num=9989017822;
even=0;
odd=0;
while(num>0){
    if((num%10)%2==0){
        even++;
    }
    else{
        odd++;
    }
    num=Math.floor(num/10);
}
console.log(`even count is ${even}`)
console.log(`odd count is ${odd}`)