const btn = document.querySelector('button')

var wojownik = {
    nazwa: "Mieszko",
    punkty_doswiadczenia: 5,
    punkty_zycia: 0.6,
    uzbrojenie: ['miecz', 'szyszak'],

    zwroc_dane() {
        return `Nazwa: ${this.nazwa} \n Doswiadczenie: ${this.punkty_doswiadczenia} \n Zycie: ${this.punkty_zycia} \n Uzbrojenie: ${this.uzbrojenie}`;
    }
};

wojownik.uzbrojenie.push('szyszak')

console.log(wojownik.zwroc_dane());

btn.addEventListener('click', function(){
    document.body.innerHTML += wojownik.zwroc_dane()
})