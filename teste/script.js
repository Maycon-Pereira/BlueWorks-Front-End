function recuperarSenha() {
    // Obter o valor do campo de email
    var email = document.getElementById("emailRecuperarSenha").value;
  
    // Enviar solicitação AJAX para verificar se o email existe
    $.ajax({
      url: 'https://api.hunter.io/v2/email-verifier?email='+ email +'&api_key=d95a0b672e57d726979e566e11080142594586db',
      type: "GET",
      crossDomain: true,
      contentType: "application/json",
      dataType: "json",
      success: function (response) {
        // Verificar se o email existe na resposta
        var emailExiste = false;
        for (var i = 0; i < response.length; i++) {
          if (response[i].email === email) {
            emailExiste = true;
            break;
          }
        }
  
        // Se o email existe, exibir mensagem de sucesso
        if (emailExiste) {
          exibirMensagem("success", "Um e-mail com as instruções foi enviado para o seu endereço de e-mail.");
          window.location.href = "/z-Novo_TCC/Recuperar/recuperarSenha/codigoRecup.html";
        } else {
          exibirMensagem("error", "O e-mail fornecido não foi encontrado.");
        }
      },
      error: function (xhr, status) {
        console.log(xhr);
        console.log(status);
      }
    });
  }
  
  function exibirMensagem(tipo, texto) {
    var mensagemElement = document.getElementById("mensagem");
    mensagemElement.innerHTML = texto;
    mensagemElement.className = tipo;
  }
  
  document.getElementById("recuperarSenhaForm").addEventListener("submit", function (event) {
    event.preventDefault();
    recuperarSenha();
  });
  