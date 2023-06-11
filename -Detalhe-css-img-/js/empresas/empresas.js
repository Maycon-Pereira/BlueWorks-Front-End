//Mostra todas as empresas cadastradas no site
function IdEmpresaGetAll(el) {
  var element = el;
  $('.empresas').on('click', '#img-a', function () {

    // Obtém o ID da vaga a ser atualizada
    var vagaId = element.parentNode.parentNode.parentNode.lastChild.firstChild.firstChild.innerHTML;

    // Redireciona para a página de atualização com o ID da vaga na URL
    //window.location.href = '/z-Novo_TCC/atualizar/AtualizarVaga/atualizarVaga.html?id=' + vagaId;
    window.location.href = '/z-Novo_TCC/Perfil/PerfilVisivelAosOutros/perfilEmpresaVisivelAoUsuario.html?id=' + vagaId;

  });

}
function empresaGetAll() {
  $.ajax({
    url: "http://localhost:8080/empresa",
    type: "GET",
    crossDomain: true,
    contentType: "application/json",
    dataType: "json",
    data: {
      id_motor: $("#meuMotor").val()
    },
    success: function (response) {
      for (var i = 0; i < response.length; i++) {



        $('.empresas').append(' <div class="empresas-box"><div class="img-empresas"><div class="empresa"><a id="img-a" onclick="IdEmpresaGetAll(this)"><img class="img" src="data:image/png;base64,' + response[i].fotoBase64 + '" /></a></div></div><div class="empresas-box-info"><div class="inf-empresas"><div class="id-perto-nome-opacity">' + response[i].id + '</div><div class="bold name">' + response[i].nome + '</div> <div class="email"><span class="bold">Email: </span> ' + response[i].email + '</div><div class="info-empresa"><span class="bold"> Sobre: </span><p>' + response[i].sobre + '</p></div></div></div></div> ');
      }
    },
    error: function (xhr, status) {
      //window.location.href = '/z-Novo_TCC/atualizar/AtualizarVaga/atualizarVaga.html';

      console.log(xhr);
      console.log(status);
    }
  });
}
//Mostra todas as empresas cadastradas no site FIM


//VER PERFIL DA VAGA

function VagaPerfil(el) {
  var element = el
  //alert("clicou no link")
  // Obtém o ID da vaga a ser atualizada
  var vagaId = element.parentNode.parentNode.parentNode.firstChild.innerHTML;
  //alert('id = ' + vagaId)

  window.location.href = '/z-Novo_TCC/Vaga/perfilVaga/vagaPerfil.html?id=' + vagaId;

}

var vagaId = new URLSearchParams(window.location.search).get('id');

function perfilVagaParaVisializar() {
  $.ajax({
    url: 'http://localhost:8080/vagas/' + vagaId,
    type: "GET",
    crossDomain: true,
    contentType: "application/json",
    dataType: "json",
    success: function (response) {
      console.log(vagaId)
      console.log("Passou por aqui! 1")

      console.log("Passou por aqui! 2")
      //(condição) ? valor_se_verdadeiro : valor_se_falso;
      var status_vaga = response.status_vaga ? "ATIVA" : "INATIVA";
      if (status_vaga != "ATIVA") {
        document.getElementById("statusVagaDisponivel").style.backgroundColor = "red";

      }

      $('.perfil-vaga').append('<div class="detalhe"><div class="bunner"><div id="idPerfilVaga">' + response.id + '</div><img src="data:image/png;base64,' + response.fotoBase64 + '" alt="Bunner Vaga"></div><div class="detalhe-vaga"><div class="Info"><div class="all-Info"><div class="title"><h2>' + response.nome + '</h2></div><div class="apresentacao"><div class="status"><div class="statusVaga"><label for="status"><span class="bold">Status da Vaga: </span><span id="statusVagaDisponivel" class="disponivel">' + status_vaga + '</span></label></div><div class="statusVaga" id="estado"><label for="estado"> <span class="bold">' + response.cidade + ' - ' + response.uf + '</span></label></div><div class="salario-bruto"><label for="salario"><span class="bold">R$: ' + response.salario + ' </span></label></div></div></div></div></div></div></div><div class="detalhe-body"><div class="infVaga"><h2>Informação da vaga</h2><p>' + response.sobre + '</p><div class="infVaga2"><div class="numVagas space"><label for="numVagas"><span class="bold">Número de vagas:</span> ' + response.qtda + '</label></div><div class="tipo-contrato space"><label for="tipo"><span class="bold"> Tipo de contrato e Jornada:</span>' + response.contrato + '</label></div><div class="area-profis space"><label for="area"><span class="bold"> Área Profissional:</span>' + response.area + '</label></div><div class="exigencia space"><label for="exigencia"><span class="bold"> Exigências: </span></label>' + response.exigencias + '<ul><li><span class="ex">Escolaridade Mínima: </span>' + response.escolaridade + '</li></ul></div><div class="valorizado val-space space"><label for="valorizado"><span class="bold"> Valorizado: </span></label><ul><li>' + response.valorizado + '</li></ul></div></div></div><div class="inf-empresa"></div></div>');
      console.log("Passou por aqui! 3")

      console.log("Passou por aqui! 4")
    },
    error: function (xhr, status) {
      console.log(xhr);
      console.log(status);
    }
  });
}
//VER PERFIL DA VAGA FIM


