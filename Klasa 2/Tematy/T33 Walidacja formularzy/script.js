const btn = document.querySelector('button')
const form = document.querySelector('#myForm')
const error = document.querySelector('#wynik')

const emailRegex = /^[A-Za-z0-9._%+-]+@zspglogow\.pl$/
const passRegex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/

btn.addEventListener('click', function (event) {
    event.preventDefault()
    wynik.innerHTML =""

    username = form.username.value
    email = form.email.value
    pass1 = form.pass1.value
    pass2 = form.pass2.value
    
    if( ValidateUsername(username) && ValidateEmail(email) && ValidatePassword(pass1, pass2)){
        updateData(username, email, pass1)
        wynik.innerHTML = "<p class='success'>Pomyślnie zmieniono dane</p>"
    }
})

function updateData(username, email, pass) {
    document.querySelector('#username_text').innerHTML = `Nazwa użytkownika: ${username}`
    document.querySelector('#email_text').innerHTML = `E-mail: ${email}`
    document.querySelector('#pass_text').innerHTML = `Hasło: ${pass}`
}

function ValidateUsername(username) {
    if (username !== "") {
        return (true)
    } else {
        wynik.innerHTML += "<p class='error'>Nazwa użytkownika nie może być pusta</p>"
        return (false)
    }
}

function ValidateEmail(mail) {
    if (emailRegex.test(mail) && mail !== "") {
        return (true)
    } else {
        wynik.innerHTML += "<p class='error'>Email nie jest poprawny!</p>"
        return (false)
    }
}

function ValidatePassword(pass1, pass2) {
    if (passRegex.test(pass1) && pass1 !== "" && pass1 === pass2) {
        return (true)
    } else {
        if(pass1 !== pass2){
            wynik.innerHTML += "<p class='error'>Hasła nie są takie same</p>"
        }
        if(!passRegex.test(pass1)){
            wynik.innerHTML += "<p class='error'>Hasło nie spełnia wymagań</p>"
        }
        if(pass1 === ""){
            wynik.innerHTML += "<p class='error'>Hasło nie może być puste</p>"
        }
        return (false)
    }
}