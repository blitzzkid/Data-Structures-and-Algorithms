const bubbleSort = array => {
  for (let i = 0; i < array.length; i++) {
    let swappedAtLeastOnce = false;
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
        swappedAtLeastOnce = true;
      }
    }
    if (!swappedAtLeastOnce) {
      break;
    }
  }
  return array;
};

const swap = (array, firstElement, secondElement) => {
  const temp = array[firstElement];
  array[firstElement] = array[secondElement];
  array[secondElement] = temp;
};

module.exports = bubbleSort;
