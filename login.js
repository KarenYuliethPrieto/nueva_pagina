document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("login-btn");
    const registerBtn = document.getElementById("register-btn");

    if (loginBtn) {
        loginBtn.addEventListener("click", () => {
            alert("Inicio de sesión exitoso.");
            window.location.href = "inicio.html";
        });
    }

    if (registerBtn) {
        registerBtn.addEventListener("click", () => {
            alert("Registro exitoso.");
            window.location.href = "inicio.html";
        });
    }
});