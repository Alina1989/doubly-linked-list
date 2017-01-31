const Node = require('./node');


class LinkedList {

    constructor() {
    	this.length = 0;
    	this._head = null;
    	this._tail = null;
    }

    append(data) {

           var node = new Node (data), tempNode = this._tail;
        if (this.length) { 
            this._tail = node;
            this._tail.prev = tempNode;
            this._tail.prev.next = this._tail;
        } else {
            this._tail = node;
            this._head = node;
        }
        this.length++;
        return this._tail;
}

        head() {
        return this._head ? this._head.data : null;
    }

    tail() {
        return this._tail ? this._tail.data : null;
    }

    at(index) {

        let tempNode = this._head, tempIndex = 0;
        while (tempNode) {
            if (index === tempIndex) { return tempNode.data;}
            tempNode = tempNode.next;
            tempIndex++;
        }
    }

    insertAt(index, data) {
        let tempNode = this._head, tempIndex = 0;
        while (tempNode) {
            if (index === tempIndex) {
                tempNode.data = data;
                break;
            }
            tempNode = tempNode.next;
            tempIndex++;
        }
        return this;
}
    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}


module.exports = LinkedList;
