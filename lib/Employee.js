class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }

  genHtml() {
    return `<div class="card">
  <div class="card-head">
    <h2>${this.getName()}</h2>
    <h3>${this.getRole()}</h3>
  </div>` + `
  <div class=card-body>
    <div class="row">ID: ${this.getId()}</div>
    <div class="row">Email: <a href="mailto:${this.getEmail()}">${this.getEmail()}</a></div>
  `;
  }

  static getQuestions() {
    return [
      {
        name: "name",
        message: "Please enter the employee's name: ",
      },
      {
        name: "id",
        message: "Please enter the employee's id: ",
      },
      {
        name: "email",
        message: "Please enter the employee's email address",
      }
    ];
  }

}

module.exports = Employee;