const display = document.getElementById("display")

const jacobBtn = document.getElementById("jacobBtn")
const justinBtn = document.getElementById("justinBtn")
const bradenBtn = document.getElementById("bradenBtn")
const mikeyBtn = document.getElementById("mikeyBtn")
const spinBtn = document.getElementById("spinBtn")
const greenBtn = document.getElementById("greenBtn")

jacobBtn.onclick = function(){
    display.src = "jacob.png"
}
justinBtn.onclick = function(){
    display.src = "justin.jpg"
}
bradenBtn.onclick = function(){
    display.src = "braden.jpg"
}
mikeyBtn.onclick = function(){
    display.src = "mikey.jpg"
}
spinBtn.onclick = function(){
    display.style.transform = "rotate(360deg)"
}
greenBtn.onclick = function(){
    display.style.filter = "sepia(100%) hue-rotate(90deg) saturate(500%)"
}
