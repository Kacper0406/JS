function oblicz(){
    let cale  = document.getElementById("cale").value;
    let milimetry = cale * 25.3995;
    document.getElementById("wynik").innerHTML = `${cale} cali to ${milimetry} milimetry`;
}