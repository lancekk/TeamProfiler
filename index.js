const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const inq = require('inquirer');

const fs = require('fs');

const { ask, writeProfile } = require('./src/makehtml');

ask().then((employees) => writeProfile('./dist/profile.html', employees));

