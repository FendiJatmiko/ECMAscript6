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
    displayAge(){
        console.log(this.age);     
        //it would print the name
    }
    displayGender(){
        console.log(this.gender);     
        //it would print the name
    }
 }
//those above are super class or parent class

class Programmer extends Person{
    constructor(name, age, gender, language){
        super(name, age, gender);
        this.language = language;
    }
    displayLanguage(){
        console.log(this.language)
    }
}

//method
 let nyobi = new Person('Yoben', 33, 'Male');
 nyobi.displayName();
 nyobi.displayAge();
 nyobi.displayGender();
 //create another object
 let brenda = new Person('Brenda', 30, 'Female');
 brenda.displayName();

 //create object inheritance, which is Programmer that inherit Person class
 let yoben = new Programmer('Yoben', 22, 'Male','Golang');
 yoben.displayName();
 yoben.displayAge();
 yoben.displayLanguage();
