const { test, expect } = require('@jest/globals');
let Employee = require('../lib/Employee');

test('Creates an Employee', () => {
  const Emp = new Employee("John", 1234, "John@example.com");

  // check properties
  expect(Emp.name).toEqual("John");
  expect(Emp.id).toEqual(1234);
  expect(Emp.email).toEqual("John@example.com");

  // check methods
  expect(Emp.getName()).toEqual(Emp.name);
  expect(Emp.getId()).toEqual(Emp.id);
  expect(Emp.getEmail()).toEqual(Emp.email);
  expect(Emp.getRole()).toEqual("Employee");
})

