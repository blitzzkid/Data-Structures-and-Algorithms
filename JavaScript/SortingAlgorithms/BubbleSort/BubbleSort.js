const bubbleSort = array => {
  for (let i = 0; i < array.length; i++) {
    let swappedAtLeastOnce = false;
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
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
  const temp = firstElement;
  firstElement = secondElement;
  secondElement = temp;
};

module.exports = bubbleSort;
