var p = 5
var q = 7
var module = p * q
var euler = (p - 1) * (q - 1)
// var e = 5
var e = getE()
// var d = 17
// var dLimit = 100
var d = getD()


function getE (){
    var es = []
    for (var i = 2; i < euler; i++){
        if(areCoprime(i, euler) && (isPrime(i))){
            es.push(i)
            // return i 
        }
    }
    console.log('e', es)
    var min = 0
    var max = es.length - 1
    var length = (max - min + 1)
    var res = Math.floor (Math.random() * length) + min;
    return es[res]
}

function getD(){
    var ds = []
    for (var i =1; i < module; i++){
        var check = (i * e) % euler === 1
        var prime = isPrime(i)
        if (prime && check){
            ds.push(i)
            // return i
        }
    }
    console.log('d', ds);
    var min = 0
    var max = ds.length - 1
    var length = (max - min + 1)
    var res = Math.floor (Math.random() * length) + min;
    return ds[res]
}

function isPrime (num){
    var flag = true
    for(var i = 2; i < num; i++){
        if (num % i === 0){
        flag = false
        }
    }
    return flag
}

function areCoprime (a, b) {
    var num;
    while ( b ) {
        num = a % b;
        a = b;
        b = num;
    }
    if (Math.abs(a) == 1) {
        return true;
    }else return false
}

var myOpenkey = {e: e, module: module}
var myClosedKey = {d: d, module: module}

var message = 19
var encMessage = (Math.pow(message, myOpenkey.e)) % myOpenkey.module
var decMessage = (Math.pow(encMessage, myClosedKey.d)) % myClosedKey.module
console.log('euler' , euler, 'module', module)
console.log('e', e, 'd', d);
console.log(myOpenkey, myClosedKey);
console.log( message, encMessage, decMessage);


// console.log(isPrime(71));

