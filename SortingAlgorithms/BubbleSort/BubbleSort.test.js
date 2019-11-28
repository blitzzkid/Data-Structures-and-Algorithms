const bubbleSort = require("./BubbleSort");

describe("Should sort a list using bubblesort", () => {
  it("sort a list [1,3,5,10]", () => {
    expect(bubbleSort([1, 3, 5, 10])).toEqual([1, 3, 5, 10]);
  });
  it("sort a list [1,10,3,5]", () => {
    expect(bubbleSort([1, 10, 3, 5])).toEqual([1, 3, 5, 10]);
  });
  it("sort a list [10,1,3,5]", () => {
    expect(bubbleSort([10, 1, 3, 5])).toEqual([1, 3, 5, 10]);
  });
});
