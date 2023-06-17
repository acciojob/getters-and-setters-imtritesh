//complete this code
class Person {
	constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  getName() {
    return this._name;
  }

  getAge() {
    return this._age;
  }

  setName(name) {
    this._name = name;
  }

  setAge(age) {
    this._age = age;
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
