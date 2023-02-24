//variaveis
const form = document.getElementById("formVaga");
const campos = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".exception");
const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
/* const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$/; */


const nomeInput = document.querySelector("#name")
const typeInput = document.getElementById('type')
const qtdaInput = document.getElementById('qtda')
const salarioInput = document.getElementById('salario')

const escolaridadeSelect = document.getElementById('escolaridadeVaga')

const areaInput = document.getElementById('area')
const exigenciasInput = document.getElementById('exigencia')
const valorizadoInput = document.getElementById('valorizado')
const tipoContratoSelect = document.getElementById('tipoContrato')

const cepInput = document.getElementById('cep')
const ruaInput = document.getElementById('rua')
const bairroInput = document.getElementById('bairro')
const cidadeInput = document.getElementById('cidade')
const ufInput = document.getElementById('uf')

const imgInput = document.getElementById('uploadImg')

const historiaTextarea = document.getElementById('historia-vaga')
const cnpjInput = document.getElementById('cnpj')
const passwordInput = document.getElementById('password')




form.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidate()
    qtdaValidate()
    salarioValidate()
    areaValidate()
    exigenciaValidate()
    cnpjValidate()
    sobreValidate()
    cepValidate()
    mainPasswordValidate()
})
function setError(index) {
    campos[index].style.border = '1px solid rgb(218, 21, 21)';
    spans[index].style.opacity = '1';
}
function removeError(index) {
    campos[index].style.border = '';
    spans[index].style.opacity = '0';
}

function nameValidate() {
    if (campos[0].value.length < 3) {

        setError(0);

    } else {

        removeError(0)

    }
}
function qtdaValidate() {
    if (campos[1].value < 1) {

        setError(1);

    } else {

        removeError(1)

    }
}
function salarioValidate() {
    if (campos[2].value.length < 7) {

        setError(2);

    } else {

        removeError(2)

    }
}
function areaValidate() {
    if (campos[3].value.length < 3) {

        setError(3);

    } else {

        removeError(3)

    }
}
function exigenciaValidate() {
    if (campos[4].value.length < 3) {

        setError(4);

    } else {

        removeError(4)

    }
}
function cepValidate() {
    if (campos[5].value.length < 9) {

        setError(5);

    } else {

        removeError(5)

    }
}
function sobreValidate() {
    if (campos[6].value.length < 5) {

        setError(6);

    } else {

        removeError(6)

    }
}


function cnpjValidate() {
    if (campos[7].value.length < 18) {

        setError(7);

    } else {

        removeError(7)

    }
}

function mainPasswordValidate() {
    if (campos[8].value.length < 8) {
        setError(8);
    } else {
        removeError(8);
    }
}

//VAGAS--------------------------------------------


/* $.ajax({
    url: "http://localhost:8080/vagas",
    type: "POST",
    crossDomain: true,
    data: JSON.stringify(request),
    contentType: "application/json",
    dataType: "json",

    success: function (response) {
        console.log("2")
        //var resp = JSON.parse(response)
        console.log(response);
        console.log("foi")
        uploadImagem(response.id, event); console.log("4")
        location.href = "/z-Novo_TCC/Perfil/perfil.html";
    },
    error: function (xhr, status) {
        console.log("5")
        console.log(xhr);
        console.log("6")
        console.log(status);
        console.log("7")

        let jsonObject = JSON.parse(xhr.responseText);
        let objects = jsonObject.erros;

        let str = JSON.stringify(objects, null, 4);

        var dataJSON = JSON.parse(str);

        if (dataJSON !== null) {
            event.preventDefault();

            if ('nome' in dataJSON == true) {
                nomeInput.style.border = "1px solid rgb(218, 21, 21)";
                document.getElementById("--name--").style.opacity = '1';
                spans.style.opacity = '1';  o opacity não funciona aqui
            }
            if ('qtda' in dataJSON == true) {
                qtdaInput.style.border = "1px solid rgb(218, 21, 21)";
                document.getElementById("--qtda--").style.opacity = '1';
                spans.style.opacity = '1';
            }
            if ('salario' in dataJSON == true) {
                salarioInput.style.border = "1px solid rgb(218, 21, 21)";
                document.getElementById("--salario--").style.opacity = '1';
                spans.style.opacity = '1';
            }
            if ('area' in dataJSON == true) {
                areaInput.style.border = "1px solid rgb(218, 21, 21)";
                document.getElementById("--area--").style.opacity = '1';
                spans.style.opacity = '1';
            }
            if ('exigencias' in dataJSON == true) {
                exigenciasInput.style.border = "1px solid rgb(218, 21, 21)";
                document.getElementById("--exigencias--").style.opacity = '1';
                spans.style.opacity = '1';
            }
            if ('cep' in dataJSON == true) {
                cepInput.style.border = "1px solid rgb(218, 21, 21)";
                document.getElementById("--cep--").style.opacity = '1';
                spans.style.opacity = '1';
            }
            if ('sobre' in dataJSON == true) {
                historiaTextarea.style.border = "1px solid rgb(218, 21, 21)";
                document.getElementById("--sobre--").style.opacity = '1';
                spans.style.opacity = '1';
            }
            if ('cnpj' in dataJSON == true) {
                //a propriedade "style" esta colorido, enquanto não devia!!!
                cnpjInput.style.border = "1px solid rgb(218, 21, 21)";
                document.getElementById("--cnpj--").style.opacity = '1';
                spans.style.opacity = '1';
            }
            if ('senha' in dataJSON == true) {
                passwordInput.style.border = "1px solid rgb(218, 21, 21)";
                document.getElementById("--senha--").style.opacity = '1';
            }


            //old validation
            
            if ('cnpj' in dataJSON == true) {
                cnpjInput.style.border = "1px solid rgb(201, 19, 19)";
                document.getElementById("--cnpj").append("Digite um CNPJ válido");
            } else {
                nomeInput.style.border = "1px solid rgba(128, 128, 128, 0.089)";
                document.getElementById("--cnpj").remove();
            }
            
        }
        alert(str)

    }

}); */


/* 


// Evento de clique no botão de atualizar
$('#vagas-lista').on('click', '.btn-atualizar', function () {
    // Obtém o ID da vaga a ser atualizada
    var vagaId = $(this).siblings('.vaga-id').text();
    // Redireciona para a página de atualização com o ID da vaga na URL
    window.location.href = '/z-Novo_TCC/atualizar/AtualizarVaga/atualizarVaga.html?id=' + vagaId;
});

// Na página de atualização de vaga

// Obtém o ID da vaga da URL
var vagaId = new URLSearchParams(window.location.search).get('id');

// Carrega os dados da vaga a ser atualizada
$.ajax({
    url: 'http://localhost:8080/vagas/' + vagaId,
    type: 'GET',
    success: function (response) {
        // Popula os campos de formulário com os valores da vaga
        $('#input-titulo').val(response.titulo);
        $('#input-descricao').val(response.descricao);
    },
    error: function (xhr, status) {
        console.log('Erro ao carregar dados da vaga: ' + status);
    }
});

 */