const liczba_x = document.querySelector('#liczba_x')
const btn = document.querySelector('button');
const wynik = document.querySelector('#wynik')

btn.addEventListener('click', function(){
    let x = parseInt(liczba_x.value);
    let text = '';
    console.log(Math.floor(x))

    for(let i = 0; i <= 10; i++){
        text += `${i} x ${x} = ${x*i} <br/>`;
    }
    wynik.innerHTML = text;
})