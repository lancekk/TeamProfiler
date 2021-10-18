const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test("Create an engineer and check properties and methods", () => {
  const Eng = new Engineer("John", 1234, "john@example.com", "example");

  // properties
  expect(Eng.name).toEqual("John");
  expect(Eng.id).toEqual(1234);
  expect(Eng.email).toEqual("john@example.com");
  expect(Eng.github).toEqual("example");

  // methods
  expect(Eng.getName()).toEqual(Eng.name);
  expect(Eng.getId()).toEqual(Eng.id);
  expect(Eng.getEmail()).toEqual(Eng.email);
  expect(Eng.getRole()).toEqual("Engineer");
  expect(Eng.getGithub()).toEqual(Eng.github);
});
