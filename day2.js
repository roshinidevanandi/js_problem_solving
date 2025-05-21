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


// What is a factorial of a given number

function factorial(n){
    if(n==0 || n==1){
        return 1;
    }
    else{
        return n*factorial(n-1);
    }
}
console.log(factorial(9))

// or

function factorial(n){
    if(n==0 || n==1) return 1;
    return n*factorial(n-1);
}
console.log(factorial(9))

// method 2:

function factorial(n){
    result=1;
    for(var i=2;i<=n;i++){
        result*=i;
    }
    return result;
}
console.log(factorial(6))



// What is a fibonacci series of a given number
// Using a Recursive Function (for nth number, not full series)


function fibonacci(n){
    if(n==0) return 0;
    if(n==1) return 1;
    return fibonacci(n-1)+fibonacci(n-2)
}
console.log(fibonacci(6))


//  Using an Iterative Approach


function fibonacci(n){
    series=[0,1]
    for(let i=2;i<=n;i++){
        series.push(series[i-1]+series[i-2])
    }
    return series;
}
console.log(fibonacci(6))

// method 2 for fibonacci series

var a=0;
var b=1;
for(var i=2;i<12;i++){
    console.log(a);
    c=a+b;
    a=b;
    b=c;
}


// find 50th number of fibonacci series

var n=0;
var o=1;
count=0;
for(var i=2;i<52;i++){
    p=n+o;
    n=o;
    o=p;
    count++;
    if(count==50){
        console.log(n);
    }
}


// Find the even numbers and odd numbers seperately in the given number

num=6301864958;
even_digit=0;
odd_digit=0;
while(num>0){
    digit=num%10;
    if(digit%2==0){
        even_digit=even_digit*10+digit;
    }
    else{
        odd_digit=odd_digit*10+digit;
    }
    num=Math.floor(num/10);
}
console.log(even_digit,odd_digit);


// Find the sixth digit of the given number

num=12334678;
req=14;
reverse=0;
while(num>0){
    digit=num%10;
    reverse=reverse*10+digit;
    num=Math.floor(num/10);
}
// console.log(reverse);
count=0;
not_found=true;
while(reverse>0){
    digit=reverse%10;
    reverse=Math.floor(reverse/10);
    count++;
    if(count==req){
        console.log(digit);
        not_found=false;
    }
}
if(not_found){
    console.log(`not found the ${req}th digit`)
}