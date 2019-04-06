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
    return `${this.name} debugs ${student.name}'s code on ${subject}.`;
  }
}

//==============  Objects  ==============

const katie = new Person({
  name: 'Katie',
  age: 26,
  location: 'Earth',
  gender: 'F',
});

console.log(katie.name)
console.log(katie.age)
console.log(katie.location)
console.log(katie.gender)
console.log(katie.speak());

const jen = new Person({
  name: 'Jennifer',
  age: 29,
  location: 'NY',
  gender: 'F',
});

console.log(jen.name)
console.log(jen.age)
console.log(jen.location)
console.log(jen.gender)
console.log(jen.speak());

const erik = new Instructor({
  name: 'Erik',
  location: 'Mars',
  age: 39,
  gender: 'M',
  favLanguage: 'German',
  specialty: 'Teaching',
  catchPhrase: `Alright, alright, alright!`
});

console.log(erik.name)
console.log(erik.location)
console.log(erik.age)
console.log(erik.gender)
console.log(erik.favLanguage)
console.log(erik.specialty)
console.log(erik.catchPhrase)

const ali = new Instructor({
  name: 'Ali',
  location: 'Venus',
  age: 35,
  gender: 'F',
  favLanguage: 'Poetry',
  specialty: 'Writer',
  catchPhrase: `Ready, set, go!`
});

console.log(ali.name)
console.log(ali.location)
console.log(ali.age)
console.log(ali.gender)
console.log(ali.favLanguage)
console.log(ali.specialty)
console.log(ali.catchPhrase)

const mandi = new Student({
  name: 'Mandi',
  location: 'The Internet',
  age: 33,
  gender: 'F',
  previousBackground: 'Marketing',
  className: 'WEBPT5',
  favSubjects: ['Cooking', 'Napping', 'Twitter'],
  grade: 1000
});

const tim = new Student({
  name: 'Tim',
  location: 'In motion',
  age: 41,
  gender: 'N',
  previousBackground: 'Gaming',
  className: 'WEBPT72',
  favSubjects: ['Gaming', 'Dancing', 'Acting'],
  grade: 9000
});

console.log(mandi.name)
console.log(mandi.location)
console.log(mandi.age)
console.log(mandi.gender)
console.log(mandi.listsSubjects('Html', 'CSS', 'JS'))
console.log(mandi.PRAssignment('JS'))
console.log(mandi.sprintChallenge('JS-IV'))
console.log(mandi.favSubjects)

console.log(tim.name)
console.log(tim.location)
console.log(tim.age)
console.log(tim.gender)
console.log(tim.listsSubjects('Speaking', 'Gaming', 'Dancing'))
console.log(tim.PRAssignment('Acting'))
console.log(tim.sprintChallenge('Sharing'))
console.log(tim.favSubjects)


console.log(erik.grade(mandi, 'JavaScript'));
console.log(erik.demo('Fun, Fun, Functions'));
console.log(ali.grade(mandi, 'Node.js'));
console.log(ali.demo('Design'));

console.log(erik.grade(tim, 'Tango'));
console.log(ali.grade(tim, 'Poetry slam'));

// console.log(erik.standUp('ASDF'));
// console.log(erik.debugsCode(tim, 'CSS'));
// console.log(ali.standUp('ASDF'));
// console.log(ali.debugsCode(mandi, 'React'));

//==============  Stretch Problem  ==============


//Stretch Problem

// Extend Student by adding prop => grade && set it = to a number from 1-100.
// Build a method on Instructor  that randomly adds or subtracts points to a student's grade. use Math.random (this will be used BOTH instructors and PM's)```
// Add a graduate method to a student.
// This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
// If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
