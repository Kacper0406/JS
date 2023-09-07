let liczba = parseInt(prompt("Podaj ilość sekund: "));
let godziny=Math.floor(liczba/3600);
let sekundy_cale = liczba%3600;
let minuty=Math.floor(sekundy_cale/60);
let sekundy = sekundy_cale%60;

console.log(`${godziny} g ${minuty} m ${sekundy} s`)
document.write(`${godziny} g ${minuty} m ${sekundy} s`)