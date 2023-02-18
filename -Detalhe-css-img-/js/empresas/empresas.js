
//todas as vagas




function AdminPerfilImagem() {

  $.ajax({
    url: "http://localhost:8080/empresa/v2/image/download",
    type: "GET",
    crossDomain: true,
    contentType: "application/json",
    dataType: "json",
    success: function (response) {


      for (var i = 0; i < response.length; i++) {

        $('.botao').append(' <div class="img-perfil-empresa"><div class="dropdonw-img-config"><img class="img" src="data:image/png;base64,' + response[i].fotoBase64 + '" /><div class="submenu-hover"><a class="submenu" href="/z-Novo_TCC/AtualizarPerfil/AtualizarEmpresa.html">Editar Perfil</a><a class="submenu" href="">Sair</a></div></div></div> ');
      }

    },
    error: function (xhr, status) {

      console.log(xhr);
      console.log(status);

    }
  });

}

function AdminPerfilSobre() {

  $.ajax({
    url: "http://localhost:8080/empresa",
    type: "GET",
    crossDomain: true,
    contentType: "application/json",
    dataType: "json",
    success: function (response) {



      for (var i = 0; i < response.length; i++) {

        $('.estatisticas').append(' <div class="sobre-empresa-perfil"><div class="first-empresa-sobre"><h4>' + response[i].nome + '</h4><div class="sobre-exp">Porte: ' + response[i].porte + '</div></div><div class="second-empresa-sobre"><div class="sobre-exp">Email: ' + response[i].email + '</div><div class="sobre-exp">Cnpj: ' + response[i].cnpj + '</div><div class="sobre-exp">Cep: ' + response[i].cep + '</div></div></div><div class="qtda-estat"><div class="qtda-estatistica vistos-por-usuarios"><div class="ti"><h4> Quantos viram: </h4></div><div class="qtda-num"> 0 </div></div> <div class="qtda-estatistica vagas-cadastradas"><div class="ti"><h4> Vagas cadastradas: </h4></div><div class="qtda-num  vag-num"></div></div><div class="qtda-estatistica usuarios-candidatados"><div class="ti"><h4> Candidatos a vaga: </h4></div><div class="qtda-num usuario-num"></div></div></div> ');
      }


    },
    error: function (xhr, status) {

      console.log(xhr);
      console.log(status);

    }
  });

}

function AdminPerfilVagas() {

  $.ajax({
    url: "http://localhost:8080/vagas",
    type: "GET",
    crossDomain: true,
    contentType: "application/json",
    dataType: "json",
    success: function (response) {


      for (var i = 0; i < response.length; i++) {

        $('.crud-vagas').append(' <div class="crud-vagas-1-5"><div class="id-vaga-to-delet-or-edit">' + response[i].id + '</div><div class="crud-vags-cadastradas-a-mostrar"><div class="link"><a href=""><div class="content-vagas">' + response[i].nome + '</div></a></div><div class="link"><a href=""><div class="content-vagas">' + response[i].data + '</div></a></div><div class="content-vagas"><div class="buttons"><div class="butt "><button class="edit"> <a href="/z-Novo_TCC/AtualizarPerfil/atualizarVaga/atualizarVaga.html" target="_blank" rel="noopener noreferrer"> Edit </a> </button><button class="delet"  id="deleteVaga"> Delete </button></div></div></div></div></div> ');



      }
      var qtda_vagas = [i + 1]
      var totalVagas = qtda_vagas[qtda_vagas.length - 1]
      var totVaga = totalVagas - 1;


      $('.vag-num').append('' + totVaga + '')


    },
    error: function (xhr, status) {

      console.log(xhr);
      console.log(status);

    }
  });

}
function AdminPerfilUsuarios() {

  $.ajax({
    url: "http://localhost:8080/usuario",
    type: "GET",
    crossDomain: true,
    contentType: "application/json",
    dataType: "json",
    success: function (response) {



      for (var i = 0; i < response.length; i++) {

        $('.crud-usuario').append(' <div class="crud-vagas-1-5"><div class="id-vaga-to-delet-or-edit">' + response[i].id + '</div><div class="crud-usuarios-candidatados-a-mostrar"><div class="link"><a href=""><div class="content-vagas">' + response[i].nome + '</div></a></div><div class="link"><a href=""><div class="content-vagas">' + response[i].escolaridade + '</div></a></div><div class="content-vagas"><div class="buttons"><div class="butt "><button class="edit"> Accept </button><button class="delet"> Delete</button></div> </div></div></div></div> ');
      }
      var qtda_usu = [i + 1]
      var totalUsus = qtda_usu[qtda_usu.length - 1]
      var totUsuarios = totalUsus - 1;

      $('.usuario-num').append('' + totUsuarios + '')

    },
    error: function (xhr, status) {

      console.log(xhr);
      console.log(status);

    }
  });

}

