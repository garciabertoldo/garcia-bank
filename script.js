function clicar() {
    var usuario = document.getElementById("usuario");
    var senha = document.getElementById("senha");

    if (usuario.value === "" || senha.value === "") {
        alert("preencha os campos de usuário e senha!");
    }
    if (senha.value.length < 8) {
        alert("a senha deve ter no mínimo 8 caracteres ")
        return false
    }
    if (usuario.value.length < 8) {
        alert("o usuário deve ter no mínimo 8 caracteres ")
        return
    }
    if (usuario.value === "" || senha.value === "" || senha.value.length > 8 || usuario.value.length > 8) {
        alert("login realizado com sucesso!")
    }
}