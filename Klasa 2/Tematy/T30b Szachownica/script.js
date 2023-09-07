const btn = document.querySelector("button");

btn.addEventListener('click', function(event){
    event.preventDefault();
    const ilosc = document.getElementById("ilosc").value;
    const szachownica = document.getElementById("szachownica");

    szachownica.innerHTML = "";

    for (var row = 0; row < ilosc; row++) {
        for (var col = 0; col < ilosc; col++) {
            var pole = document.createElement("div");
            pole.style.width = (100 / ilosc) + "%";
            pole.style.paddingBottom = (100 / ilosc) + "%";
            pole.style.float = "left";
            if ((row + col) % 2 == 0) {
                pole.style.backgroundColor = "black";
            } else {
                pole.style.backgroundColor = "white";
            }
            szachownica.appendChild(pole);
        }
    }

});