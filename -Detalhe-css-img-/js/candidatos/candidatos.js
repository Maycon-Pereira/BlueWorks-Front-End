//imagem do candidatos
function candidatoImg() {

    $.ajax({
        url: "http://localhost:8080/v1/teste/download/",
        type: "GET",
        crossDomain: true,
        contentType: "application/json",
        dataType: "json",
        success: function (response) {


            for (var i = 0; i < response.length; i++) {

                $('.candidatos').append(' <div class="candidato-box"> <div class="img-candidato"><div class="candidato" id="div_imagetranscrits"> <img src="data:image/png;base64,' + response[i].fotoBase64 + '" /> </div></div><div class="candidato-box-info"><div class="inf-pessoa"><p><span class="bold">Nome: </span> Elizabeth Brian</p><p><span class="bold">Idade: </span> 22 anos</p><p><span class="bold">Gênero: </span> Feminino</p></div></div></div>');
            }

        },
        error: function (xhr, status) {

            console.log(xhr);
            console.log(status);

        }
    });

}

