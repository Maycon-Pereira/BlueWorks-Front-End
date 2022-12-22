//variaveis
var nome = document.getElementById('name')
var cnpj = document.getElementById('cnpj')
var porte = document.getElementById('porte')
var historia = document.getElementById('historia')

var cep = document.getElementById('cep')
var rua = document.getElementById('rua')
var bairro = document.getElementById('bairro')
var cidade = document.getElementById('cidade')
var uf = document.getElementById('uf')

var img = document.getElementById('perfil-img')

var numero = document.getElementById('numero')

var email = document.getElementById('email')
var password = document.getElementById('password')
var confirm_password = document.getElementById('confirmPassword')

//FINAL VARIAVEIS


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

                $('.img').append(' <div class="img"> <img src="data:image/png;base64,' + response[i].fotoBase64 + '" </div> ');
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
