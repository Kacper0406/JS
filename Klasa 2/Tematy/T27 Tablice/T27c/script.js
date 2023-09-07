let tab = [
    [0, 0, 0, 1],
    [0, 0, 1, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0]
];

let tabRotate = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

line = ""
maxSumaIndex = ""
maxSuma = 0
suma = 0
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        tab[i][j] = random(0, 1)
        suma += tab[i][j]
        tabRotate[i][j] = tab[3-j][i]
        line += tab[i][j].toString()
    }
    document.write(line + "</br>")
    line = ""
    if(suma > maxSuma){
        maxSumaIndex = i
        maxSuma = suma
        suma = 0
    } else if (suma == maxSuma){
        maxSumaIndex += ", " + i
        maxSuma = suma;
        suma = 0
    } else{
        suma = 0
    }
}

document.write("</br>")
document.write("Wiersze z największą sumą liczb: " + maxSumaIndex + " [Wiersze liczone są od 0!]")
document.write("</br>")
document.write("</br>")

line2 = ""
for(let i = 0; i< 4; i++){
    for (let j=0; j < 4; j++){
        line2 += tabRotate[i][j].toString()
    }
    document.write(line2 + "</br>")
    line2 = ""
}



console.log(tab)
console.log(tabRotate)

function random(min,max){
    min = Math.ceil(min);
    max = Math.floor(max) + 1;

    return Math.floor(Math.random() * (max - min) + min);
}