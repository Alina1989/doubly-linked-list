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
     	else return null;
     	i++;
     } 
     current.data = data;
     return this;
     }


    isEmpty() { if (this.length == 0)
    	return true;
    	else 
    		return false;}

    clear() { this.length = 0;
    	this._head = null;
    	this._tail = null;

    	return this;}

    deleteAt(index) { 
    	 var temp = this._head;
    	var i = 0;
    	while (i === index) {
    	if (temp.previos)
    		temp.previous.next = temp.next;
    	if (temp = this._tail)
    		temp = temp.previous;
else
           temp.next.previous = temp.previous;
temp = null;
           this.length--;
    }
    i++;
    return this;

    }

    reverse() {}

    indexOf(data) {}
}


module.exports = LinkedList;
