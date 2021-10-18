let Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getRole() {
    return "Engineer";
  }
  getGithub() {
    return this.github;
  }

  static getQuestions() {
    return Employee.getQuestions().concat([
      {
        name: "github",
        message: "Please enter the employee's github account name"
      }]);

  }

  htmlRows() {
    return super.htmlRows() + `
    <div class="row">
      Github: <a href="https://github.com/${this.getGithub()}" target="_blank" rel="noopener noreferrer">${this.getGithub()}</a>
    </div>
    `;
  }

}

module.exports = Engineer;