//VER PERFIL USUARIO

function UsuarioPerfilPart1(el) {
  var element = el
  //alert("clicou no link")
  // Obtém o ID da vaga a ser atualizada
  var usuarioId = element.parentNode.parentNode.parentNode.parentNode.firstChild.innerHTML;
  //alert('id usuario parte 1= ' + usuarioId)

  window.location.href = '/z-Novo_TCC/Usuario/perfilUsuarioVisivelAEmpresa.html?id=' + usuarioId;


}
/* function UsuarioPerfilPart2(el) {
  var element = el
  //alert("clicou no link")
  // Obtém o ID da vaga a ser atualizada
  var usuarioId = element.parentNode.parentNode.parentNode.firstChild.innerHTML;
  alert('id usuario = parte 2' + usuarioId)

  //window.location.href = '/z-Novo_TCC/Vaga/perfilVaga/vagaPerfil.html?id=' + usuarioId;

} */

var usuarioId = new URLSearchParams(window.location.search).get('id');
//alert(usuarioId)
function PerfilUsuarioVisivelAEmpresa() {

  $.ajax({
    url: 'http://localhost:8080/usuario/' + usuarioId,
    type: "GET",
    crossDomain: true,
    contentType: "application/json",
    dataType: "json",
    success: function (response) {


      $('.usuario-info').append('<div class="main-info"><div class="info"><div class="img"><img src="data:image/png;base64,' + response.fotoBase64 + '" /></div><div class="personal-info"><div class="info-0"><span class="name"><h2>' + response.nome + '</h2></span></div><div class="info-1"><label for="tel"><span class="bold"> Telefone: </span><span id="num">' + response.telefone + '</span></label></div><div class="info-1"><label for="mail"><span class="bold">Email: </span><span id="email">' + response.email + '</span></label></div><div class="info-1"><label for="addres"><span class="bold">Endereço: </span><span id="addres">' + response.cidade + ', ' + response.uf + '</span></label></div><div class="info-1"><label for="nasc"><span class="bold">Data de Nascimento:</span><span id="addres"> ' + response.nascimento + ' </span></label></div><div class="info-1"><label for="escola"><span class="bold">Escolaridade: </span><span id="escolaridade">' + response.escolaridade + ' </span></label></div></div></div></div><div class="main-info2"><div class="down-info"><div class="sobre-"><div class="mim"><div class="assunto"><h2>Sobre-mim</h2><p> ' + response.sobre + ' </p></div></div></div></div></div>');


    },
    error: function (xhr, status) {

      console.log(xhr);
      console.log(status);

    }
  });

}


// FIM VER PERFIL USUARIO


//Perfil admin crud vagas e usuarios

