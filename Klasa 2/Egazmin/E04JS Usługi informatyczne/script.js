const btn = document.querySelector("#submit-button")
const form = document.querySelector("#form")

btn.addEventListener("click", function (){
    name = document.querySelector("#name-input").value
    surname = document.querySelector("#surname-input").value
    email = document.querySelector("#email-input").value.toLowerCase()
    usluga = document.querySelector("select").options[document.querySelector("select").selectedIndex].text;
    kopia = document.querySelector("#copy-input").checked

    form.innerHTML = `${name} ${surname} </br> ${email} </br> Usługa: ${usluga}`
})