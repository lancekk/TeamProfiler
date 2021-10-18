const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test("Create Manager and check properties and methods", () => {
  const Man = new Manager("John", 1234, "john@example.com", 401);

  expect(Man.name).toEqual("John");
  expect(Man.id).toEqual(1234);
  expect(Man.email).toEqual("john@example.com");
  expect(Man.officeNumber).toEqual(401);

  expect(Man.getName()).toEqual(Man.name);
  expect(Man.getId()).toEqual(Man.id);
  expect(Man.getEmail()).toEqual(Man.email);
  expect(Man.getRole()).toEqual("Manager");
  expect(Man.getOfficeNumber()).toEqual(Man.officeNumber);
})
