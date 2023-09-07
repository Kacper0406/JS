const form = document.querySelector("#myForm")
const btn = document.querySelector('button')
const wynik = document.querySelector('#wynik')

btn.addEventListener('click', function(){
    event.preventDefault()

    const text1 = document.createElement("p")
    const value1 = document.createTextNode("Imie: " + form.firstName.value)
    text1.appendChild(value1);
    wynik.appendChild(text1);

    const text2 = document.createElement("p")
    const value2 = document.createTextNode("Nazwisko: " + form.lastName.value)
    text2.appendChild(value2);
    wynik.appendChild(text2);

    const text3 = document.createElement("p")
    const value3 = document.createTextNode("Typ: " + form.subject.value)
    text3.appendChild(value3);
    wynik.appendChild(text3);

    const text4 = document.createElement("p")
    const value4 = document.createTextNode("Treść: " + form.message.value)
    text4.appendChild(value4);
    wynik.appendChild(text4);

    const text5 = document.createElement("p")
    const value5 = document.createTextNode("Zapamiętaj: " + form.remember.checked)
    text5.appendChild(value5);
    wynik.appendChild(text5);

    console.log(form.firstName.value)
})

// console.log(form.firstName.value);
//
// form.lastName.value = "Kowalski";
//
// form.message.value = "Treść";
//
// console.log(form.subject.value);
//
// form.subject.value = "zgloszenie";
//
// console.log(form.remember.checked);
//
// form.remember.checked = true;