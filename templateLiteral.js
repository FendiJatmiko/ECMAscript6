'use strict'


let name = 'nyobi';

console.log('Smells like ' + name + 'Spirits');
console.log(`Smelss like ${name} Spirits);
// see those console log would print the same but with back-tick is much more clearer and simpler



//it can also be used to markup 

`<div id="row">
 <div> Name: ${name} </div>
 <div> Age: ${age} </div>
 </div>`
 
 //or to simplify the markup, we can use function that accepts object that returns component
var template = function(obj) {
  return `
  <div class="row">
  <div class="col-lg-1"> ${obj.name} </div>
  <div class="col-lg-2"> ${obj.value} </div>
  </div>
  `
}
