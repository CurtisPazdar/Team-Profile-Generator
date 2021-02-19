const Intern = require("../classes/Intern");

test("Can set school", () => {
  const testValue = "UVM";
  const test = new Intern("Meow", 1, "curtis.pazdar@gmail.com", testValue);
  expect(test.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const test = new Intern("Meow", 1, "curtis.pazdar@gmail.com", "UVM");
  expect(test.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UVM";
  const test = new Intern("Meow", 1, "curtis.pazdar@gmail.com", testValue);
  expect(test.getSchool()).toBe(testValue);
});