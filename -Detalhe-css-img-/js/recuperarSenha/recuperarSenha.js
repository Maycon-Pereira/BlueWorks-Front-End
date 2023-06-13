function recuperarSenha() {
    var emailRecuperarSenha = document.getElementById('emailRecuperarSenha').value;

    $.ajax({
        url: 'http://localhost:8080/empresa',
        type: "GET",
        crossDomain: true,
        contentType: "application/json",
        dataType: "json",
        success: function (response) {
            var encontrouEmail = false;

            // Verificar se o email está presente na resposta
            for (var i = 0; i < response.length; i++) {
                if (response[i].email === emailRecuperarSenha) {

                    encontrouEmail = true;
                    window.location.href = "/z-Novo_TCC/Recuperar/recuperarSenha/codigoRecup.html";
                    break;
                } else {
                    alert("O email não existe na chamada da requisição.");
                    window.location.href = "/z-Novo_TCC/Recuperar/recuperarSenha/recuperarSenha.html";
                }
            }

        },
        error: function (xhr, status) {
            console.log(xhr);
            console.log(status);
        }
    });
}
