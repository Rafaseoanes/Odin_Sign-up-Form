let password = document.getElementById("password")
let checkPassword = document.getElementById("check-password")
let errorMessage = document.getElementById("pw-error")

let form = document.getElementById("mainForm")

form.addEventListener("submit", (e)=>{

    if(password.value !== checkPassword.value){
        password.classList.toggle("noValid")
        checkPassword.classList.toggle("noValid")
        errorMessage.classList.toggle("hide")
    }
    e.preventDefault()
})

