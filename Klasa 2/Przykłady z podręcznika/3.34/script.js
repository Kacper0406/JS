//przyklad 3.34
function suma_dow() {
    var i;
    wynik = 0;
    var l_param = arguments.length;
    for (i = 0; i < l_param; i++)
    {
        wynik += arguments[i];
    }
    return wynik;
}
suma_dow(3, 5, 7);
document.write("Suma argumentów: " + wynik);