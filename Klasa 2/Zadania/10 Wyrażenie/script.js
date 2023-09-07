function oblicz(){
    let x  = document.getElementById("x").value;
    let wynik = x**2/(1 + Math.abs(x))**2;
    document.getElementById("wynik").innerHTML = `Wynik to ${wynik}`;
}