function AdminPerfilSobre(idEmpresaLogin) {



  $.ajax({
    url: "http://localhost:8080/empresa/" + idEmpresaLogin,
    type: "GET",
    crossDomain: true,
    contentType: "application/json",
    dataType: "json",
    success: function (response) {

      //alert(idEmpresaLogin)
      var nomeParaApagarCookie = response.id

      $('.botao').append(' <div class="img-perfil-empresbottom-liid empresa cadastroa"><div class="dropdonw-img-config"><img class="img" id="imagem-PerfilEmpresa" src="data:image/png;base64,' + response.fotoBase64 + '" /><div class="submenu-hover"><div class="id-display-none">' + response.id + '</div><a class="submenu" id="editar-perfil-empresa"  onclick="AtualizarSobre(this)">Editar Perfil</a><a class="submenu" onclick="apagarCookie(\'' + nomeParaApagarCookie + '\')">Sair</a></div></div></div> ');

      $('.estatisticas').append(' <div class="sobre-empresa-perfil"><div class="first-empresa-sobre" id="id-empresa-perfil"><div class="id-Empresa-to-Show"  id="empresa-id-div"> Id= ' + response.id + '</div><h4>' + response.nome + '</h4><div class="sobre-exp">Porte: ' + response.porte + '</div></div><div class="second-empresa-sobre"><div class="sobre-exp">Email: ' + response.email + '</div><div class="sobre-exp">Cnpj: ' + response.cnpj + '</div><div class="sobre-exp">Cep: ' + response.cep + '</div></div></div><div class="qtda-estat"><div class="qtda-estatistica vistos-por-usuarios"><div class="ti"><h4> Quantos viram: </h4></div><div class="qtda-num qtda-usuarios-visto"> 0 </div></div> <div class="qtda-estatistica vagas-cadastradas"><div class="ti"><h4> Vagas cadastradas: </h4></div><div class="qtda-num  vag-num"></div></div><div class="qtda-estatistica usuarios-candidatados"><div class="ti"><h4> Candidatos a vaga: </h4></div><div class="qtda-num usuario-num">  </div></div></div> ');
      $('.id-Empresa-to-Showff').append('<div class="empresa-id-div" id="' + response.id + '">' + response.id + '</div>')
      $('.nomeEmpresaDeuLike').append('<div class="nomeEmpresa">' + response.nome + '</div>');

      
      obterIdEmpresaLoginAtual(response.id)
      manterLogado(response.id)
      pegaIdEmpresa(response.id)
    },
    error: function (xhr, status) {
      console.log(xhr);
      console.log(status);
    }
  });

}
function AdminPerfilVagas(idEmpresaLogin) {
  var totVaga = 0;

  $.ajax({
    url: "http://localhost:8080/vagas",
    type: "GET",
    crossDomain: true,
    contentType: "application/json",
    dataType: "json",
    success: function (response) {

      for (var i = 0; i < response.length; i++) {

        if (response[i].id_empresa === idEmpresaLogin) {
          var dataExibicao = response[i].data_publicacao;
          if (response[i].data_atualizacao) {
            dataExibicao = response[i].data_atualizacao + '*';
          }

          $('.crud-vagas').append(' <div class="crud-vagas-1-5"><div class="id-vaga-to-delet-or-edit">' + response[i].id + '</div><div class="crud-vags-cadastradas-a-mostrar"><div class="link perfilView"><button class="buttonPerfilView" onclick="VagaPerfil(this)"><div class="content-vagas">' + response[i].nome + '</div></button></div><div class="link perfilView" id="backAtualizada"><button class="buttonPerfilView" onclick="VagaPerfil(this)"><div class="content-vagas">' + dataExibicao + '</div></button></div><div class="content-vagas"><div class="buttons"><div class="butt "><button class="edit" id="atualizarBtn" onclick="AtualizarVaga(this)"><a  rel="noopener noreferrer"> Editar </a> </button><button class="delet modal-button" id="open-modal" onclick="remove(this)"><a  rel="noopener noreferrer"> Excluir </a></button></div></div></div></div></div> ');
          /* edit   href="/z-Novo_TCC/atualizar/AtualizarVaga/atualizarVaga.html" */
          totVaga++;
        }
      }

      $('.vag-num').append(totVaga);

    },
    error: function (xhr, status) {

      console.log(xhr);
      console.log(status);

    }
  });

}


