import Greeter from "../index";

test("Test constructor", () => {
  expect(() => {
    const gr = new Greeter("ab");
    gr.defaultGreeting();
  }).toThrow();
});

test("Test if default greeting works", () => {
  const gr = new Greeter("John");
  const greeting = gr.defaultGreeting();
});
