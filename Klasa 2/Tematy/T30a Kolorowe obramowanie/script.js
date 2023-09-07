const range = document.range
const btn = document.querySelector('button')
const img = document.querySelector('img')

btn.addEventListener('click', function(){
    color = document.querySelector('#colorPicker').value
    width = document.querySelector('#range').value

    img.style.borderColor = color
    img.style.borderWidth = `${width}px`
})