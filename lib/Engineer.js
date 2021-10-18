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

  genHtml() {
    return super.genHtml() + `
    <div class="row">Github: <a href="https://github.com/${this.getGithub()}" target="_blank" rel="noopener noreferrer">${this.getGithub()}</div>
  </div>
</div>`;
  }
}

module.exports = Engineer;