function AdminPerfilUsuarios() {

  var totalUsuarios = 0;


  $.ajax({
    url: "http://localhost:8080/usuario",
    type: "GET",
    crossDomain: true,
    contentType: "application/json",
    dataType: "json",
    success: function (response) {





      for (var i = 0; i < response.length; i++) {

        if (response[i].usuarioDipensado == false) {

          totalUsuarios = totalUsuarios + 1;

          if (response[i].empresaDeuLike == false) {
            $('.crud-usuario').append(' <div class="crud-vagas-1-5"><div class="id-vaga-to-delet-or-edit idUsuarioCandidatadaAVaga" id="' + response[i].id + '">' + response[i].id + '</div><div class="crud-usuarios-candidatados-a-mostrar"><div class="link perfilView"><div class="nomeEmpresaDeuLike">  <button class="buttonPerfilUserView butt1" onclick="UsuarioPerfilPart1(this)"><div class="content-vagas">' + response[i].nome + '</div></button></div></div><div class="link perfilView"><button class="buttonPerfilUserView but22" onclick="UsuarioPerfilPart1(this)" disabled><div class="content-vagas">' + response[i].escolaridade + '</div></button></div><div class="content-vagas" id="backgroundAccept"><div class="buttons"><div class="butt "><button class="edit" id="acceptDarLike" onClick="DarLike(this)"><a  rel="noopener noreferrer"> Gostei </a> </button><button class="delet" onClick="rejectUser(this)"><a  rel="noopener noreferrer"> Regeitar </a></button></div> </div></div></div></div> ');
          } else {
            $('.crud-aceitos').append(' <div class="crud-vagas-1-5"><div class="id-vaga-to-delet-or-edit idUsuarioCandidatadaAVaga" id="' + response[i].id + '">' + response[i].id + '</div><div class="crud-usuarios-candidatados-a-mostrar"><div class="link"><div class="nomeEmpresaDeuLike"> <button class="buttonPerfilUserView butt1" onclick="UsuarioPerfilPart1(this)"><div class="content-vagas">' + response[i].nome + '</div></button></div></div><div class="link"><button class="buttonPerfilUserView  but22" onclick="UsuarioPerfilPart1(this)" disabled><div class="content-vagas">' + response[i].escolaridade + '</div></button></div><div class="content-vagas"><div class="buttons"><div class="butt removeButt"><button class="removeButton" onclick="NaoDarLike(this)" ><a  rel="noopener noreferrer"> Remover </a></button></div></div></div></div></div> ');
          }

        }

      }
      $('.usuario-num').append('' + totalUsuarios + '')
      /* $('.qtda-usuarios-visto').append('' + totUsu + '') */


    },
    error: function (xhr, status) {
      console.log(xhr);
      console.log(status);
    }
  });

  $.ajax({
    url: "http://localhost:8080/empresa",
    type: "GET",
    crossDomain: true,
    contentType: "application/json",
    dataType: "json",
    success: function (response) {
      for (var i = 0; i < response.length; i++) {

        $('.nomeEmpresaDeuLike').append('<div class="nomeEmpresa">' + response[i].nome + '</div>');
      }
    },
    error: function (xhr, status) {
      //window.location.href = '/z-Novo_TCC/atualizar/AtualizarVaga/atualizarVaga.html';

      console.log(xhr);
      console.log(status);
    }
  });


}




//========PUT TYPE FOR ATUALIZAR PERFIL EMPRESA========
var empresaId = localStorage.getItem('idEmpresaLogada');
function AtualizarSobre(el) {
  var element = el;
  $('.botao').on('click', '#editar-perfil-empresa', function () {

    // Obtém o ID da vaga a ser atualizada
    
    // Redireciona para a página de atualização com o ID da vaga na URL
    window.location.href = '/z-Novo_TCC/atualizar/AtualizarPerfil/AtualizarEmpresa.html?id=' + empresaId;

  });
}
var empresaId = localStorage.getItem('idEmpresaLogada');
//ATUALIZAR EMPRESA

var senha;
var confirmSenha;
var statusEmpresa = "ATIVA"

