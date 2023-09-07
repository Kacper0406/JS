const header = document.querySelector('#header')
const dataWykonania = document.querySelector('#data')
const ocena = document.querySelector('#ocena')
const ocenaKolorem = document.querySelector('#ocenaKolorem')
const kolorTekst = document.querySelector('#kolorowe')
const btn = document.querySelector('button')

dataInput = document.querySelector('#dataInput')
ocenaInput = document.querySelector('#ocenaInput')
kolorInput = document.querySelector('#kolorInput')

var kolor
var data
var ocenaKlienta

function wezDane(){
    kolor = kolorInput.value
    data = dataInput.value
    ocenaKlienta = ocenaInput.value
}

function wyswietlDane(data1, ocena1, kolor1){
    dataWykonania.innerHTML = `Usługę wykonano: ${data1}`
    ocena.innerHTML = `Ocena klienta: ${ocena1}`
    kolorTekst.style.color = kolor1
    header.style.color = kolor1
    ocenaKolorem.innerHTML = `Ocena kolorem: ocena kolorem`
}

btn.addEventListener('click', function (){
    wezDane()
    wyswietlDane(data, ocenaKlienta, kolor)
})