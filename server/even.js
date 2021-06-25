function printEven() {
    for(var x=0; x<=10; x++) {
        if(divideAndReturnReminder(x,2) ==0 ){
             console.log(x);
         }
    }
}

function add(a, b){
    var c = a+b
    return c;
}
function subtract(a, b){
    return a-b;
}
function divideAndReturnQuotient(s,d){
    return s/d;
}
function divideAndReturnReminder(f,j){
    return f%j;
}
function multiply(c,d){
    return c*d;
}
// var d = divideAndReturnQuotient(100,5);
// console.log(d);
// var a =subtract(100,50);
// console.log(a);

//var z = subtract(3,5)
//console.log(z);
//printEven();
//var x = add(2,3);
//console.log(x);

console.log(multiply(subtract(add(3,4),5),3));

//Data types
//string - any text in ""/''
//boolean - true/false
//number  - 1, 2 /34.00/2.2
//array - can write any array of things in this boxy bracts [] 
