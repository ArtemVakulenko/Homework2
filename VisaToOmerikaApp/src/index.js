var nameArray = ['вася', 'петя', 'вася', 'петя','вася', 'петя','вася', 'петя','вася', 'петя',]
var balanceArray = [7000, 7000, 7000, 7000, 7000, 7000, 2000, 2000, 2000, 2000]
var ageArray = [20, 20, 20, 20, 20, 20, 20, 70, 70, 70]
var docArray = [true, true, true, true, true, true, true, true, false, false]
var engArray = [true, true, true, false, false, false, false, false, false, false]

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
    //сюда нужна ещё функция проверки имени на пустоту
    var cand = new Candidate(
        nameInput.value, 
        balanceInput.value,
        ageInput.value, 
        documentInput.value, 
        engInput.value
        )
    candidates.push(cand)
    console.log(candidates);
    if(candidates.length === 5){
        addCandidateButton.disabled = 'true'
    }
})