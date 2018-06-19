'use strict'


class Person{
    constructor(name, age, gender){
       this.name = name;
       this.age = age;
       this.gender = gender;

    } 
    
    displayName(){
        console.log(this.name);     
        //it would print the name
    }
 }
//method
 let nyobi = new Person('Yoben', 33, 'Male');
 nyobi.displayName();
 //create another object
 let brenda = new Person('Brenda', 30, 'Female');
 brenda.displayName();