/* ==== DELETE VAGA !!!!!!!! ==== */


window.onload = function () {
  // Localiza o botão "Excluir vaga" e adiciona um listener de evento de clique a ele
  var deleteButton = document.getElementById('deleteVaga');
  if (deleteButton) {
    deleteButton.addEventListener('click', function () {
      // Quando o botão é clicado, chama a função deleteVaga com o ID da vaga a ser excluída
      var VagaId = 2; // Aqui você pode substituir 8 pelo ID da vaga a ser excluída
      deleteVaga(VagaId);

      function deleteVaga() {
        // Faz uma solicitação AJAX para excluir a vaga com o ID especificado




        $.ajax({
          url: 'http://localhost:8080/vagas/' + VagaId,
          type: "DELETE",
          crossDomain: true,
          contentType: "application/json",
          dataType: "json",
          success: function (response) {
            // Se a solicitação for bem-sucedida, exibe uma mensagem de sucesso
            for (var i = 0; i < response.length; i++) {

              /* var idDelete = response[i].id
              if (idDelete !== null || idDelete >= 1) {
       
                $('.crud-vagas').remove()
              } */

            }
            console.log("Vaga excluída com sucesso!");
          },
          error: function (xhr, status) {
            // Se a solicitação falhar, exibe uma mensagem de erro e registra o erro no console
            console.log("Ocorreu um erro ao excluir a vaga.");
            console.log(xhr);
            console.log(status);
          }
        });
      }


    });
  }
};




/* ==== DELETE VAGA !!!!!!!! ==== */







//get all de empresas

/* function empresaGetAll() {

  $.ajax({
      url: "http://localhost:8080/empresa",
      type: "GET",
      crossDomain: true,
      contentType: "application/json",
      dataType: "json",
      success: function (response) {


          for (var i = 0; i < response.length; i++) {

              $('.empresas').append(' <div class="empresas-box"><div class="img-empresas"><div class="empresa"><a id="img" href="/Empresa/perfil-Empresa/perfilEmpresaVisivelAoUsuario.html"><img class="img" src="data:image/png;base64,' + response[i].fotoBase64 + '" /></a></div></div><div class="empresas-box-info"><div class="inf-empresas"><div class="bold name">'+ response[i].nome +'</div><div class="email"><span class="bold">Email: </span> '+ response[i].email +'</div><div class="info-empresa"><span class="bold"> Sobre: </span><p>'+ response[i].sobre +'</p></div></div></div></div> ');
          }

      },
      error: function (xhr, status) {

          console.log(xhr);
          console.log(status);

      }
  });

} */


//========================================================
/*
const inputFile = document.querySelector("#picture__input");
const pictureImage = document.querySelector(".picture__image");
const pictureImageTxt = "Choose an image";
pictureImage.innerHTML = pictureImageTxt;

inputFile.addEventListener("change", function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("picture__img");

      pictureImage.innerHTML = "";
      pictureImage.appendChild(img);
    });

    reader.readAsDataURL(file);
  } else {
    pictureImage.innerHTML = pictureImageTxt;
  }
});
*/