$.ajax({
  url: 'http://localhost:8080/empresa/' + empresaId,
  type: 'GET',
  success: function (response) {
    // Popula os campos de formulário com os valores da vaga

    function formatCNPJ(cnpj) {
      if (!cnpj) return '';
      return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
    }

    function formatCEP(cep) {
      if (typeof cep === 'string') {
        return cep.replace(/^(\d{5})(\d{3})$/, '$1-$2');
      } else {
        return cep;
      }
    }


    $('#name').val(response.nome);
    $('#cnpj').val(formatCNPJ(response.cnpj));
    $('#porte').val(response.porte);
    $('#historia').val(response.sobre);

    $('#cep').val(formatCEP(response.cep));
    $('#rua').val(response.logradouro);
    $('#bairro').val(response.bairro);
    $('#cidade').val(response.cidade);
    $('#uf').val(response.uf);

    $('#numero').val(response.telefone);
    $('#email').val(response.email);

    senha = response.senha;
    confirmSenha = response.confirmSenha;


    console.log("1")

    //var image = new Image();
    //alert(response.fotoBase64)
    console.log("2")
    //image.src = 'data:image/png;base64,' + response.fotoBase64
    /* document.body.appendChild(image) */
    console.log("3")
    var imgElement = document.getElementById('frameEmpresaAtlz');
    imgElement.src = 'data:image/png;base64,' + response.fotoBase64;
    //$('#frame').val(image)
    console.log("4")

    var inputFile = document.getElementById('uploadImg');
    console.log("5")
    inputFile.addEventListener('change', function (event) {
      var file = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function (e) {
        var imgElement = document.getElementById('frameEmpresaAtlz');
        imgElement.src = e.target.result;
      };
      console.log("7")
      reader.readAsDataURL(file);
      console.log("8")
    });






  },
  error: function (xhr, status) {
    alert('Erro ao carregar dados da vaga: ' + status);

  }
});



$('#atualizarEmpresa').on('click', function () {
  // Cria um objeto com os valores atualizados
  var dadosAtualizados = {
    nome: $("#name").val(),
    cnpj: $("#cnpj").val(),
    porte: $("#porte").val(),
    sobre: $("#historia").val(),
    cep: $("#cep").val(),
    logradouro: $("#rua").val(),
    bairro: $("#bairro").val(),
    cidade: $("#cidade").val(),
    uf: $("#uf").val(),
    telefone: $("#numero").val(),
    email: $("#email").val(),
    status_empresa: statusEmpresa,
    senha: senha,
    confirmSenha: confirmSenha
  };

  var inputFile = document.getElementById('uploadImg');
  var file = inputFile.files[0]; // Obtém o arquivo selecionado

  if (file) {
    var formData = new FormData();

    formData.append('imagem', file);
    console.log(formData)
    // Adicione outros dados ao FormData, se necessário
    Object.entries(dadosAtualizados).forEach(([key, value]) => {
      formData.append(key, value);
      //console.log(key, value)
    });

    console.log("1")


    $.ajax({
      url: 'http://localhost:8080/empresa/' + empresaId,
      type: "PUT",
      crossDomain: true,
      data: JSON.stringify(dadosAtualizados),
      contentType: "application/json",
      dataType: "json",

      success: function (response) {

        //var resp = JSON.parse(response)
        console.log("2")
        console.log(response);
        console.log("3")

        //location.href redireciona para a tela escolhida após o submit.
        location.href = "/z-Novo_TCC/Perfil/perfil.html?idEmpresaLogin=" + empresaId;
        uploadImagem(response.id, event);
      },

      /* O ERRO 501 ESTÁ AQUI!!! ELE NÃO ATUALIZA POR CAUSA DISSO ABAIXO */

    });
    /* O ERRO ESTÁ AQUI!! ACIMA */





  } else {
    console.log("4")
    // Se nenhum arquivo foi selecionado, envie apenas os outros dados
    $.ajax({
      url: 'http://localhost:8080/empresa/' + empresaId,
      type: 'PUT',
      data: JSON.stringify(dadosAtualizados),
      contentType: 'application/json',
      success: function (response) {
        // alert('Empresa atualizada com sucesso!');
        location.href = "/z-Novo_TCC/Perfil/perfil.html?idEmpresaLogin=" + empresaId;

      },
      error: function (xhr, status) {
        console.log("6")
        console.log('Erro ao atualizar a Empresa: ' + status);
      }
    });
  }
});


