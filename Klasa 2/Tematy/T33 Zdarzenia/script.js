const box = document.querySelector(".box")

function showData(){
    var today = new Date();
    box.innerHTML = today
}

function showText(){
    box.innerHTML = `Data już była`
}

box.addEventListener("mouseover", showData)

box.addEventListener("mouseleave", function (){
    box.innerHTML = ""
    box.removeEventListener("mouseover", showData)
    box.addEventListener("mouseover", showText)
})