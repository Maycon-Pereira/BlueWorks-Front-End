//variaveis
const formVaga = document.getElementById("formVaga");
const camposVaga = document.querySelectorAll(".required");
const spansVaga = document.querySelectorAll(".exception");
const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


const nomeInputVaga = document.querySelector("#name")
const typeInputVaga = document.getElementById('type')
const qtdaInputVaga = document.getElementById('qtda')
const salarioInputVaga = document.getElementById('salario')

const escolaridadeSelectVaga = document.getElementById('escolaridadeVaga')

const areaInputVaga = document.getElementById('area')
const exigenciasInputVaga = document.getElementById('exigencia')
const valorizadoInputVaga = document.getElementById('valorizado')
const tipoContratoSelectVaga = document.getElementById('tipoContrato')

const cepInputVaga = document.getElementById('cep')
const ruaInputVaga = document.getElementById('rua')
const bairroInputVaga = document.getElementById('bairro')
const cidadeInputVaga = document.getElementById('cidade')
const ufInputVaga = document.getElementById('uf')

const imgInputVaga = document.getElementById('uploadImg')

const historiaTextareaVaga = document.getElementById('historia-vaga')
const cnpjInputVaga = document.getElementById('cnpj')
//const passwordInputVaga = document.getElementById('password')


// Validação Atualiza Vaga
formVaga.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidate()
    qtdaValidate()
    salarioValidate()
    areaValidate()
    exigenciaValidate()
    cnpjValidate()
    sobreValidate()
    cepValidate()
    //mainPasswordValidate()
})
function setError(index) {
    camposVaga[index].style.border = '1px solid rgb(218, 21, 21)';
    spansVaga[index].style.opacity = '1';
}
function removeError(index) {
    camposVaga[index].style.border = '';
    spansVaga[index].style.opacity = '0';
}

function nameValidate() {
    if (camposVaga[0].value.length < 3) {

        setError(0);

    } else {

        removeError(0)

    }
}
function qtdaValidate() {
    if (camposVaga[1].value < 1) {

        setError(1);

    } else {

        removeError(1)

    }
}
function salarioValidate() {
    if (camposVaga[2].value.length < 6 ) {

        setError(2);

    } else {

        removeError(2)

    }
}
function areaValidate() {
    if (camposVaga[3].value.length < 3) {

        setError(3);

    } else {

        removeError(3)

    }
}
function exigenciaValidate() {
    if (camposVaga[4].value.length < 3) {

        setError(4);

    } else {

        removeError(4)

    }
}
function cepValidate() {
    if (camposVaga[5].value.length < 9) {

        setError(5);

    } else {

        removeError(5)

    }
}
function sobreValidate() {
    if (camposVaga[6].value.length < 5) {

        setError(6);

    } else {

        removeError(6)

    }
}


function cnpjValidate() {
    if (camposVaga[7].value.length < 18) {

        setError(7);

    } else {

        removeError(7)

    }
}
/*
function mainPasswordValidate() {
    if (camposVaga[8].value.length < 8) {
        setError(8);
    } else {
        removeError(8);
    }
} */
// Fim Validação Atualiza Vaga

//========PUT TYPE TO ATUALIZAR VAGA========
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
        if (response.fotoBase64 !== undefined && response.fotoBase64 > 0) {
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

    var statusVaga = "ATIVA"

    var dadosAtualizados = {
        nome: $("#name").val(),
        tipo: $("#type").val(),
        qtda: $("#qtda").val(),
        data_atualizacao: data,
        status_vaga:statusVaga,
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
    //if (nomeAtualizado.length != "") {

    var dadosAtualizados = JSON.parse(JSON.stringify(dadosAtualizados));

    /* if (dadosAtualizados.valorizado === "") {
        dadosAtualizados.valorizado.replace("", ".");
        alert("val replace: " + dadosAtualizados.valorizado)
    }
    if (prop === "valorizado") {
        dadosAtualizados[prop] = dadosAtualizados[prop].replace("", ".");
      } */

    var propertiesToIgnore = ["valorizado", "fotoBase64"];

    for (var prop in dadosAtualizados) {
        if (dadosAtualizados.hasOwnProperty(prop)) {
            if (dadosAtualizados[prop] === "" && !propertiesToIgnore.includes(prop)) {
                //alert("consegui parar");
                console.log("Propriedade vazia: " + prop);
                return;
            }
        }
    }

    // Envia a solicitação PUT para atualizar a vaga
    $.ajax({
        url: 'http://localhost:8080/vagas/' + vagaId,
        type: 'PUT',
        data: JSON.stringify(dadosAtualizados),
        contentType: 'application/json',
        success: function (response) {

            location.href = "/z-Novo_TCC/Perfil/perfil.html";

        },
        error: function (xhr, status) {
            console.log('Erro ao atualizar a vaga: ' + status);
            // Restante do código...
        }
    });

    //}


});


/*
function autoValidation() {
 */
//}
//
//
//