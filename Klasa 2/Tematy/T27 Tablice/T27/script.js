let tab = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

line = ""

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        tab[i][j] = random(0, 9)
        line += tab[i][j].toString() + ", "
    }
    document.write(line + "</br>")
    line = ""
}
document.write("</br>")
// [00][01][02]
// [10][11][12]
// [20][21][22]

LG_PD = 0;
LD_PG = 0;

for (let i = 0; i < 3; i++) {
    LG_PD += tab[i][i];
    LD_PG += tab[i][2 - i];
}

console.log(tab)
document.write("LG PD:" + LG_PD + "</br>")
document.write("LD PG:" + LD_PG + "</br>")

if (LG_PD > LD_PG){
    document.write("LG PD > LD PG")
}else if (LG_PD < LD_PG){
    document.write("LG PD < LD PG")
}else if (LG_PD = LD_PG) {
    document.write("LG PD = LD PG")
}

function random(min,max){
    min = Math.ceil(min);
    max = Math.floor(max) + 1;

    return Math.floor(Math.random() * (max - min) + min);
}