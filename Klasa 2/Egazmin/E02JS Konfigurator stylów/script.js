prawy = document.querySelector(".prawy")
obraz = document.querySelector("img")

indigo = document.getElementById("indigo")
steelblue = document.getElementById("steelblue")
olive = document.getElementById("olive")

fontInput = document.getElementById("fontInput")
fontColor = document.getElementById("colors")

borderCheck = document.getElementById("ramka")

listType = document.querySelectorAll('input[name="typ"]');
list = document.querySelector('ul');

indigo.addEventListener('click', function (){
    prawy.style.backgroundColor = "Indigo"
})

steelblue.addEventListener('click', function (){
    prawy.style.backgroundColor = "SteelBlue"
})

olive.addEventListener('click', function (){
    prawy.style.backgroundColor = "Olive"
})

fontInput.addEventListener('change', function () {
    prawy.style.fontSize = fontInput.value
})

fontColor.addEventListener('change', function() {
    prawy.style.color = fontColor.value
})

borderCheck.addEventListener('change', function () {
    if(borderCheck.checked){
        obraz.style.border = "1px solid white"
    } else{
        obraz.style.border = "none"
    }
})

listType.forEach(radio => {
    radio.addEventListener('change', () => {
        if (list) {
            listStyle = radio.value;
            list.style.listStyleType = listStyle;
        }
    });
});
