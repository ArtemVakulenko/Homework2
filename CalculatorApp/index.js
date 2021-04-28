var screen = document.getElementById('screen');
var btnC = document.getElementById('CLEAR');
var btnDIVIDE = document.getElementById('DIVIDE');
var btnNINE = document.getElementById('NINE');
var btnEIGHT = document.getElementById('EIGHT');
var btnSEVEN = document.getElementById('SEVEN');
var btnMULTIPLY = document.getElementById('MULTIPLY');
var btnSIX = document.getElementById('SIX');
var btnFIVE = document.getElementById('FIVE');
var btnFOUR = document.getElementById('FOUR');
var btnMINUS = document.getElementById('MINUS');
var btnTHREE = document.getElementById('THREE');
var btnTWO = document.getElementById('TWO');
var btnONE = document.getElementById('ONE');
var btnPLUS = document.getElementById('PLUS');
var btnZERO = document.getElementById('ZERO');
var btnPOINT = document.getElementById('POINT');
var btnEQUALS = document.getElementById('EQUALS');
var btnENG = document.getElementById('ENG');
var engPanel = document.querySelector('.engPanel');
var btnOPENBRACKET = document.getElementById('OPENBRACKET');
var btnCLOSEDBRACKET = document.getElementById('CLOSEDBRACKET');
var res = ''

btnC.addEventListener('click', clearFunc)
btnENG.addEventListener('click', toggleEngPanel)
btnCLOSEDBRACKET.addEventListener('click', function(){
    add(')')
})
btnOPENBRACKET.addEventListener('click', function(){
    add('(')
})
btnDIVIDE.addEventListener('click', function(){
    add('/')
})
btnNINE.addEventListener('click', function(){
    add('9')
})
btnEIGHT.addEventListener('click',function(){
    add('8')
})
btnSEVEN.addEventListener('click', function(){
    add('7')
})
btnMULTIPLY.addEventListener('click', function(){
    add('*')
})
btnSIX.addEventListener('click', function(){
    eval('6')
})
btnFIVE.addEventListener('click', function(){
    add('5')
})
btnFOUR.addEventListener('click', function(){
    add('4')
})
btnMINUS.addEventListener('click', function(){
    add('-')
})
btnTHREE.addEventListener('click', function(){
    add('3')
})
btnTWO.addEventListener('click', function(){
    add('2')
})
btnONE.addEventListener('click', function(){
    add('1')
})
btnPLUS.addEventListener('click',function(){
    add('+')
})
btnZERO.addEventListener('click', function(){
    add('0')
})
btnPOINT.addEventListener('click',function(){
    add('.')
})
btnEQUALS.addEventListener('click', evaluate)



function clearFunc (){
    screen.value = ''
    res = ''
}


function add (str){
    screen.value += str
    res += str
}
function evaluate(){
    var ans = eval(res)
    screen.value = ans
}
function toggleEngPanel(){
    engPanel.classList.toggle('hide')
}