const btn = document.querySelector('button')
typeList = document.querySelectorAll('input[name="hair"]')
cena = document.querySelector('#wynik')
wartosc = "0zł"

typeList.forEach(radio => {
    radio.addEventListener('change', () => {
        wartosc = `Cena strzyżenia: ${radio.value} zł`
    });
});

btn.addEventListener('click', function (){
    event.preventDefault()
    cena.innerHTML = wartosc
})