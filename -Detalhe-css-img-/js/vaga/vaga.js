//Vagas
function vaga() {

    $.ajax({
        url: "http://localhost:8080/vagas/v2/image/download",
        type: "GET",
        crossDomain: true,
        contentType: "application/json",
        dataType: "json",
        success: function (response) {

            console.log(response)
            for (var i = 0; i < response.length; i++) {//loop do perfil usuario, arrumar.

                $('.candidatos').append('<div class="candidato-box"><div class="img-candidato"><div class="candidato"><a href="/Empresa/perfil-Empresa/radac.html"><img src="data:image/png;base64,' + response[i].fotoBase64 + '" /></a></div></div><div class="candidato-box-info"><div class="inf-pessoa"><div class="col"><div class="desc-vaga maior"><p><span class="bold">Nome: </span> ' + response[i].nome + '</p></div><div class="desc-vaga menor"><p><span class="bold">Tipo: </span> ' + response[i].tipo + '</p></div></div><div class="col"><div class="desc-vaga maior"><p><span class="bold">Qtda: </span>' + response[i].qtda + '</p></div><div class="desc-vaga menor"><p><span class="bold">Salário: </span>' + response[i].salario + '</p></div></div><div class="col"><div class="desc-vaga maior"><p><span class="bold">Escolaridade: </span> ' + response[i].escolaridade + '</p></div><div class="desc-vaga menor"><p><span class="bold">Cep: </span> ' + response[i].cep + '</p></div></div><div class="info"><div class="desc-vaga info-bar"><p><span class="bold">Info: </span> ' + response[i].sobre + '<span class="info-vaga"> </span></p></div></div></div><div class="config"><div class="buttam"><a href="/Atualizar/vaga/atualizarVaga.html"><button class="ed-vaga" id="edit"><img src="/-Detalhe-css-img-/img/editar-removebg-preview.png"></button></a></div><div class="buttam"><a href="/Atualizar/vaga/atualizarVaga.html"><button class="del-vaga" id="delete">Excluir Vaga</button></a></div></div></div></div>');
            }

        },
        error: function (xhr, status) {

            console.log(xhr);
            console.log(status);

        }
    });

}

