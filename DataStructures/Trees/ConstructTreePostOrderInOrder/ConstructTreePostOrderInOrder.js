class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

const treeBuilder = (
  inOrderArray,
  postOrderArray,
  inOrderStart,
  inOrderEnd,
  postOrderIndex
) => {
  if (inOrderStart > inOrderEnd) {
    return;
  }

  const node = new Node(postOrderArray[postOrderIndex[0]]);
  postOrderIndex[0] -= 1;

  if (inOrderStart === inOrderEnd) {
    return node;
  }

  const inOrderIndex = searchForIndexOfNode(
    inOrderArray,
    inOrderStart,
    inOrderEnd,
    node.val
  );

  node.right = treeBuilder(
    inOrderArray,
    postOrderArray,
    inOrderIndex + 1,
    inOrderEnd,
    postOrderIndex
  );
  node.left = treeBuilder(
    inOrderArray,
    postOrderArray,
    inOrderStart,
    inOrderIndex - 1,
    postOrderIndex
  );
};

const searchForIndexOfNode = (array, start, end, value) => {
  let i = 0;
  for (i = start; i < end; i++) {
    if (array[i] === value) {
      break;
    }
  }
  return i;
};

const constructTree = (inOrderArray, postOrderArray, numberOfLevels) => {
  const postOrderIndex = numberOfLevels - 1;
  return treeBuilder(
    inOrderArray,
    postOrderArray,
    0,
    numberOfLevels - 1,
    postOrderIndex
  );
};

module.exports = constructTree;