/* 
// Evento de clique no botão de atualizar
$('#atualizarEmpresa').on('click', function () {
  // Cria um objeto com os valores atualizados

  var dadosAtualizados = {
    nome: $("#name").val(),
    cnpj: $("#cnpj").val(),
    porte: $("#porte").val(),
    sobre: $("#historia").val(),
    cep: $("#cep").val(),
    logradouro: $("#rua").val(),
    bairro: $("#bairro").val(),
    cidade: $("#cidade").val(),
    uf: $("#uf").val(),
    numero: $("#numero").val(),
    email: $("#email").val(),

    fotoBase64: $("#uploadImg").val()

  };

  // Envia a solicitação PUT para atualizar a emepresa
  $.ajax({
    url: 'http://localhost:8080/empresa/' + empresaId,
    type: 'PUT',
    data: JSON.stringify(dadosAtualizados),
    contentType: 'application/json',
    success: function (response) {
      //alert('Empresa atualizada com sucesso!');
      location.href = "/z-Novo_TCC/Perfil/perfil.html";
    },
    error: function (xhr, status) {
      console.log('Erro ao atualizar a Empresa: ' + status);
    }
  });
});
 */




//========FIM PUT TYPE FOR ATUALIZAR PERFIL EMPRESA========


/* 
//========PUT TYPE FOR ATUALIZAR VAGA========

function AtualizarVaga(el) {
  var element = el;
  $('.crud-vagas').on('click', '#atualizarBtn', function () {

    // Obtém o ID da vaga a ser atualizada
    var vagaId = element.parentNode.parentNode.parentNode.parentNode.parentNode.firstChild.innerHTML;
    // Redireciona para a página de atualização com o ID da vaga na URL
    window.location.href = '/z-Novo_TCC/atualizar/AtualizarVaga/atualizarVaga.html?id=' + vagaId;

  });
}


//ATUALIZAR VAGA
var vagaId = new URLSearchParams(window.location.search).get('id');

$.ajax({
  url: 'http://localhost:8080/vagas/' + vagaId,
  type: 'GET',
  success: function (response) {
    // Popula os campos de formulário com os valores da vaga

    function formatCNPJ(cnpj) {
      if (!cnpj) return '';
      return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
    }

    function formatCEP(cep) {
      if (typeof cep === 'string') {
        return cep.replace(/^(\d{5})(\d{3})$/, '$1-$2');
      } else {
        return cep;
      }
    }

    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const data = day + "/" + month + "/" + year;


    $('#name').val(response.nome);

    $('#type').val(response.tipo);

    $('#qtda').val(response.qtda);
    $('#salario').val(response.salario);
    $('#escolaridadeVaga').val(response.escolaridade);
    $('#area').val(response.area);
    $('#exigencia').val(response.exigencias);
    $('#valorizado').val(response.valorizado);
    $('#tipoContrato').val(response.contrato);

    $('#historia-vaga').val(response.sobre);
    $('#cnpj').val(formatCNPJ(response.cnpj));
    $('#cep').val(formatCEP(response.cep));
    $('#rua').val(response.logradouro);
    $('#bairro').val(response.bairro);
    $('#uf').val(response.uf);
    $('#cidade').val(response.cidade);

    //não dá o preview da imagem já cadastrada
    if (response.fotoBase64 !== undefined && response.fotoBase64.length > 0) {
      $('#frame').attr('src', 'data:image/png;base64,' + response.fotoBase64);
    }



  },
  error: function (xhr, status) {
    alert('Erro ao carregar dados da vaga: ' + status);
  }
});




// Evento de clique no botão de atualizar
$('#atualizarVaga').on('click', function () {
  // Cria um objeto com os valores atualizados
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const data = day + "/" + month + "/" + year;

  var dadosAtualizados = {
    nome: $("#name").val(),
    tipo: $("#type").val(),
    qtda: $("#qtda").val(),
    data: data,
    salario: $("#salario").val(),
    escolaridade: $("#escolaridadeVaga").val(),
    area: $("#area").val(),
    exigencias: $("#exigencia").val(),
    valorizado: $("#valorizado").val(),
    contrato: $("#tipoContrato").val(),
    sobre: $("#historia-vaga").val(),
    cnpj: $("#cnpj").val(),
    cep: $("#cep").val(),
    logradouro: $("#rua").val(),
    bairro: $("#bairro").val(),
    uf: $("#uf").val(),
    cidade: $("#cidade").val(),
    fotoBase64: $("#uploadImg").val()

  };

  // Envia a solicitação PUT para atualizar a vaga
  $.ajax({
    url: 'http://localhost:8080/vagas/' + vagaId,
    type: 'PUT',
    data: JSON.stringify(dadosAtualizados),
    contentType: 'application/json',
    success: function (response) {
      alert('Vaga atualizada com sucesso!');
      location.href = "/z-Novo_TCC/Perfil/perfil.html";
    },
    error: function (xhr, status) {
      console.log('Erro ao atualizar a vaga: ' + status);
    }
  });
});
 */

