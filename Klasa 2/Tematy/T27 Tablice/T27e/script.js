let numbers = [];

for(let i=10; i<=99; i++){
    numbers.push(i)
}

let tab = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
]

line = ""
for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 7; j++) {
        let id = random(0, numbers.length-1)
        tab[i][j] = numbers[id]
        numbers.pop(id)
        line += tab[i][j].toString() + ", "
    }
    document.write(line + "</br>")
    line = ""
}

function random(min,max){
    min = Math.ceil(min);
    max = Math.floor(max) + 1;

    return Math.floor(Math.random() * (max - min) + min);
}