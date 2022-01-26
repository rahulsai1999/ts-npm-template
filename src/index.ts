class Greeter {
  private greeting: string = "Hello";
  private name: string;

  constructor(name: string) {
    if (name.length < 3 || name.length > 32) {
      throw new Error("Name must be 5-32 characters long");
    }
    this.name = name;
  }

  defaultGreeting() {
    return this.greeting + ` ${this.name}`;
  }
}

export default Greeter;
