// example 1:
// Prints all prime numbers between 200 and 300, and finally prints the total number of such primes.

count=0;
for(var i=200;i<=300;i++){
    fact=0;
    for(var j=2;j<i;j++){
        if(i%j==0){
            fact++;
            break;
        }
    }
    if(fact==0){
        console.log(i);
        count++;
    }
}
console.log(count);


// Example 2:
// Finds and prints the next prime number after the given number.

num=prompt("enter the positive number:")
while(true){
    num++;
    fact=0;
    for(var i=2;i<num;i++){
        if(num%i==0){
           fact++;
           break;
        }
    }
    if(fact==0){
        console.log(num);
        break;
    }
}


// Example 3:
// Prints the next 10 prime numbers after the given number.

num=prompt("enter the positive number: ");
count=0;
while(count<10){
    num++;
    fact=0;
    for(let i=2;i<num;i++){
        if(num%i==0){
            fact++;
            break;
        }
    }
    if(fact==0){
        console.log(num);
        count++;
    }
}

