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
