const btn = document.querySelector('button')
typeList = document.querySelectorAll('input[name="typ"]')
cena = document.querySelector('h3')
wartosc = "0zł"

typeList.forEach(radio => {
    radio.addEventListener('change', () => {
        wartosc = `Cena strzyżenia: ${radio.value}`
    });
});



btn.addEventListener('click', function (){
    event.preventDefault()
    cena.innerHTML = wartosc
})