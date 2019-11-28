const binarySearch = require("./BinarySearch");

const data = [
  {
    id: 1,
    name: "Alice"
  },
  {
    id: 7,
    name: "Bob"
  },
  {
    id: 11,
    name: "Charlie"
  },
  {
    id: 13,
    name: "Tom"
  },
  {
    id: 15,
    name: "Harry"
  }
];

describe("Should find the person through a binary search", () => {
  it("should find the person Bob and id 7", () => {
    expect(binarySearch(data, data[1].id)).toEqual(data[1]);
  });
  it("should find the person Alice and id 1", () => {
    expect(binarySearch(data, data[0].id)).toEqual(data[0]);
  });
  it("should find the person Charlie and id 11", () => {
    expect(binarySearch(data, data[2].id)).toEqual(data[2]);
  });
  it("should find the person Tom and id 13", () => {
    expect(binarySearch(data, data[3].id)).toEqual(data[3]);
  });
  it("should find the person Harry and id 15", () => {
    expect(binarySearch(data, data[4].id)).toEqual(data[4]);
  });
  describe("Should not find a person who doesn't exist", () => {
    it("id of 8 doesn't exist", () => {
      expect(binarySearch(data, 8)).toEqual("Does not exist");
    });
  });
});
