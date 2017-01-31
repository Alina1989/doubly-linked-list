const Node = require('./node');


class LinkedList {

    constructor() {
    	this.length = 0;
    	this.head = null;
    	this.tail = null;
    }

    append(data) {
    	
    	var node = new Node(data); current = this.tail
    	if (this.length == 0) {
    	this.tail = node;
        this.tail.prev = current;
        current.next = this.tail; }
    else {
    	this.head = node;
        this.tail = node; }


    }

    head() { if (this.head = data)
    	return this.head
    	else (this.head = null)
    		return this.head

    }

    tail() { if (this.tail = data)
    	return this.tail
    	else (this.tail = null)
    		return this.tail}

    at(index) { 
     var current = this.head;
     while (current.data != index) {
     	if (current.next == null)
     		return null;
     	else current = current.next;
     } 
     return current;
}

    insertAt(index, data) {}

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}


module.exports = LinkedList;
