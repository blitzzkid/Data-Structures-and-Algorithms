const Queue = require("./Queue");

describe("Should mainipulate elements in a queue", () => {
  it("can enqueue and dequeue an element", () => {
    const queue = new Queue();
    queue.enqueue("apple");
    expect(queue.dequeue()).toEqual("apple");
    expect(queue.dequeue()).toBeUndefined();
  });
  it("maintains the order when enqueue and dequeue elements", () => {
    const queue = new Queue();
    queue.enqueue("apple");
    queue.enqueue("banana");
    queue.enqueue("citrus");
    expect(queue.dequeue()).toEqual("apple");
    expect(queue.dequeue()).toEqual("banana");
    expect(queue.dequeue()).toEqual("citrus");
    expect(queue.dequeue()).toBeUndefined();
  });
  it("can peek at the next item", () => {
    const queue = new Queue();
    expect(queue.peek()).toBeUndefined();
    queue.enqueue("apple");
    expect(queue.peek()).toEqual("apple");
    queue.enqueue("banana");
    expect(queue.peek()).toEqual("apple");
    queue.enqueue("citrus");
    expect(queue.peek()).toEqual("apple");
  });
});
