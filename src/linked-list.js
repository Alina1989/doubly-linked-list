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
        this.head = node;
        
    } else {
        this.head.next = node;
        node.prev = this.head;
        this.head = node;
    }

    this._length++;

    return this;

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

    at(index) {  
    	var temp = this.head; 
    	for ( tempIndex = 0; tempIndex <= this.length; tempIndex ++){
    		if (tempIndex == this.length) {
    			return temp.data
    			break;
    		}
    		 temp = temp.next;
    	}
    
    }

    insertAt(index, data) {
var temp = this.head;
    	for ( tempIndex = 0; tempIndex <= this.length; tempIndex ++){
    		if (tempIndex == this.length) {
    			return temp.data
    			break;
    		}
    		 temp = temp.next;
    		 temp.data = data;
    	}


    }

    isEmpty() { 
    	if (this.length = 0)
    		return true
    	else return false;

    }

    clear() {
    	this._length = 0;
    	this.head = null;
    	this.tail = null;
    }

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}


module.exports = LinkedList;
