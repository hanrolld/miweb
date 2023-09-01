const usuariologueado = true

function RedirigirALogin() {
    window.location.href = 'login.html'
}

if (!usuariologueado){
    RedirigirALogin();
}