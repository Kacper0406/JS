imie = prompt("Podaj imię")
imie = imie.toLowerCase()

if(imie != "kuba" && imie != "barnaba"){
    if (imie.slice(-1) == "a"){
        console.log("K")
        document.write(`${upper(imie)} to kobieta`)
    } else{
        console.log("M")
        document.write(`${upper(imie)} to mężczyzna`)
    }
} else{
    console.log("M")
    document.write(`${upper(imie)} to mężczyzna`)
}

function upper(text){
    text = text.toLowerCase()
    text2 = text.slice(1)
    text1 = text[0].toUpperCase()
    output = text1 + text2
    return output
}