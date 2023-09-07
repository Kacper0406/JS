function oblicz() {

    let liczba_a = Number(document.getElementById("liczba_a").value);
    let liczba_b = Number(document.getElementById("liczba_b").value);

    let suma = liczba_a + liczba_b;
    let roznica = liczba_a - liczba_b;
    let iloczyn = liczba_a * liczba_b;
    let iloraz;
    let reszta = liczba_a % liczba_b;

    if(liczba_b === 0){
        iloraz = "Nie dziel przez 0!";
    }
    else{
        iloraz = Math.floor(liczba_a/liczba_b);
    }

    document.getElementById("suma").innerHTML = liczba_a.toString() + "+" + liczba_b.toString() + "=" + suma.toString();
    document.getElementById("roznica").innerHTML = liczba_a.toString() + "-" + liczba_b.toString() + "=" + roznica.toString();
    document.getElementById("iloczyn").innerHTML = liczba_a.toString() + "x" + liczba_b.toString() + "=" + iloczyn.toString();
    document.getElementById("iloraz").innerHTML = liczba_a.toString() + ":" + liczba_b.toString() + "=" + iloraz.toString();
    document.getElementById("reszta").innerHTML = liczba_a.toString() + "%" + liczba_b.toString() + "=" + reszta.toString();
}