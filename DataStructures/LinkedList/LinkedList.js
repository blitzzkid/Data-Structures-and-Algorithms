class Node {
  constructor(value, node = null) {
    if (node && !(node instanceof Node)) {
      throw new Error("not a node");
    } else {
      this.value = value;
      this.next = node;
    }
  }
}

class LinkedList {}

module.exports = { Node, LinkedList };
