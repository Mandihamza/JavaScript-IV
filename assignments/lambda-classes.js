// CODE here for your Lambda Classes

//==============  Person  ==============
class Person {
  constructor(attr) {
    this.name = attr.name;
    this.age = attr.age;
    this.location = attr.location;
    this.gender = attr.gender;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
}

//==============  Instructor  ==============
class Instructor extends Person {
  constructor(instructorAttr) {
    super(instructorAttr);
    this.favLanguage = instructorAttr.favLanguage;
    this.catchPhrase = instructorAttr.catchPhrase;
    this.specialty = instructorAttr.specialty;
  }
  demo(subject){
    return `Today we are learning about ${subject}.`;
  }
  grade(student, subject){
    return `${student.name} receives a perfect score on ${subject}`;
  }
}

//==============  Student  ==============

class Student extends Person {
  constructor(studentAttr) {
    super(studentAttr);
    this.previousBackground = studentAttr.previousBackground;
    this.className = studentAttr.className;
    this.favSubjects = studentAttr.favSubjects;
  }
  PRAssignment(subject){
    return `${this.name} has submitted a PR for ${subject}.`;
  }
  sprintChallenge(subject){
    return `${this.name} has begun sprint challenge on ${subject}.`;
  }
  listsSubjects(){
    return `My favorite subjects are ${this.favSubjects}`;
  }
}

//==============  ProjectManagers  ==============

class ProjectManagers extends Instructor {
  constructor(PMAttr) {
    super(PMAttr);
    this.gradClassName = PMAttr.gradClassName;
    this.favInstructor = PMAttr.favInstructor;
  }
  standUp(slackChannel){
    return `${this.name} announces to ${slackChannel}, @channel standup times!​​​​​`;
  }
  debugsCode(student, subject){
    return `${ProjectManagers.name} debugs ${this.name}'s code on ${subject}.`;
  }
}

//==============  Stretch Problem  ==============


//Stretch Problem

// Extend Student by adding prop => grade && set it = to a number from 1-100.
// Build a method on Instructor  that randomly adds or subtracts points to a student's grade. use Math.random (this will be used BOTH instructors and PM's)```
// Add a graduate method to a student.
// This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
// If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
