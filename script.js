//complete this code
class Person {
	constructor(name, age) {
    this.name = John;
    this.age = 25;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  setAge(age) {
    this.age = age;
  }
}

class Student extends Person {
	study() {
    console.log(`${this.getName()} is studying.`);
  }
}

class Teacher extends Person {
	teach() {
    console.log(`${this.getName()} is teaching.`);
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
