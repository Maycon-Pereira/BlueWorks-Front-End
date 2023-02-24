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



//Perfil admin crud vagas e usuarios

function AdminPerfilImagem() {

  $.ajax({
    url: "http://localhost:8080/empresa/v2/image/download",
    type: "GET",
    crossDomain: true,
    contentType: "application/json",
    dataType: "json",
    success: function (response) {

      for (var i = 0; i < response.length; i++) {

        $('.botao').append(' <div class="img-perfil-empresa"><div class="dropdonw-img-config"><img class="img" src="data:image/png;base64,' + response[i].fotoBase64 + '" /><div class="submenu-hover"><div class="id-display-none">' + response[i].id + '</div><a class="submenu" id="editar-perfil-empresa"  onclick="AtualizarSobre(this)">Editar Perfil</a><a class="submenu" href="">Sair</a></div></div></div> ');
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

        $('.estatisticas').append(' <div class="sobre-empresa-perfil"><div class="first-empresa-sobre" id="id-empresa-perfil"><div class="id-Empresa-to-Show"  id="empresa-id-div"> Id= ' + response[i].id + '</div><h4>' + response[i].nome + '</h4><div class="sobre-exp">Porte: ' + response[i].porte + '</div></div><div class="second-empresa-sobre"><div class="sobre-exp">Email: ' + response[i].email + '</div><div class="sobre-exp">Cnpj: ' + response[i].cnpj + '</div><div class="sobre-exp">Cep: ' + response[i].cep + '</div></div></div><div class="qtda-estat"><div class="qtda-estatistica vistos-por-usuarios"><div class="ti"><h4> Quantos viram: </h4></div><div class="qtda-num"> 0 </div></div> <div class="qtda-estatistica vagas-cadastradas"><div class="ti"><h4> Vagas cadastradas: </h4></div><div class="qtda-num  vag-num"></div></div><div class="qtda-estatistica usuarios-candidatados"><div class="ti"><h4> Candidatos a vaga: </h4></div><div class="qtda-num usuario-num"></div></div></div> ');

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

        $('.crud-vagas').append(' <div class="crud-vagas-1-5"><div class="id-vaga-to-delet-or-edit">' + response[i].id + '</div><div class="crud-vags-cadastradas-a-mostrar"><div class="link"><a href=""><div class="content-vagas">' + response[i].nome + '</div></a></div><div class="link"><a href=""><div class="content-vagas">' + response[i].data + '</div></a></div><div class="content-vagas"><div class="buttons"><div class="butt "><button class="edit" id="atualizarBtn" onclick="AtualizarVaga(this)"><a  rel="noopener noreferrer"> Edit </a> </button><button class="delet modal-button" id="open-modal" onclick="remove(this)"> Delete </button></div></div></div></div></div> ');
        /* edit   href="/z-Novo_TCC/atualizar/AtualizarVaga/atualizarVaga.html" */
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

        $('.crud-usuario').append(' <div class="crud-vagas-1-5"><div class="id-vaga-to-delet-or-edit">' + response[i].id + '</div><div class="crud-usuarios-candidatados-a-mostrar"><div class="link"><a href=""><div class="content-vagas">' + response[i].nome + '</div></a></div><div class="link"><a href=""><div class="content-vagas">' + response[i].escolaridade + '</div></a></div><div class="content-vagas"><div class="buttons"><div class="butt "><button class="edit"> Accept </button><button class="delet"> Reject </button></div> </div></div></div></div> ');
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




//========PUT TYPE FOR ATUALIZAR PERFIL EMPRESA========

function AtualizarSobre(el) {
  var element = el;
  $('.botao').on('click', '#editar-perfil-empresa', function () {

    // Obtém o ID da vaga a ser atualizada
    var empresaId = element.parentNode.firstChild.innerHTML;
    // Redireciona para a página de atualização com o ID da vaga na URL
    window.location.href = '/z-Novo_TCC/atualizar/AtualizarPerfil/AtualizarEmpresa.html?id=' + empresaId;

  });
}

//ATUALIZAR EMPRESA
var empresaId = new URLSearchParams(window.location.search).get('id');

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

    //não dá o preview da imagem já cadastrada
    //$('#frame').attr('src', 'data:image/png;base64,' + response.fotoBase64);
    if (response.fotoBase64 !== undefined && response.fotoBase64 > 0) {
      $('#frame').attr('src', 'data:image/png;base64,' + response.fotoBase64);
    }

  },
  error: function (xhr, status) {
    alert('Erro ao carregar dados da vaga: ' + status);

  }
});


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
      alert('Empresa atualizada com sucesso!');
      location.href = "/z-Novo_TCC/Perfil/perfil.html";
    },
    error: function (xhr, status) {
      console.log('Erro ao atualizar a Empresa: ' + status);
    }
  });
});





