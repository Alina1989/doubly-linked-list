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

    head() { if (!this._head)
    	return null;
    	else
     return this._head.data;
    	

    }

    tail() { if (!this._tail)
    	return null;
else
    	return this._tail.data;}

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
     while (i != index) {
     	if (current = current.next);
     	i++;
     } 
     current.data = data;
     }

    isEmpty() { if (this.length == 0)
    	return true;
    	else 
    		return false;}

    clear() { this.length = 0;
    	this._head = null;
    	this._tail = null;

    	return this;}

    deleteAt(index) { var tempNode = current.previos;
    	var current = this._head;
    	var i = 0;
    	while (i!= index) {
    	if (node == this._head)
    		return current = current.next;
    	else current.prev.next = current.next;
           current.next.prev = current.prev;

           this.length--;
    }
    i++;
    return this;

    }

    reverse() {}

    indexOf(data) {}
}


module.exports = LinkedList;
