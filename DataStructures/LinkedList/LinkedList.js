class Node {
  constructor(data, next) {
    if (next && !(next instanceof Node)) {
      throw new Error("not a node");
    } else {
      this.data = data;
      this.next = next;
    }
  }
}

class LinkedList {}

module.exports = { Node, LinkedList };
