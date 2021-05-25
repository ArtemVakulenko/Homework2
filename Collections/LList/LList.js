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

LList.prototype.set = function (value, index) {
    var newNode = new this.Node(value)
    if(index === 0){
        this.root = newNode
        return
            }
    if (typeof value !== "number" || typeof index !== "number") {
      return "value and index must be only numbers"
    }
    if (index > this.size) {
      return "invalid index"
    }
    var tempNode = this.root
    var count = 0
    while (count !== index) {
      tempNode = tempNode.next
      count++
    }
    tempNode.value = value
};

LList.prototype.get = function (index) {
    if (index > this.size) {
        return "invalid index"
    }
    var tempNode = this.root
    var count  = 0
    while (tempNode !== null){
        if(count === index){
            return tempNode.value
        }
        tempNode = tempNode.next
        count++
    }
};

LList.prototype.remove = function (value) {
    if (typeof value !== "number" || arguments.length > 1) {
      return "work only with one number argument"
    }
    var tempNode = this.root;
    var prevNode = null;
    while (tempNode !== null) {
      if (tempNode.value === value) {
        if (prevNode === null) {
          this.root = tempNode.next;
        } else {
          prevNode.next = tempNode.next;
        }
        this.size--;
        return tempNode.value;
      } else {
        prevNode = tempNode;
        tempNode = tempNode.next;
      }
    }
  };

module.exports = LList;