const liczba_x = document.querySelector('#liczba_x')
const btn2 = document.querySelector('#losuj');
const btn = document.querySelector('#check');
const wynik = document.querySelector('#wynik')
const dzialanie = document.querySelector('#dzialanie')

quiz();

function quiz(){
    let a = random(0, 10);
    let b = random(0, 10);
    dzialanie.innerHTML = `${a} x ${b} = ?`

    btn.addEventListener('click', function(){
        let x = parseInt(liczba_x.value);
        console.log(x);
        check(a,b,x)
    })
}
function check(a, b, x){
    if(a * b == x){
        wynik.innerHTML = "Gratulacje!"
    }
    else{
        wynik.innerHTML = `Niestety to błędna odpowiedź! Prawidłowy wynik to: ${a*b}`
    }
}
function random(min,max){
    min = Math.ceil(min);
    max = Math.floor(max) + 1;

    return Math.floor(Math.random() * (max - min) + min);
}

btn2.addEventListener('click', function(){
    quiz();
    wynik.innerHTML = '';
    liczba_x.value = "";
})