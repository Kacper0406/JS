let liczba_a =parseFloat(prompt("Podaj pierwszą liczbę: ", 0));
let liczba_b = parseFloat(prompt("Podaj drugą liczbę: ", 0));
let suma = liczba_a + liczba_b;
let roznica = liczba_a - liczba_b;
let iloczyn = liczba_a * liczba_b;

if(liczba_b === 0){
    let iloraz = "error";
}
else{
    let iloraz = liczba_a / liczba_b;
}

document.write("<h2>" + liczba_a.toString() + "+" + liczba_b.toString() + "=" + suma.toString() + "</h2>" +"<br>")
document.write("<h2>" + liczba_a.toString() + "-" + liczba_b.toString() + "=" + roznica.toString() + "</h2>" +"<br>")
document.write("<h2>" + liczba_a.toString() + "x" + liczba_b.toString() + "=" + iloczyn.toString() + "</h2>" +"<br>")
document.write("<h2>" + liczba_a.toString() + ":" + liczba_b.toString() + "=" + iloraz.toString() + "</h2>" +"<br>")

// document.getElementById("suma").innerHTML = liczba_a.toString() + "+" + liczba_b.toString() + "=" + suma.toString();
// document.getElementById("roznica").innerHTML = liczba_a.toString() + "-" + liczba_b.toString() + "=" + roznica.toString();
// document.getElementById("iloczyn").innerHTML = liczba_a.toString() + "x" + liczba_b.toString() + "=" + iloczyn.toString();
// document.getElementById("iloraz").innerHTML = liczba_a.toString() + ":" + liczba_b.toString() + "=" + iloraz.toString();

console.log(liczba_a + liczba_b);