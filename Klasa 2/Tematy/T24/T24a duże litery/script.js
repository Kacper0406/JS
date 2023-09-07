dane = prompt("Podaj imię i nazwisko")

imie = dane.split(" ")[0]
nazwisko = dane.split(" ")[1]

console.log(upper(imie) + " " + upper(nazwisko))
document.write(`${upper(imie)} ${upper(nazwisko)}`)

function upper(text){
    text = text.toLowerCase()
    text2 = text.slice(1)
    text1 = text[0].toUpperCase()
    output = text1 + text2
    return output
}