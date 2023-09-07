const btn = document.querySelector('button')
const wynik = document.querySelector('#wynik')

btn.addEventListener('click', function (){
    const date1 = new Date(document.getElementById("urodziny1").value);
    const name1 = document.getElementById("imie1").value;
    const date2 = new Date(document.getElementById("urodziny2").value);
    const name2 = document.getElementById("imie2").value;

    if(date1 < date2){
        console.log(name1 + " Jest starszy")
        wynik.innerHTML = `${name1} jest starszy`
    }
    if(date2 < date1){
        console.log(name2 + " Jest starszy")
        wynik.innerHTML = `${name2} jest starszy`
    }
    if(date1 === date2){
        wynik.innerHTML = `${name1} i ${name2} mają tyle samo lat`
    }
})