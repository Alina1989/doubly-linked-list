const Node = require('./node');


class LinkedList {

    constructor() {
    	this.length = 0;
    	this._head = null;
    	this._tail = null;
    }

    append(data) {

    	        var node = new Node (data), current = this._tail;
        if (this.length) {
            this._tail = node;
            this._tail.prev = current;
            this._tail.prev.next = this._tail;
        } else {
            this._tail = node;
            this._head = node;
        }
        this.length++;
        return this;

    }

    head() { if (this._head = data)
    	return this._head
    	else (this._head = null)
    		return this._head

    }

    tail() { if (this._tail = data)
    	return this._tail
    	else (this._tail = null)
    		return this._tail}

    at(index) { 
     var current = this._head;
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
