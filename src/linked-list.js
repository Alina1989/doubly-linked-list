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
        return this._tail;
}

    head() { return this._head.data;
    	

    }

    tail() { return this._tail.data;}

    at(index) { var i = 0;
     var current = this._head;
     while (i != index) {
     	if (current.next == null)
     		return null;
     	else 
     		current = current.next;
     	i++;
     } 
     return current.data
}

    insertAt(index, data) {var i = 0;
     var current = this._head;
     while (i = index) {
     	if (current.data = data);
     		return current = current.next;
     	i++;
     } 
     }

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}


module.exports = LinkedList;
