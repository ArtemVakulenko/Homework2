var IList = require("./IList");

var AList = function (capacity) {
    IList.call(this, capacity);
    this.size = 0;
    this.offset = 0;
    this.DEFAULT_CAPACITY = 10;
    this.array = (() => {
        if (!this.capacity) {
            return new Array(this.DEFAULT_CAPACITY);
        } else if (typeof this.capacity === "number") {
            return new Array(this.capacity);
        } else if (Array.isArray(this.capacity)) {
            this.size = this.capacity.length;
            return this.capacity;
        } else {
            throw new Error("Exception message");
        }
    })();

    this.ensureCapacity = function() {
        var newArray = new Array(this.array.length + Math.floor(this.array.length * 1.5));
        for (var i = 0; i < this.array.length; i++) {
            newArray[i] = this.array[i];
        }
        this.array = newArray;
    };

    this.addValue = function(value) {
        this.array[this.offset++] = value;
        this.size++;
    };
};

AList.prototype = Object.create(IList.prototype);
AList.prototype.constructor = AList;

AList.prototype.getSize = function() {
    return this.size;
};
AList.prototype.add = function(value) {
    if (this.size === this.array.length) {
        this.ensureCapacity();
        this.addValue(value);
    } else {
        if (this.array[this.offset]) {
            this.offset++;
            this.add(value);
        } else {
            this.addValue(value);
        }
    }
};
AList.prototype.set = function(value, index) {
    if (index < 0 || index > this.array.length - 1) {
        return 'Array Index Is Out Of Bounds'
    }
    if (!this.array[index]) {
        this.array[index] = value;
        this.size++;
    } else {
        this.array[index] = value;
    }
};
AList.prototype.get = function (index) {
    if(typeof index !== 'undefined'){
        if (index >= 0 && index < this.array.length){
            if( typeof this.array[index] !== "undefined"){
                return this.array[index]
            }else return 'element under this index is undefined'
        }else return "index is out of bounds"
    }else return "specify index"
   
}
AList.prototype.remove = function (value){
    if (typeof value !== "undefined"){
        for(var i = 0; i < this.array.length; i++){
            if (this.array[i] === value){
                this.size--
                this.array[i] = undefined
            }else return "there is no value in array"
        }
    }else return "specify value"
}
AList.prototype.toArray = function(){
    var arr = []
    for(var i = 0; i < this.array.length; i++){
        if (this.array[i] === undefined){
           continue
        } else{
            arr.push(this.array[i])
        }
    }
    return arr
}
AList.prototype.clear = function (){
    this.array = new Array (this.DEFAULT_CAPACITY)
    this.size = 0
}
AList.prototype.contains = function (value){
    if(typeof value !== "undefined"){
        for(var i = 0; i < this.array.length + 1; i++){
        if (this.array[i] === value){
            return true
        }
    }
    return false
}else return "specify value"
    
}
AList.prototype.minValue = function (){
        var minElement = this.array[0]
        for(var i = 0; i < this.array.length; i++){
            if (minElement > this.array[i]) {
                minElement = this.array[i]
            }
        }
        return minElement
}
AList.prototype.maxValue = function (){
    var maxElement = this.array[0]
        for(var i = 0; i < this.array.length; i++){
            if (maxElement < this.array[i]) {
                maxElement = this.array[i]
            }
        }
        return maxElement
}
AList.prototype.minIndex = function(){
    var indexOfMinElement = 0
    for(var i = 0; i < this.array.length; i++){
        if (this.array[i] < this.array[0] 
            && this.array[i] !== this.array[indexOfMinElement]) {
            indexOfMinElement = i
        }
    }
    return indexOfMinElement
}
AList.prototype.maxIndex = function(){
    var indexOfMaxElement = 0
    for(var i = 0; i < this.array.length; i++){
        if (this.array[i] > this.array[indexOfMaxElement] && this.array[i] !== this.array[indexOfMaxElement]) {
            indexOfMaxElement = i
        }
    }
    return indexOfMaxElement
}
AList.prototype.reverse = function(){
    var reversedArray = []
    for (var i = 0; i < this.array.length; i++){
        reversedArray[i] = this.array[this.array.length - i - 1]
    }
    this.array = reversedArray
}
module.exports = AList;