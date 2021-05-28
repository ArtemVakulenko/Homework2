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
      return false;
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
  
LList.prototype.toString = function () {
    if (this.size === 0) {
      return "";
    }
    var string = "";
    var tempNode = this.root;
    while (tempNode !== null) {
      string += tempNode.value;
      if (tempNode.next === null) {
        break;
      }
      string += ",";
      tempNode = tempNode.next;
    }
    return string;
};

LList.prototype.contains = function (value) {
    var tempNode = this.root;
    while (tempNode !== null) {
      if (tempNode.value === value) {
        return true;
      }
      tempNode = tempNode.next;
    }
    return false;
};

LList.prototype.minValue = function () {
    if (this.size === 0) {
      return -1;
    }
    var tempNode = this.root;
    var minValue = this.root.value;
    while (tempNode !== null) {
      if (minValue > tempNode.value) {
        minValue = tempNode.value;
      }
      tempNode = tempNode.next;
    }
    return minValue;
};

LList.prototype.maxValue = function () {
    if (this.size === 0) {
      return -1;
    }
    var tempNode = this.root;
    var maxValue = this.root.value;
    while (tempNode !== null) {
      if (maxValue < tempNode.value) {
        maxValue = tempNode.value;
      }
      tempNode = tempNode.next;
    }
    return maxValue;
};

LList.prototype.minIndex = function () {
    if (this.size === 0) {
      return -1;
    }
    var tempNode = this.root;
    var minValue = this.root.value;
    var index = 0;
    var count = 0;
    while (tempNode !== null) {
      if (minValue > tempNode.value) {
        index = count;
        minValue = tempNode.value;
      }
      tempNode = tempNode.next;
      count++;
    }
    return index;
};

LList.prototype.maxIndex = function () {
    if (this.size === 0) {
      return -1;
    }
    var tempNode = this.root;
    var minValue = this.root.value;
    var index = 0;
    var count = 0;
    while (tempNode !== null) {
      if (minValue < tempNode.value) {
        index = count;
        minValue = tempNode.value;
      }
      tempNode = tempNode.next;
      count++;
    }
    return index;
};

LList.prototype.reverse = function () {
    if (this.root === null) {
      return;
    }
    this.root = this.__reverseList(this.root);
};

module.exports = LList;