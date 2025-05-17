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