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
var promises = []
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
    if(str === 'true') return true
    if(str === 'false') return false
}
//написать проверку введенного уровня инглиша и добавить в конструктор
function checkEng(str){
    if(str === 'true') return true
    if(str === 'false') return false
}

//проверка денег от 5 до 10 секунд 
//проверка возраста от 1 до 3 секунд 
//проверка документов от 10 до 20 секунд 
//проверка англ от 5 до 20 секунд 
function checkNumOfCands(){
    if(candidatesForRace.length === 1){
        promises.push(promise11)
    }
    // if(candidatesForRace.length === 2){
    //     promises.push(promise21)
    // }
    // if(candidatesForRace.length === 3){
    //     promises.push(promise31)
    // }
    // if(candidatesForRace.length === 4){
    //     promises.push(promise41)
    // }
    // if(candidatesForRace.length === 5){
    //     promises.push(promise51)
    // }
}
raceButton.addEventListener('click', function(){
    //пушит нужные промисы для promise.race
    // checkNumOfCands()
    startPromiceRace()
})
//запускает промисы для кандидатов
function startPromiceRace(){
    Promise.all([promise11(), promise21(), promise31(), promise41(), promise51()])
    .then(
        function (){
            console.log('first cand finished is ok');
        }
        ,
        function (){
            console.log('first cand finished is bad ');
        }
    )
}
//промис проверки баланса первого кандидата и запуск промис ол для остальных трех проверок

const promise11 = () => {
    return new Promise(function(resolve, reject){
    var timeMoneyCheck = getRandomNum(1, 2) * 1000
    setTimeout(function() {
        if(candidatesForRace[0].balance){
            resolve(candidatesForRace[0])
        }else reject('balance false')
    }, timeMoneyCheck)
}).then(function(){
     Promise.all([promise12(), promise13(), promise14()])
     .then(
        function(){
            console.log('name of candidate', candidatesForRace[0].name);
        }
    ).catch((msg) => {
        console.log(msg);
    })
})
.catch((msg) => {
    console.log(msg);
})
} 
const promise12 = () => {
    return new Promise(function(resolve, reject){
    var timeDocsCheck = getRandomNum(1, 2) * 1000
    setTimeout(function() {
        if(candidatesForRace[0].docs){
            resolve()
        }else reject('docs bad')
    }, timeDocsCheck)
})
}
const promise13 = () => {
    return new Promise(function(resolve, reject){
    var timePassCheck = getRandomNum(1, 2) * 1000
    setTimeout(function() {
        if(candidatesForRace[0].age){
            resolve()
        }else reject('age bad')
    }, timePassCheck)
})
}
const promise14 = () => {
    return new Promise(function(resolve, reject){
    var timeEngCheck = getRandomNum(1, 2) * 1000
    setTimeout(function() {
        if(candidatesForRace[0].eng){
            resolve()
        }else reject('eng bad')
    }, timeEngCheck)
})
}

const promise21 = () => {
    return new Promise(function(resolve, reject){
    var timeMoneyCheck = getRandomNum(1, 2) * 1000
    setTimeout(function() {
        if(candidatesForRace[1].balance){
            resolve(candidatesForRace[1])
        }else reject('balance false')
    }, timeMoneyCheck)
}).then(function(){
     Promise.all([promise22(), promise23(), promise24()])
     .then(
        function(){
            console.log('name of candidate', candidatesForRace[1].name);
        }
    ).catch((msg) => {
        console.log(msg);
    })
})
.catch((msg) => {
    console.log(msg);
})
} 
const promise22 = () => {
    return new Promise(function(resolve, reject){
    var timeDocsCheck = getRandomNum(1, 2) * 1000
    setTimeout(function() {
        if(candidatesForRace[1].docs){
            resolve()
        }else reject('docs bad')
    }, timeDocsCheck)
})
}
const promise23 = () => {
    return new Promise(function(resolve, reject){
    var timePassCheck = getRandomNum(1, 2) * 1000
    setTimeout(function() {
        if(candidatesForRace[1].age){
            resolve()
        }else reject('age bad')
    }, timePassCheck)
})
}
const promise24 = () => {
    return new Promise(function(resolve, reject){
    var timeEngCheck = getRandomNum(1, 2) * 1000
    setTimeout(function() {
        if(candidatesForRace[1].eng){
            resolve()
        }else reject('eng bad')
    }, timeEngCheck)
})
}

