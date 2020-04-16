// JavaScript Document

//So basically there are quite a ways to be using objects
//1.Constructor Functions
//2.Simple object literals
//3.A Classier way to define the objects

//Here we are using the classier style to use the object literals

//The class here is person
class Person {
  //this syntax is easy because we are learning Java and learning through class syntax makes it easy to remember and is similar to it

  //In this constructor there are 4 properties or what we call arguments name,age,gender,classes

  //The best thing about JS is it is loosely-typed, so we dont need to declare arrays over here. We can just declare them and use them as arrays later on because we dont have to specify the datatype
  constructor(name, age, gender, interests) {

    //THIS refers to the thing in which it is contained which is Person class.
    this.name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  //This is the first method inside the Person class
  greeting() {
    //This will output the text to the console.Again here THIS refers to the thing in which it is contained which is Person class.
    console.log(`Hi! I'm ${this.name}`);
  };

  //This is another method inside the Person class. It will output the name which will be defined in the person object because this is used.
  bye() {
    console.log(`${this.name.} has left the building. Bye for now!`);
  };
}

//INSTANCE #1 for the person class. You can see here we referred the name,age,gender and interests(which is an array)
let parth = new Person('Parth', 20, 'male', ['JavaScript', 'Java', 'PHP']);

//This is instance #2 for the Person class with all the properties defined.
let harmanpreet = new Person('Harmanpreet', 22, 'male', ['JavaScript', 'C#', 'Relational DataBase']);

//Now this teacher class is a sub class which is extening Superclass Person. So that is why extends keyword is used to optimize the code by not writing it again and again.
class Teacher extends Person {
  //This class is having two additional properties subject and grade.
  constructor(name, age, gender, interests, subject, grade) {
    //By using super keyword we can refer to the properties of the Person class in one statement
    //This saves time and makes code pretty much formatted.
    super(name, age, gender, interests);
    // subject and grade are specific to Teacher
    //These are some extra properties of the Teacher class
    this.subject = subject;
    this.grade = grade;
  }
}

//Instantiating the Teacher object
let JessicaLovesCat =  new Teacher('Jess', 23, 'female', ['JavaScript', 'Objects', 'API'], 'JS' , 98);