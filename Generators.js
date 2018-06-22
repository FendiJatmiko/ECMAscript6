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
