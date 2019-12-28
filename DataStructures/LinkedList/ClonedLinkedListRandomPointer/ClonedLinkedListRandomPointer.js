class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
    this.random = null;
  }
}

const cloneLinkedList = originalHead => {
  let currentNode = originalHead;
  while (currentNode) {
    const copyNode = Node(currentNode.val);
    copyNode.next = currentNode.next;
    currentNode.next = copyNode;
    currentNode = currentNode.next.next;
  }

  currentNode = originalHead;
  while (currentNode) {
    currentNode.next.random = currentNode.random.next;
    currentNode = currentNode.next.next;
  }

  currentNode = originalHead;
  const duplicateHead = originalHead.next;
  while (currentNode.next) {
    const temp = currentNode.next;
    currentNode.next = currentNode.next.next;
    currentNode = temp;
  }

  return duplicateHead;
};

module.exports = cloneLinkedList;
