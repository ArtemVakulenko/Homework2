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
                var removedValue = this.array[i]
                this.array[i] = undefined
                return removedValue
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
AList.prototype.toString = function(){
    var arr = this.toArray()
    var res = ''
    for(var i = 0; i < arr.length; i++){
        res += arr[i]
    }
    return res
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
AList.prototype.halfReverse = function(){
   var arr = this.toArray()
    if(arr.length % 2 === 0 ){
        var swapArray = []
	var i2 = (arr.length / 2) ;
	
	for (var i = 0; i < arr.length; i++){
		if (i < i2){
		swapArray[(arr.length/2)+ i ] = arr[i]
	}
	
		else {
			swapArray[ i-(arr.length/2) ] = arr[i]
		}
	}
    this.array = swapArray
    }else {
        var midIndex = Math.floor(arr.length / 2)
        var mid = arr[midIndex]
        var swapArray = new Array(arr.length)
        for(var i = 0; i < midIndex; i++){
                swapArray[midIndex + 1 + i] = arr[i]
        }
        for(var i = arr.length; i > midIndex; i--){
            swapArray[i - midIndex - 1] = arr[i]
        }
        swapArray[midIndex] = mid
        this.array = swapArray
    }
}
// AList.prototype.retainAll = function(array){
//     if(Array.isArray(array)){
//         var initArr = this.toArray()
//         for(var i = 0; i < initArr.length; i++){

//         }
//     }else return 'put array in agruments'
// }
// AList.prototype.removeAll = function(array){
//     if(Array.isArray(array)){
//         var initArr = this.toArray()
//         for(var i = 0; i < initArr.length; i++){

//         }
//     }else return 'put array in agruments'
// }

AList.prototype.sort = function(){
    var array = this.toArray()
    var res = quickSort(array)
    function quickSort(arr) {
        if (arr.length < 2) return arr;
        let pivot = arr[0];
        const left = [];
        const right = [];
          
        for (let i = 1; i < arr.length; i++) {
          if (pivot > arr[i]) {
            left.push(arr[i]);
          } else {
            right.push(arr[i]);
          }
        }
        return quickSort(left).concat(pivot, quickSort(right));
      }
      return res
}
AList.prototype.print = function(){
    var res = this.toArray()
    for(var i = 0; i < res.length; i++){
        console.log(res[i]);
    }
}
module.exports = AList;