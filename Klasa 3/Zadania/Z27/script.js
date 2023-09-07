const btn = document.querySelector("#btn")
const wynik = document.querySelector("#wynik")

function obliczOdleglosc(x1, y1, x2, y2){
    return Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2))
}

btn.addEventListener('click', () =>{
    x1 = document.forms["form"]["x1"].value
    y1 = document.forms["form"]["y1"].value
    x2 = document.forms["form"]["x2"].value
    y2 = document.forms["form"]["y2"].value
    x3 = document.forms["form"]["x3"].value
    y3 = document.forms["form"]["y3"].value

    wynik.innerHTML = `Odległość między tymi punktami P1 i P2 wynosi: ${obliczOdleglosc(x1, y1, x2, y2)} <br>`
    wynik.innerHTML += `Odległość między tymi punktami P2 i P3 wynosi: ${obliczOdleglosc(x2, y2, x3, y3)} <br>`
    wynik.innerHTML += `Odległość między tymi punktami P1 i P3 wynosi: ${obliczOdleglosc(x1, y1, x3, y3)} <br>`
})