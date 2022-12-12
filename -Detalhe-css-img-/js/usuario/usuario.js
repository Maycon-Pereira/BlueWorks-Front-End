//Perfil usuario
function usuario() {

    $.ajax({
        url: "http://localhost:8080/usuario/v2/image/download",
        type: "GET",
        crossDomain: true,
        contentType: "application/json",
        dataType: "json",
        success: function (response) {

            console.log(response)
            for (var i = 0; i < response.length; i++) {

                $('.usuario-info').append(' <div class="main-info"><div class="info"><div class="img">' + response[i].fotoBase64 + '</div><div class="personal-info"><div class="info-0"><span class="name"><h2>' + response[i].nome + '</h2></span></div><div class="info-1"><span class="formacao"><label><span class="bold">Escolaridade: </span>  ' + response[i].escolaridade + '</label></span></div><div class="info-1"><label for="tel"><span class="bold"> Telefone: </span><span id="num">' + response[i].telefone + '</span></label></div><div class="info-1"><label for="mail"><span class="bold">Email: </span><span id="email">' + response[i].email + '</span></label></div><div class="info-1"><label for="addres"><span class="bold">Endereço: </span><span id="addres">' + response[i].bairro + '</span></label></div><div class="info-1"><label for="nasc"><span class="bold">Data de Nascimento: </span><span id="addres">' + response[i].data + ' </span></label></div></div></div></div><div class="main-info2"><div class="down-info"><div class="sobre-"><div class="mim"><div class="assunto"><h2>Sobre-mim</h2><p>' + response[i].sobre + '</p></div></div></div></div></div></div> ');
            }

        },
        error: function (xhr, status) {

            console.log(xhr);
            console.log(status);

        }
    });

}