//========FIM PUT TYPE FOR ATUALIZAR PERFIL EMPRESA========



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


/* 

function AtualizarVaga(el) {
  var element = el;
  // Obtém o ID da vaga a ser atualizada
  var VagaId = element.parentNode.parentNode.parentNode.parentNode.parentNode.firstChild.innerHTML;

  //window.location.href = '/z-Novo_TCC/atualizar/AtualizarVaga/atualizarVaga.html';
  
  // Cria o objeto JSON com os dados da vaga atualizados

  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
      //console.log(" -- " +day+"/"+month+"/"+year +" -- ") 



  var name = $("#name").val();
  var tipo = $("#type").val();
  var qtda = $("#qtda").val();
  var data = day + "/" + month + "/" + year;
  var salario = $("#salario").val();

  var escolaridade = $("#escolaridadeVaga").val();
  var area = $("#area").val();
  var exigencia = $("#exigencia").val();
  var valorizado = $("#valorizado").val();
  var tipoContrato = $("#tipoContrato").val();
  var sobre = $("#historia-vaga").val();
  var cnpj = $("#cnpj").val();

  var senha = $("#password").val();
  var cep = $("#cep").val();

  var logradouro = $("#rua").val();
  var bairro = $("#bairro").val();
  var uf = $("#uf").val();
  var cidade = $("#cidade").val();
  var fotoPerfil = $("#uploadImg").val();



  var request = {
    "nome": name,
    "tipo": tipo,
    "qtda": qtda,
    "data": data,
    "salario": salario,
    "escolaridade": escolaridade,
    "area": area,
    "exigencias": exigencia,
    "valorizado": valorizado,
    "contrato": tipoContrato,
    "sobre": sobre,
    "cnpj": cnpj,
    "senha": senha,
    "cep": cep,
    "logradouro": logradouro,
    "bairro": bairro,
    "uf": uf,
    "cidade": cidade,
    "fotoPerfil": fotoPerfil,
  }

  console.log(request); // Verifica o objeto JSON que está sendo enviado

  $.ajax({
    url: 'http://localhost:8080/vagas/' + VagaId,
    type: "PUT",
    crossDomain: true,
    contentType: "application/json",
    data: JSON.stringify(request),
    success: function (response) {
      console.log('A Vaga '+ VagaId +' atualizada com sucesso');
    },
    error: function (xhr, status) {
      console.log("Erro ao atualizar a vaga");
      console.log(xhr);
      console.log(status);

      let jsonObject = JSON.parse(xhr.responseText);
      let objects = jsonObject.erros;

      let str = JSON.stringify(objects, null, 4);

      var dataJSON = JSON.parse(str);

      if (dataJSON !== null) {
        el.preventDefault();

        if ('nome' in dataJSON == true) {
          nomeInput.style.border = "1px solid rgb(218, 21, 21)";
          document.getElementById("--name--").style.opacity = '1';
          //spans.style.opacity = '1';  o opacity não funciona aqui
        }
        if ('qtda' in dataJSON == true) {
          qtdaInput.style.border = "1px solid rgb(218, 21, 21)";
          document.getElementById("--qtda--").style.opacity = '1';
          //spans.style.opacity = '1';
        }
        if ('salario' in dataJSON == true) {
          salarioInput.style.border = "1px solid rgb(218, 21, 21)";
          document.getElementById("--salario--").style.opacity = '1';
          //spans.style.opacity = '1';
        }
        if ('area' in dataJSON == true) {
          areaInput.style.border = "1px solid rgb(218, 21, 21)";
          document.getElementById("--area--").style.opacity = '1';
          //spans.style.opacity = '1';
        }
        if ('exigencias' in dataJSON == true) {
          exigenciasInput.style.border = "1px solid rgb(218, 21, 21)";
          document.getElementById("--exigencias--").style.opacity = '1';
          //spans.style.opacity = '1';
        }
        if ('cep' in dataJSON == true) {
          cepInput.style.border = "1px solid rgb(218, 21, 21)";
          document.getElementById("--cep--").style.opacity = '1';
          //spans.style.opacity = '1';
        }
        if ('sobre' in dataJSON == true) {
          historiaTextarea.style.border = "1px solid rgb(218, 21, 21)";
          document.getElementById("--sobre--").style.opacity = '1';
          //spans.style.opacity = '1';
        }
        if ('cnpj' in dataJSON == true) {
          //a propriedade "style" esta colorido, enquanto não devia!!!
          cnpjInput.style.border = "1px solid rgb(218, 21, 21)";
          document.getElementById("--cnpj--").style.opacity = '1';
          //spans.style.opacity = '1';
        }
        if ('senha' in dataJSON == true) {
          passwordInput.style.border = "1px solid rgb(218, 21, 21)";
          document.getElementById("--senha--").style.opacity = '1';
        }


        
      }
      alert(str)
    }
  });
} */

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

