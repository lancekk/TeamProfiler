const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

const fs = require('fs');

const inq = require('inquirer');

const ask = async () => {
  const repeat_q = {
    name: "repeat",
    type: "list",
    message: "Add an employee or quit",
    choices: [
      {
        name: "Add Engineer",
        value: "Engineer",
        short: "Engineer"
      },
      {
        name: "Add Intern",
        value: "Intern",
        short: "Intern"
      },
      {
        name: "Finish",
        value: "Finish",
        short: "Finish"
      }
    ]
  };

  let mAnswers = await inq.prompt(Manager.getQuestions());

  let man = new Manager(mAnswers.name, mAnswers.id, mAnswers.email, mAnswers.officeNumber);
  let employees = [man];

  let go = true;
  while(go) {
    let { repeat } = await inq.prompt(repeat_q);
    console.log(repeat);
    if (repeat === "Finish") {
      go = false;
    } else if (repeat === "Engineer") {
      let ans = await inq.prompt(Engineer.getQuestions());
      let e = new Engineer(ans.name, ans.id, ans.email, ans.github);
      employees.push(e);
    } else if (repeat === "Intern") {
      let ans = await inq.prompt(Intern.getQuestions());
      let e = new Intern(ans.name, ans.id, ans.email, ans.school);
      employees.push(e);
    }
  }

  return employees;

}

const htmlHead = () => {
  return `
  <head>
    <link rel="stylesheet" href="./style.css">
  </head>`;
}

const writeProfile = (fname, employees) => {
  let data = `<html>
  ${htmlHead()}
  <body>
  <header><h1>My Team</h1></header>\n`;

  data += `<main>\n`;
  data += `<div class="cards">\n`;
  for (e of employees) {
    data += e.genHtml();
  }
  data += `\n</div>`;
  data += `</main>\n`;
  data += "</body></html>";

  fs.writeFileSync(fname, data);
}

module.exports = {
  ask: ask,
  writeProfile: writeProfile,
}
