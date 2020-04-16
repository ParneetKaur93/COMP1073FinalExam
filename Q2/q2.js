// JavaScript Document
// Create a new class named person
//create a constructor function  for person having properties name, age gender, interests

class Person {
  constructor(name, age, gender, interests) {
    this.name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }


//method greeting is created for person 
//it will print the statement on the console with the person's name
  greeting() {
    console.log(`Hi! I'm ${this.name}`);
  };

  //method bye is created for person which will the message on console with the person's name

  bye() {
    console.log(`${this.name.} has left the building. Bye for now!`);
  };
}
//creating 2 new person objects 
// the properties used here are name,age , gender, interests
//assigning the values to them
let parth = new Person('Parth', 20, 'male', ['JavaScript', 'Java', 'PHP']);
//here new keyword is used to tell the browser that a new object will be created with the required parameters in the barckets
let harmanpreet = new Person('Harmanpreet', 22, 'male', ['JavaScript', 'C#', 'Relational DataBase']);

// teacher class will extend the person 
//therefore all the properties of person will be used in the teacher
//super keyword is used to get all the properties of person
//teacher has 2 new properties subject and grade
class Teacher extends Person {
  constructor(name, age, gender, interests, subject, grade) {
    super(name, age, gender, interests);
    // subject and grade are specific to Teacher
    this.subject = subject;
    this.grade = grade;
  }
}
//instantiate a new teacher instance
var Ben = new teacher('Ben ', 33, 'M', ['travel', 'games'],'Java', 'A');



