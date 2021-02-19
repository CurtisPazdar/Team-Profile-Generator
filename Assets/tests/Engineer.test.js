const Engineer = require("../classes/Engineer");

test("Can set GitHUb account", () => {
  const testValue = "Curtis Pazdar";
  const test = new Engineer("Meow", 1, "curtis.pazdar@gmail.com", testValue);
  expect(test.gitHub).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const test = new Engineer("Meow", 1, "curtis.pazdar@gmail.com", "Curtis Pazdar");
  expect(test.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "Curtis Pazdar";
  const test = new Engineer("Meow", 1, "curtis.pazdar@gmail.com", testValue);
  expect(test.getGithub()).toBe(testValue);
});