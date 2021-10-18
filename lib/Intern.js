const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }

  static getQuestions() {
    return [
      ...Employee.getQuestions(),
      {
        name: "school",
        message: "Please enter the employee's school"
      }
    ]
  }

  genHtml() {
    return super.genHtml() + `
    <div class="row">School: ${this.getSchool()}</div>
  </div>
</div>`;
  }

}

module.exports = Intern
