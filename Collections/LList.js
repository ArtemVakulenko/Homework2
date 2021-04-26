var IList = require("./IList");

var LList = function () {
    this.size = 0;
    this.root = null;
    this.Node = function (value) {
        this.value = value;
        this.next = null;
    }
};
LList.prototype = Object.create(IList.prototype);
LList.prototype.constructor = LList;

LList.prototype.clear = function () {
    this.size = 0;
    this.root = null;
};
LList.prototype.getSize = function () {
    return this.size;
};
LList.prototype.add = function (value) {
    var newNode = new this.Node(value);
    this.size++;
    if (this.root === null) {
        this.root = newNode;
    } else {
        var tempNode = this.root;
        while (tempNode.next !== null) {
            tempNode = tempNode.next;
        }
        tempNode.next = newNode;
    }
};
LList.prototype.toArray = function () {
    var array = new Array(this.size);
    var index = 0;
    var tempNode = this.root;
    while (tempNode !== null) {
        array[index++] = tempNode.value;
        tempNode = tempNode.next;
    }
    return array;
};
LList.prototype.remove = function (value) {
    if (this.root === null) {
        return;
    }
    var tempNode = this.root;
    var prevNode = null
    while (tempNode !== null) {
        if (tempNode.value === value) {
            if(prevNode === null){
                this.root = tempNode.next
            }else {
                prevNode.next = tempNode.next
            }
            this.size--
            return tempNode.value
        }else {
            prevNode = tempNode
            tempNode = tempNode.next
        }
    }
};
LList.prototype.set = function (value, index){
    var newNode = this.Node(value)
    if(index = 0){
        return this.root = newNode
    }
    if(index > this.size){
        return 'NO'
    }
    var indexCount = 0
    var currentNode = this.root
    while(currentNode.next !== null){
        currentNode = currentNode.next
        indexCount++
        if(indexCount === index){
            currentNode = newNode
            break
        }
    }
}
module.exports = LList;