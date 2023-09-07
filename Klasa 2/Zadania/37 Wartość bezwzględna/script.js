const liczba_a = document.querySelector('#liczba_a')
const btn = document.querySelector('button');
const wynik = document.querySelector('#wynik')

btn.addEventListener('click', function(){
    let a = parseInt(liczba_a.value);

    wynik.innerHTML = `Wartość bezwzględna liczby ${a} to |${Math.abs(a)}|`;
})