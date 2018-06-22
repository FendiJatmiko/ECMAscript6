"use strict";

//first of, define generator function, and when it get to the `yield` keyword, it stops.
//if not, it continue to the line bellow it
function* nyobiGenerator(){
    yield 'apples';
    yield 'bakwan';
    console.log('this is line after bakwan');
    yield 'teloo';
}

//and to call the generator function, we need method to call it
//here is how we define the method
let caller = nyobiGenerator();
console.log(caller.next());
console.log(caller.next().value);


console.log('------------------');

//simplest use case of generator 
function* getNextId(){
    let id = 0;
    while(id < 5)
        yield id++;
}
//oh, the return value of generator is by default object, so  if you want to print only the value 
// you can use, .value
let createId = getNextId();
console.log(createId.next().value);
//it would return 0, and then after loop and call it again, it would return the increment
//value of 1, and so on...
console.log(createId.next().value);
console.log(createId.next().value);