const promise31 = () => {
    return new Promise(function(resolve, reject){
    var timeMoneyCheck = getRandomNum(1, 2) * 1000
    setTimeout(function() {
        if(candidatesForRace[0].balance){
            resolve(candidatesForRace[2])
        }else reject('balance false')
    }, timeMoneyCheck)
}).then(function(){
     Promise.all([promise32(), promise33(), promise34()])
     .then(
        function(){
            console.log('name of candidate', candidatesForRace[2].name);
        }
    ).catch((msg) => {
        console.log(msg);
    })
})
.catch((msg) => {
    console.log(msg);
})
} 
const promise32 = () => {
    return new Promise(function(resolve, reject){
    var timeDocsCheck = getRandomNum(1, 2) * 1000
    setTimeout(function() {
        if(candidatesForRace[2].docs){
            resolve()
        }else reject('docs bad')
    }, timeDocsCheck)
})
}
const promise33 = () => {
    return new Promise(function(resolve, reject){
    var timePassCheck = getRandomNum(1, 2) * 1000
    setTimeout(function() {
        if(candidatesForRace[2].age){
            resolve()
        }else reject('age bad')
    }, timePassCheck)
})
}
const promise34 = () => {
    return new Promise(function(resolve, reject){
    var timeEngCheck = getRandomNum(1, 2) * 1000
    setTimeout(function() {
        if(candidatesForRace[2].eng){
            resolve()
        }else reject('eng bad')
    }, timeEngCheck)
})
}

const promise41 = () => {
    return new Promise(function(resolve, reject){
    var timeMoneyCheck = getRandomNum(1, 2) * 1000
    setTimeout(function() {
        if(candidatesForRace[3].balance){
            resolve(candidatesForRace[3])
        }else reject('balance false')
    }, timeMoneyCheck)
}).then(function(){
     Promise.all([promise42(), promise43(), promise44()])
     .then(
        function(){
            console.log('name of candidate', candidatesForRace[3].name);
        }
    ).catch((msg) => {
        console.log(msg);
    })
})
.catch((msg) => {
    console.log(msg);
})
} 
const promise42 = () => {
    return new Promise(function(resolve, reject){
    var timeDocsCheck = getRandomNum(1, 2) * 1000
    setTimeout(function() {
        if(candidatesForRace[3].docs){
            resolve()
        }else reject('docs bad')
    }, timeDocsCheck)
})
}
const promise43 = () => {
    return new Promise(function(resolve, reject){
    var timePassCheck = getRandomNum(1, 2) * 1000
    setTimeout(function() {
        if(candidatesForRace[3].age){
            resolve()
        }else reject('age bad')
    }, timePassCheck)
})
}
const promise44 = () => {
    return new Promise(function(resolve, reject){
    var timeEngCheck = getRandomNum(1, 2) * 1000
    setTimeout(function() {
        if(candidatesForRace[3].eng){
            resolve()
        }else reject('eng bad')
    }, timeEngCheck)
})
}

const promise51 = () => {
    return new Promise(function(resolve, reject){
    var timeMoneyCheck = getRandomNum(1, 2) * 1000
    setTimeout(function() {
        if(candidatesForRace[4].balance){
            resolve(candidatesForRace[4])
        }else reject('balance false')
    }, timeMoneyCheck)
}).then(function(){
     Promise.all([promise52(), promise53(), promise54()])
     .then(
        function(){
            console.log('name of candidate', candidatesForRace[0].name);
        }
    ).catch((msg) => {
        console.log(msg);
    })
})
.catch((msg) => {
    console.log(msg);
})
} 
const promise52 = () => {
    return new Promise(function(resolve, reject){
    var timeDocsCheck = getRandomNum(1, 2) * 1000
    setTimeout(function() {
        if(candidatesForRace[4].docs){
            resolve()
        }else reject('docs bad')
    }, timeDocsCheck)
})
}
const promise53 = () => {
    return new Promise(function(resolve, reject){
    var timePassCheck = getRandomNum(1, 2) * 1000
    setTimeout(function() {
        if(candidatesForRace[4].age){
            resolve()
        }else reject('age bad')
    }, timePassCheck)
})
}
const promise54 = () => {
    return new Promise(function(resolve, reject){
    var timeEngCheck = getRandomNum(1, 2) * 1000
    setTimeout(function() {
        if(candidatesForRace[4].eng){
            resolve()
        }else reject('eng bad')
    }, timeEngCheck)
})
}
initButton.addEventListener('click', function(){
    //функция показа всех кандидатов
})
//убрать задизейбливание кнопки add после нажания та clear
clearButton.addEventListener('click', function(){
    candidates = []
    console.log(candidates);
    // addCandidateButton.disabled = 'false'
})