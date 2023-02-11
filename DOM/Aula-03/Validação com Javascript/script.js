const txtSenha = document.getElementById("txtSenha");
const txtConfSenha = document.getElementById("txtConfSenha");

txtSenha.addEventListener("input", validarSenhas);
txtConfSenha.addEventListener("input", validarSenhas);

function validarSenhas() {
    if(txtSenha.value != txtConfSenha.value) {
        txtConfSenha.setCustomValidity("As senhas não conferem!");
    } else {
        txtConfSenha.setCustomValidity("");
    }
}  