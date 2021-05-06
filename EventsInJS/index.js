//функционал галлереи

var mainImage = document.getElementById('mainImage')
var imgContainer = document.getElementById('imgContainer')

imgContainer.addEventListener('click', setImgToMain)

function setImgToMain(event){
    mainImage.src = event.target.src
}

//функционал слайдшоу

var btn = document.getElementById('magic')
var btnStop = document.getElementById('stopMagic')
var gallery = document.getElementById('galleryContainer')
var slideShow = document.getElementById('slideShowContainer')
var currentImage = document.getElementById('currentSlideShowImg')
var images = document.getElementsByClassName('smallImg')

btn.addEventListener('click', magicTime)
var imgCounter = 0

function magicTime(event){
    slideShow.classList.toggle('hide')
    gallery.classList.toggle('hide')
    var timer = setInterval(changeSlideShowPhoto, 500)
}
function changeSlideShowPhoto(){
    if(imgCounter === images.length){
        imgCounter = 0
        currentImage.src = images[imgCounter].src
    }
    currentImage.src = images[imgCounter].src
    imgCounter++
    console.log('timer is working');
    
}
btnStop.addEventListener('click', stopMagic)

function stopMagic (){
    slideShow.classList.toggle('hide')
    gallery.classList.toggle('hide')
    clearInterval(timer)
}