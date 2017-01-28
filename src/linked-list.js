const Node = require('./node');

class LinkedList {
    constructor() {
    	this._length = 0;
    	this.head = null;
    	this.tail = null;
    }

    append(data) {
    	var node = new Node(data);

    if (this._length) {
        this.tail.next = node;
        node.previous = this.tail;
        this.tail = node;
    } else {
        this.head = node;
        this.tail = node;
    }

    this._length++;

    return node;

    }

    head() { 

    	if (this.head = data)
    		return this.head 
    		else (this.head = null)
    	return this.head }

    tail() {

    	if (this.tail = data)
    		return this.tail 
    		else (this.tail = null)
    	return this.tail }


    }

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
