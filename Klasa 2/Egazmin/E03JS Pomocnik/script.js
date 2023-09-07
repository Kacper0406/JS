btn = document.querySelector("button");
tab = document.querySelector('t')

btn.addEventListener('click', function (){
    inputValue = document.querySelector('input').value
    document.querySelector('#title').style.backgroundColor = `hsl(${inputValue}, 100%, 50%)`
    document.querySelector('#field1').style.backgroundColor = `hsl(${inputValue}, 80%, 50%)`
    document.querySelector('#field2').style.backgroundColor = `hsl(${inputValue}, 60%, 50%)`
    document.querySelector('#field3').style.backgroundColor = `hsl(${inputValue}, 40%, 50%)`
    document.querySelector('#field4').style.backgroundColor = `hsl(${inputValue}, 20%, 50%)`
})