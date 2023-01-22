//variaveis
const form = document.querySelector("#formEmpresa")

const nomeInput = document.querySelector("#name")
const cnpjInput = document.getElementById('cnpj')
const porteSelect = document.getElementById('porte')
const historiaTextarea = document.getElementById('historia')

const cepInput = document.getElementById('cep')
const ruaInput = document.getElementById('rua')
const bairroInput = document.getElementById('bairro')
const cidadeInput = document.getElementById('cidade')
const ufInput = document.getElementById('uf')

const imgInput = document.getElementById('uploadImg')

const numeroInput = document.getElementById('numero')

const emailInput = document.querySelector("#email")
const passwordInput = document.getElementById('password')
const confirm_passwordInput = document.getElementById('confirmPassword')

//FINAL VARIAVEIS

//VALIDAÇÃO CADASTRO EMPRESA!!

/*
form.addEventListener("submit", (event) => {
    //event.preventDefault(); não deixa envia o formulario
    event.preventDefault();
    console.log("botao clicado")

    console.log("O nome digitado foi " + nomeInput.value)
    //Verifica se o nome esta vazio
    if (nomeInput.value === "") {
        alert("Por Favor, preencha o seu nome");
        return;
    }

    if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por Favor, preencha o seu email");
        return;
    }

    //se todos os campos estiverem corretamente preenchidos, envie o form com o " form.submit() "   
    //form.submit()

});

function isEmailValid(email) {
    //cria regex para validar
    const emailRegex = new RegExp(
        //usuario12@host.com.br
        // /^[a-A-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );
    if (emailRegex.test(email)) {
        return true;
    }

    return false;

}

*/




//EMPRESA--------------------------------------------
//imagem da empresa
function empresaImg() {

    $.ajax({
        url: "http://localhost:8080/empresa/v2/image/download/",
        type: "GET",
        crossDomain: true,
        contentType: "application/json",
        dataType: "json",
        success: function (response) {


            for (var i = 0; i < response.length; i++) {

                $('.img').append(' <div class="img"> <img src="data:image/png;base64,' + response[i].fotoBase64 + '"> </div> ');
            }

        },
        error: function (xhr, status) {

            console.log(xhr);
            console.log(status);

        }
    });

}

function empresaCad(event) {
    event.preventDefault();
    //var x = $( "form" ).serialize();


    var name = $("#name").val();
    var cnpj = $("#cnpj").val();
    var porte = $("#porte").val();
    var historia = $("#historia").val();
    var numero = $("#numero").val();
    var email = $("#email").val();
    var password = $("#password").val();
    var cep = $("#cep").val();
    var rua = $("#rua").val();
    var bairro = $("#bairro").val();
    var uf = $("#uf").val();
    var cidade = $("#cidade").val();
    var fotoPerfil = $("#uploadImg").val();


    var request = {
        "nome": name,
        "cnpj": cnpj,
        "porte": porte,
        "sobre": historia,
        "telefone": numero,
        "email": email,
        "senha": password,
        "cep": cep,
        "logradouro": rua,
        "bairro": bairro,
        "uf": uf,
        "cidade": cidade,
        "fotoBase64": fotoPerfil
    }



    $.ajax({
        url: "http://localhost:8080/empresa",
        type: "POST",
        crossDomain: true,
        data: JSON.stringify(request),
        contentType: "application/json",
        dataType: "json",
        success: function (response) {
            //var resp = JSON.parse(response)
            console.log(response);

            uploadImagem(response.id, event);
        },
        error: function (xhr, status) {

            console.log(xhr);
            console.log(status);

            //---
            let jsonObject = JSON.parse(xhr.responseText);
            let objects = jsonObject.erros;

            let str = JSON.stringify(objects, null, 4);



            var dataJSON = JSON.parse(str);


           

            //console.log("O nome: "+ dataJSON.nome);
            if (dataJSON !== null) {

                if ('nome' in dataJSON == true) {

                    nomeInput.style.border = "1px solid rgb(201, 19, 19)";
                    document.getElementById("--name").append("Digite um nome válido");

                } else {
                    nomeInput.style.border = "1px solid rgba(128, 128, 128, 0.089)";
                    document.getElementById("--name").remove();

                }

                if ('sobre' in dataJSON == true) {

                    historiaTextarea.style.border = "1px solid rgb(201, 19, 19)";
                    document.getElementById("--sobre").append("Digite um sobre válido");

                } else {
                    nomeInput.style.border = "1px solid rgba(128, 128, 128, 0.089)";
                    document.getElementById("--sobre").remove();

                }


                if ('email' in dataJSON == true) {
                    emailInput.style.border = "1px solid rgb(201, 19, 19)";
                    document.getElementById("--email").append("Digite um email válido");
                } else {
                    nomeInput.style.border = "1px solid rgba(128, 128, 128, 0.089)";
                    document.getElementById("--email").remove();

                }

                if ('cep' in dataJSON == true) {
                    cepInput.style.border = "1px solid rgb(201, 19, 19)";
                    document.getElementById("--cep").append("Digite um CEP válido");
                } else {
                    nomeInput.style.border = "1px solid rgba(128, 128, 128, 0.089)";
                    document.getElementById("--cep").remove();

                }

                if ('cnpj' in dataJSON == true) {
                    cnpjInput.style.border = "1px solid rgb(201, 19, 19)";
                    document.getElementById("--cnpj").append("Digite um CNPJ válido");
                } else {
                    nomeInput.style.border = "1px solid rgba(128, 128, 128, 0.089)";
                    document.getElementById("--cnpj").remove();

                }

                if ('senha' in dataJSON == true) {
                    passwordInput.style.border = "1px solid rgb(201, 19, 19)";
                    document.getElementById("--senha").append("Digite uma senha válido");
                } else {
                    nomeInput.style.border = "1px solid rgba(128, 128, 128, 0.089)";
                    document.getElementById("--senha").remove();

                }

            } else {
                return;
            }

            //alert(str)
            //---F
        }
    });



    console.log(" DADOS CADASTRADOS ")
    console.log(" nome " + name)
    console.log(" cnpj " + cnpj)
    console.log(" porte " + porte)
    console.log(" sobre " + historia)
    console.log(" telefone " + numero)
    console.log(" email " + email)
    console.log(" senha  " + password)
    console.log(" cep " + cep)
    console.log(" logradouro " + rua)
    console.log(" bairro " + bairro)
    console.log(" uf " + uf)
    console.log(" cidade " + cidade)
    console.log(" fotoPerfil " + fotoPerfil)

}

function uploadImagem(id, event) {

    let foto = document.getElementById("uploadImg").files[0];
    //var file = $('#uploadImg').attr('src', event.target.result);
    var data = new FormData();
    data.append('file', foto);


    jQuery.ajax({
        url: 'http://localhost:8080/empresa/v2/image/upload/' + id,
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        method: 'POST',
        type: 'POST', // For jQuery < 1.9
        success: function (data) {
            alert("Empresa cadastrada com sucesso!");
        }
    });
}
