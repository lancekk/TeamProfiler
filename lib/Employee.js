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

  htmlRows() {
    return `
    <div class="row">ID: ${this.getId()}</div>
    <div class="row">Email: <a href="mailto:${this.getEmail()}">${this.getEmail()}</a></div>
    `;
  }

  cardBody() {
    return `
    <div class="card-body">
      ${this.htmlRows()}
    </div>
    `;
  }

  genHtml() {
    return `<div class="card">
  <div class="card-head">
    <h2>${this.getName()}</h2>
    <h3>${this.getRole()}</h3>
  </div>` + 
  this.cardBody() + 
  "</div>";
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