//========END PUT TYPE FOR ATUALIZAR VAGA========



//========DELETE TYPE AND OPEN MODAL========
function openModal(button) {
  var modal = document.getElementById("modal");
  var fade = document.getElementById("fade");
  var closeBtn = document.getElementById("close-modal");
  var cancelBtn = document.getElementById("cancel-modal");
  // Adiciona um evento de clique ao botão de cancelar
  /*  cancelBtn.onclick = function () {
     console.log("voce foi descandidatado!")
     closeModal(modal, fade);
   } */
  closeBtn.onclick = function () {
    console.log("voce saiu!")
    closeModal(modal, fade);
  }
  // Exibe o modal e o fade
  modal.classList.remove("hide");
  fade.classList.remove("hide");
}
function closeModal(modal, fade) {
  // Oculta o modal e o fade
  modal.classList.add("hide");
  fade.classList.add("hide");
}
//Delete vagas!
function remove(el) {
  var element = el;
  // Obtém o ID da vaga a ser deletada
  var VagaId = element.parentNode.parentNode.parentNode.parentNode.parentNode.firstChild.innerHTML;

  // Exibe o modal antes de excluir a vaga
  openModal();
  // Adiciona um evento de clique ao botão de confirmar exclusão do modal
  var confirmBtn = document.getElementById("confirm-modal");
  confirmBtn.onclick = function () {

    $.ajax({
      url: 'http://localhost:8080/vagas/' + VagaId,
      type: "DELETE",
      crossDomain: true,
      contentType: "application/json",
      dataType: "json",
      success: function (response) {
        // Remove a vaga da lista após excluí-la

        location.reload();
        element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(element.parentNode.parentNode.parentNode.parentNode.parentNode);
        closeModal(document.getElementById("modal"), document.getElementById("fade"));
        location.reload();
      },
      error: function (xhr, status) {
        var json = JSON.parse(xhr.responseText);
        alert(json.mensagem);
      }
    });
  }
}
//========DELETE TYPE AND OPEN MODAL========



//=============Dar Like No Usuario================

/* function GetNameEmpresa(el) {
  var element = el;
  $('.buttons').on('click', '#acceptDarLike', function () {

    alert("aqui")

    //var empresaId = element.parentNode.firstChild.innerHTML;

  });
} */


function errorAlert() {
  const divMessage = document.querySelector(".alert");

  const msg = "Tente novamente";

  function ativar(msg) {
    const message = document.createElement("div");
    message.classList.add("message");
    message.innerText = msg;
    divMessage.appendChild(message);

    setTimeout(() => {
      message.style.display = "none";
      window.location.reload();
    }, 1000);
  }
  ativar(msg);
}
//DAR LIKE NO USUARIO

