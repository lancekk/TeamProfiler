const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }

  static getQuestions() {
    return [
      ...Employee.getQuestions(),
      {
        name: "officeNumber",
        message: "Please enter the employee's office number"
      }
    ]
  }

  htmlRows() {
    return super.htmlRows() + `
      <div class="row">Office Number: ${this.getOfficeNumber()}</div>
    `;
  }

}

module.exports = Manager;
