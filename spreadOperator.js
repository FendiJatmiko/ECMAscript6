'use strict';

function add(a, b, c) {
   console.log(a+b+c);
    
    }

var nums = [3, 4, 5];
add(nums[0], nums[1], nums[2]);
//those syntax above is kinda ugly
// but with **Spread Operator** it can be simplify

add(...nums);
//basically **Spread Operator** is like variadic function in Golang
//another examples 

var meats = ['sarden', 'nugget']
var beverage = ['sake', 'beer', 'soda', 'wine'];
// say you want to join those 2 array, without Spread Operator 
// i would probably loop it and then append em
// but with Spread Operator it can be a lot simpler than loop

var beverage = ['sake', ...meats, 'beer', 'soda', 'wine'];
console.log(beverage);
//it would print sake and then meats array and the rest of original beverage array 

