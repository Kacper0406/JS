const input_a = document.querySelector('#a')
const input_b = document.querySelector('#b')
const input_c = document.querySelector('#c')

const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let a = input_a.value;
    let b = input_b.value;
    let c = input_c.value;
    if (a + b > c && b + c > a && a + c > b){
        if(a < c && b < c){
        if(Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c,2 )){
            wynik.innerHTML = "Trójkąt jest prostokątny"
        }
        else{
            wynik.innerHTML = "Trójkąt nie jest prostokątny"
        }
        }else if(a < b && c < b){
        if(Math.pow(a, 2) + Math.pow(c, 2) === Math.pow(b,2 )){
            wynik.innerHTML = "Trójkąt jest prostokątny"
        }
        else{
            wynik.innerHTML = "Trójkąt nie jest prostokątny"
        }
        }else if(b < a && c < a){
        if(Math.pow(b, 2) + Math.pow(c, 2) === Math.pow(a,2 )){
            wynik.innerHTML = "Trójkąt jest prostokątny"
        }
        else{
            wynik.innerHTML = "Trójkąt nie jest prostokątny"
        }
    }}else{
        wynik.innerHTML = "Taki trójkąt nie istnieje"
    }
    console.log(a)
    console.log(b)
    console.log(c)
})