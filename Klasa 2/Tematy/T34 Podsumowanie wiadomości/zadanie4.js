function Rycerz(nazwisko, doswiadczenie, uzbrojenie) {
    this.nazwisko = nazwisko;
    this.doswiadczenie = doswiadczenie;
    this.uzbrojenie = uzbrojenie;

    this.info = function (){
        return `Doswiadczenie ${this.doswiadczenie}, nazwisko ${this.nazwisko}. uzbrojenie ${this.uzbrojenie}`
    }
}