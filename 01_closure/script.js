function counter(){
    let count=0;
    return function (){
        count++;
        return count ;
        
    }
}

let countri = counter();
console.log(countri());
console.log(countri());
console.log(countri());
console.log(countri());
console.log(countri());
console.log(countri());

