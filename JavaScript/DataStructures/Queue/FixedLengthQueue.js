class FixedLengthQueue {
  constructor(length) {
    this.queue = [];
    this.totalSize = length;
    this.usedSize = 0;
  }

  getSize() {
    return this.totalSize;
  }

  enqueue(item) {
    if (this.usedSize < this.totalSize) {
      this.queue.push(item);
      this.usedSize += 1;
    } else {
      throw new Error();
    }
  }

  dequeue() {
    return this.queue.shift();
  }

  peek() {
    return this.queue[0];
  }
}

module.exports = FixedLengthQueue;
