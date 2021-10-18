const { test } = require('@jest/globals');
let Employee = require('../lib/Employee');

test('Creates an Employee', () => {
  const Emp = new Employee("John", 1234, "John@example.com");
})