function DarLike(el) {
  var element = el;
  //alert("Deu Like!")

  // var UsuarioId = element.parentNode.parentNode.parentNode.parentNode.parentNode.firstChild.innerHTML;
  //var UsuarioNome = element.parentNode.parentNode.parentNode.parentNode.firstChild.lastChild.firstChild.innerHTML;

  var UsuarioId = document.querySelector('.idUsuarioCandidatadaAVaga').innerHTML.trim();
  //alert("id usuario trim()  = "+UsuariovId)

  //alert(UsuarioId)
  //var EmpresaNome = element.parentNode.parentNode.parentNode.parentNode.firstChild.lastChild.lastChild.innerHTML;
  var EmpresaNome = document.querySelector('.nomeEmpresa').innerHTML.trim();

  //alert(EmpresaNome)
  var userNome = element.parentNode.parentNode.parentNode.parentNode.firstChild.firstChild.innerHTML;
  var userFormacao = element.parentNode.parentNode.firstChild.innerHTML;
  //EmpresaNome.trim()
  //alert(userFormacao)

  console.log('usuario->' + UsuarioId + ' empresa->' + EmpresaNome,)

  $.ajax({
    url: 'http://localhost:8080/usuario/darLikeEmUsuario/' + UsuarioId + '/' + EmpresaNome,
    type: "PUT",
    crossDomain: true,
    contentType: "application/json",
    success: function (response) {
      //alert(UsuarioId)
      element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(element.parentNode.parentNode.parentNode.parentNode.parentNode);
      //alert(UsuarioId)
      window.location.reload();
      //alert(UsuarioId)
    },
    error: function (xhr, status) {
      /* alert('' + status + ' Tente novamente');
      window.location.reload(); */

      errorAlert()
    }
  });
}

//DAR LIKE NO USUARIO FIM

// NAO DAR LIKE 

function NaoDarLike(el) {
  var element = el;
  //alert("Deu Like!")

  var UsuarioId = element.parentNode.parentNode.parentNode.parentNode.parentNode.firstChild.innerHTML;
  //var UsuarioNome = element.parentNode.parentNode.parentNode.parentNode.firstChild.lastChild.firstChild.innerHTML;
  //alert("remover="+UsuarioId)
  var EmpresaNome = element.parentNode.parentNode.parentNode.parentNode.firstChild.lastChild.lastChild.innerHTML;
  //alert(EmpresaNome)
  var userNome = element.parentNode.parentNode.parentNode.parentNode.firstChild.firstChild.innerHTML;
  var userFormacao = element.parentNode.parentNode.firstChild.innerHTML;
  //EmpresaNome.trim()
  //alert(userFormacao)

  console.log('usuario->' + UsuarioId + ' empresa->' + EmpresaNome,)

  $.ajax({
    url: 'http://localhost:8080/usuario/naodarLikeEmUsuario/' + UsuarioId + '/' + EmpresaNome,
    type: "PUT",
    crossDomain: true,
    contentType: "application/json",
    success: function (response) {

      element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(element.parentNode.parentNode.parentNode.parentNode.parentNode);

      window.location.reload();

    },
    error: function (xhr, status) {
      /* alert('' + status + ' Tente novamente');
      window.location.reload(); */

      errorAlert()
    }
  });
}

// FIM NAO DAR LIKE


function rejectUser(el) {
  var element = el;

  var UsuarioId = element.parentNode.parentNode.parentNode.parentNode.parentNode.firstChild.innerHTML;
  //var UsuarioNome = element.parentNode.parentNode.parentNode.parentNode.firstChild.lastChild.firstChild.innerHTML;

  var EmpresaNome = element.parentNode.parentNode.parentNode.parentNode.firstChild.lastChild.lastChild.innerHTML;


  element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(element.parentNode.parentNode.parentNode.parentNode.parentNode);
  //alert('usuario removido com sucesso! ')


  $.ajax({
    url: 'http://localhost:8080/usuario/dispensarUsuario/' + UsuarioId + '/' + EmpresaNome,
    type: "PUT",
    crossDomain: true,
    contentType: "application/json",
    success: function (response) {

      window.location.reload();
      element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(element.parentNode.parentNode.parentNode.parentNode.parentNode);

      //window.location.reload();

    },
    error: function (xhr, status) {
      /* alert('' + status + ' Tente novamente');
      window.location.reload(); */

      errorAlert()
    }

  });

}

