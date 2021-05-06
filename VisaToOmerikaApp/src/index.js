var nameArray = ['1', '2', '3', '4','5', '6', '7', '8', '9', '10',]
var balanceArray = [7000, 7000, 7000, 7000, 7000, 7000, 1000, 1000, 1000, 1000]
var ageArray = [20, 20, 20, 20, 20, 20, 20, 70, 70, 70]
var docArray = [true, true, true, true, true, true, true, true, false, false]
var engArray = [true, true, true, false, false, false, false, false, false, false]

var errorText = document.getElementById('error')
var nameInput = document.getElementById('name')
var generateNameBtn = document.getElementById('generateName')

var balanceInput = document.getElementById('balance')
var generateBalanceBtn = document.getElementById('generateBalance')

var ageInput = document.getElementById('age')
var generateAgeBtn = document.getElementById('generateAge')

var engInput = document.getElementById('english')
var generateEnglishBtn = document.getElementById('generateEnglish')

var documentInput = document.getElementById('document')
var generateDocumentBtn = document.getElementById('generateDocument')

var generateAllButton =  document.getElementById('generateAllButton')
var addCandidateButton =  document.getElementById('addCandidateButton')
var initButton =  document.getElementById('initButton')
var raceButton =  document.getElementById('raceButton')
var clearButton =  document.getElementById('clearButton')

var winnerText =  document.getElementById('winner')

function getRandomNum(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
generateNameBtn.addEventListener('click', function(){
    nameInput.value = nameArray[getRandomNum(0, 9)]
})
generateBalanceBtn.addEventListener('click', function(){
    balanceInput.value = balanceArray[getRandomNum(0, 9)]
})
generateAgeBtn.addEventListener('click', function(){
    ageInput.value = ageArray[getRandomNum(0, 9)]
})
generateDocumentBtn.addEventListener('click', function(){
    documentInput.value = docArray[getRandomNum(0, 9)]
})
generateEnglishBtn.addEventListener('click', function(){
    engInput.value = engArray[getRandomNum(0, 9)]
})

generateAllButton.addEventListener('click', function(){
    nameInput.value = nameArray[getRandomNum(0, 9)]
    balanceInput.value = balanceArray[getRandomNum(0, 9)]
    ageInput.value = ageArray[getRandomNum(0, 9)]
    documentInput.value = docArray[getRandomNum(0, 9)]
    engInput.value = engArray[getRandomNum(0, 9)]
})

var candidatesForShow = []
var candidatesForRace = []

function Candidate(name, balance, age, docs, eng){
    this.name = name
    this.balance = balance
    this.age = age
    this.docs = docs
    this.eng = eng
}
addCandidateButton.addEventListener('click', function(){
    if(!nameInput.value) {
        errorText.innerHTML = 'no name'
    }else{
        var candForRace = new Candidate(
            nameInput.value, 
            checkBalance(balanceInput.value),
            checkAge(ageInput.value), 
            checkDocs(documentInput.value), 
            checkEng(engInput.value)
            )
            candidatesForRace.push(candForRace)

        var candForShow = new Candidate(
            nameInput.value, 
            balanceInput.value,
            ageInput.value, 
            documentInput.value, 
            engInput.value
            )
        candidatesForShow.push(candForShow)

        console.log(candidatesForShow, candidatesForRace);
        if(candidatesForShow.length === 5){
            addCandidateButton.disabled = 'true'
        }
    }
})
function checkBalance(num){
    var res = false
    if(num > 2000) {
        res = true
    }
    return res
    
}
function checkAge(num){
    if(num > 18 && num < 60) return true
    else return false
}

//написать проверку введенных документов и добавить в конструктор
function checkDocs(str){
    if(str = 'true') return true
    if(str = 'false') return true
}
//написать проверку введенного уровня инглиша и добавить в конструктор
function checkEng(str){
    if(str = 'true') return true
    if(str = 'false') return true
}

//проверка денег от 5 до 10 секунд 
//проверка возраста от 1 до 3 секунд 
//проверка документов от 10 до 20 секунд 
//проверка англ от 5 до 20 секунд 

raceButton.addEventListener('click', function(){
    // //функция запускает гонку кандидатов
    // startPromiceRace(candidatesForRace)
    race(candidatesForShow[0])
})

// function startPromiceRace(array){
    
// }

// var firstCandCheck = new Promise(function(resolve, reject){
//     var timeMoneyCheck = getRandomNum(5, 10) * 1000
//     setTimeout(function() {

//     }, timeMoneyCheck)
// })
    

initButton.addEventListener('click', function(){
    //функция показа всех кандидатов
})
//убрать задизейбливание кнопки add после нажания та clear
clearButton.addEventListener('click', function(){
    candidates = []
    console.log(candidates);
    // addCandidateButton.disabled = 'false'
})