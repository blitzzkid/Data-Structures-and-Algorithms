const Stack = require("./Stack");

describe("Should manipulate elements in a stack", () => {
  it("should push an item to the top of the and pop of the item at the top of the stack", () => {
    const stack = new Stack();
    stack.push("apple");
    expect(stack.peek()).toEqual("apple");
  });
  it("should maintain the order of the stack", () => {
    const stack = new Stack();
    stack.push("apple");
    stack.push("banana");
    stack.push("citrus");
    expect(stack.pop()).toEqual("citrus");
    expect(stack.pop()).toEqual("banana");
    expect(stack.pop()).toEqual("apple");
  });
  it("should be able to peek at the top of the stack", () => {
    const stack = new Stack();
    expect(stack.peek()).toBeUndefined();
    stack.push("apple");
    expect(stack.peek()).toEqual("apple");
    stack.push("banana");
    expect(stack.peek()).toEqual("banana");
  });
});
