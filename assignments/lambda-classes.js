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
    return `Hello my ${name} is Fred, I am from ${location}`;
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
    return `Today we are learning about ${subject}`;
  }
  grade(student, subject){
    return '{student.name} receives a perfect score on {subject}';
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
    return `${student.name} has submitted a PR for ${subject}.`;
  }
  sprintChallenge(){
    return `${student.name} has begun sprint challenge on ${subject}.`;
  }
  listsSubjects(){
    return //`student's favoriteSubjects one by one`;
  }
}

//==============  ProjectManagers  ==============

class ProjectManagers extends Instructor {
  constructor(PMAttr) {
    super(PMAttr);
    this.gradClassName = PMAttr.gradClassName;
    this.favInstructor = PMAttr.favInstructor;
    this.favSubjects = PMAttr.favSubjects;
    this.channel = PMAttr.channel; //IDK
  }
  standUp(slackChannel){
    return `${ProjectManagers.name} announces to ${channel}, @channel standup times!​​​​​`;
  }
  debugsCode(Student){
    return `${ProjectManagers.name} debugs ${student.name}'s code on ${subject}.`;
  }
}
