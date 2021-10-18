const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test("Create Intern and check properties and methods", () => {
  const Int = new Intern("John", 1234, "john@example.com", "Camp");

  expect(Int.name).toEqual("John");
  expect(Int.id).toEqual(1234);
  expect(Int.email).toEqual("john@example.com");
  expect(Int.school).toEqual("Camp");

  expect(Int.getName()).toEqual("John");
  expect(Int.getId()).toEqual(1234);
  expect(Int.getEmail()).toEqual("john@example.com");
  expect(Int.getSchool()).toEqual("Camp");
  expect(Int.getRole()).toEqual("Intern");

})
