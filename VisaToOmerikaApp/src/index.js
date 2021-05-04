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

function getRandom1to10(){
	return Math.floor (Math.random() * 10)
}
generateNameBtn.addEventListener('click', function(){
    nameInput.value = nameArray[getRandom1to10()]
})
generateBalanceBtn.addEventListener('click', function(){
    balanceInput.value = balanceArray[getRandom1to10()]
})
generateAgeBtn.addEventListener('click', function(){
    ageInput.value = ageArray[getRandom1to10()]
})
generateDocumentBtn.addEventListener('click', function(){
    documentInput.value = docArray[getRandom1to10()]
})
generateEnglishBtn.addEventListener('click', function(){
    engInput.value = engArray[getRandom1to10()]
})

generateAllButton.addEventListener('click', function(){
    nameInput.value = nameArray[getRandom1to10()]
    balanceInput.value = balanceArray[getRandom1to10()]
    ageInput.value = ageArray[getRandom1to10()]
    documentInput.value = docArray[getRandom1to10()]
    engInput.value = engArray[getRandom1to10()]
})

var candidates = []

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
        //сюда нужна ещё функция проверки имени на пустоту
        var cand = new Candidate(
            nameInput.value, 
            checkBalance(balanceInput.value),
            checkAge(ageInput.value), 
            checkDocs(documentInput.value), 
            checkEng(engInput.value)
            )
        candidates.push(cand)
        console.log(candidates);
        if(candidates.length === 5){
            addCandidateButton.disabled = 'true'
        }
    }
})
function checkBalance(num){
    if(num > 2000) return true
    else return false
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


initButton.addEventListener('click', function(){
    //функция показа всех кандидатов
})


raceButton.addEventListener('click', function(){
    //функция запускает гонку кандидатов
    startPromiceRace(candidates)
})

function startPromiceRace(array){

}
//убрать задизейбливание кнопки add после нажания та clear
clearButton.addEventListener('click', function(){
    candidates = []
    console.log(candidates);
})