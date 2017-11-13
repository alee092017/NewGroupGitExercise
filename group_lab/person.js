class Student {
  constructor(options) {
    this.name = options.name || 'John Smith';
    this.age = options.age;
    this.gender = options.gender;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
    console.log(`My gender is ${this.gender}`);
  }
}

var students = [Bart];

let andrea = new Student();
students.push("Captain andrea");

let kai = new Student();
students.push(kai);

