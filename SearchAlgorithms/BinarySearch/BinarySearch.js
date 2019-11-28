const binarySearch = (array, itemId) => {
  const midPoint = Math.floor(array.length / 2);
  if (array[midPoint].id === itemId) {
    return array[midPoint];
  }

  if (array[midPoint].id !== itemId && array.length === 1) {
    return "Does not exist";
  }

  if (array[midPoint].id < itemId) {
    const smallerIdArray = array.slice(midPoint);
    return binarySearch(smallerIdArray, itemId);
  } else if (array[midPoint].id > itemId) {
    const biggerIdArray = array.slice(0, midPoint);
    return binarySearch(biggerIdArray, itemId);
  }
};

module.exports = binarySearch;
