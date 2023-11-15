class Person {
  constructor(name = "John Doe", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi, my name is ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }
    return description;
  }
}

class Traveller extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();

    if (this.homeLocation) {
      greeting += ` I am visting from ${this.homeLocation}`;
    }

    return greeting;
  }
}
// const me = new Student("Steffan Venacious", 29, "Software Engineer");
const me = new Traveller("Steffan Venacious", 29, "Montreal");
console.log(me.getGreeting());

const other = new Traveller();
console.log(other.getGreeting());
