const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

 class Queue {
  constructor() {
    this.object = {};
    this.arr = [];
  }

  get size() {
    const arr = [];
    let obj = this.object;
    while (obj !== null) {
      arr.push(obj.value);
      obj = obj.next;
    }
    return arr.length;
  }

  enqueue(element) {
    this.arr.reverse().push(element);
    const param = this.arr.reverse().reduce((acc, cur) => {
      if (acc) {
        const node = new ListNode(cur);
        node.next = acc;
        return node;
      }
      return new ListNode(cur);
    }, null);
    this.object = param;
  }

  dequeue() {
    const el = this.arr.reverse().shift();
    const param = this.arr.reverse().reduce((acc, cur) => {
      if (acc) {
        const node = new ListNode(cur);
        node.next = acc;
        return node;
      }
      return new ListNode(cur);
    }, null);
    this.object = param;
    return el;
  }
}
module.exports = Queue;
