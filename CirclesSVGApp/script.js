const height = 1000
const width = 1600
const container = document.getElementById("container")
var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
var svgNS = svg.namespaceURI;
container.addEventListener("click", e => {
    createCircle(e)
})

var circles = []

function getRandomNum(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createCircle(event){
    var rad = getRandomNum(10, 100)
    var randomColor = getRandomColor()
    var circle = document.createElementNS(svgNS, "circle")
    circle.setAttribute("cx", event.offsetX)
    circle.setAttribute("cy",  event.offsetY)
    circle.setAttribute("r",rad)
    circle.setAttribute("fill", randomColor)
    container.appendChild(circle)
    circle.speedX = getRandomNum(-15, 15)
    circle.speedY = getRandomNum(-15, 15)
    circle.rad = rad
    circles.push(circle)
    mover(circle)
}

function mover (el){
    randSpeed = getRandomNum(0, 10)
    setInterval(()=>{
        if(el.cx.animVal.value > width - el.rad || el.cx.animVal.value - el.rad < 0){
            el.speedX = - el.speedX
        }
        if(el.cy.animVal.value > height - el.rad || el.cy.animVal.value - el.rad < 0){
            el.speedY = - el.speedY
        }
        var increaseX = el.cx.animVal.value + el.speedX
        var increaseY = el.cy.animVal.value + el.speedY
        el.setAttribute("cx", increaseX)
        el.setAttribute("cy", increaseY)
    }, 30)
}