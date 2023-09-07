//przyklad 3.27
var i = 0, k = 5;
do {
    var j = k * i;
    document.write("Wynik " + j + "<br>");
    if (j > 30) break;
} while (i++ < 10);