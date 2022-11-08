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
/**
function validacao() {
    if(nome.value == "") {
        alert(`insira um nome valido`)
    } 


 * else if (cnpj.value == "") {
        alert(`insira um cnpj valido`)
        return false;
    }else if (porte.value == "") {
        alert(`insira um porte valido`)
        return false;
    }else if (historia.value == "") {
        alert(`insira um sobre valido`)
        return false;
    }
 
}*/
/*
function validarSenha() {
  if (password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Senhas diferentes!");
    confirm_password.reportValidity();
    return false;
  } else {
    confirm_password.setCustomValidity("");
    alert('foi')
    return true;
  }
}
*/





//EMPRESA--------------------------------------------
//imagem da empresa
function empresaImg() {

    $.ajax({
        url: "http://localhost:8080/v2/image/download/",
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

    console.log("chegou aqui 0");

    var name = $("#name").val();
    var cnpj = $("#cnpj").val();
    var types = $("#types").val();
    var historia = $("#historia").val();
    var numero = $("#numero").val();
    var email = $("#email").val();
    var password = $("#password").val();
    var cep = $("#cep").val();
    var rua = $("#rua").val();
    var bairro = $("#bairro").val();
    var uf = $("#uf").val();
    var cidade = $("#cidade").val();

    console.log("chegou aqui 1")

    var request = {
        "nome": name,
        "cnpj": cnpj,
        "porte": types,
        "sobre": historia,
        "telefone": numero,
        "email": email,
        "senha": password,
        "cep": cep,
        "logradouro": rua,
        "bairro": bairro,
        "uf": uf,
        "cidade": cidade
    }


    console.log("   chegou aqui 2");

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

            alert("empresa cadastrada com sucesso!! " + response.id)
        },
        error: function (xhr, status) {

            console.log(xhr);
            console.log(status);

        }
    });

    console.log("chegou aqui 3");





    

    
    
    console.log(" DADOS CADASTRADOS ")
    console.log(" nome "+ name)
    console.log(" cnpj "+ cnpj)
    console.log(" porte "+ types)
    console.log(" sobre "+ historia)
    console.log(" telefone "+ numero)
    console.log(" email "+ email)
    console.log(" senha  "+ password)
    console.log(" cep "+ cep)
    console.log(" logradouro "+ rua)
    console.log(" bairro "+ bairro)
    console.log(" uf "+ uf)
    console.log(" cidade "+ cidade)

}

