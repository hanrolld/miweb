const logout =() => {
    sessionStorage.removeItem('token')
        window.location = "login.html"
}

const logoutbutton = document.querySelector('logout')

logoutbutton.addEventListener('click', logout)