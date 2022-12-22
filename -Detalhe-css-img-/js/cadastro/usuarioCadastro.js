//USUARIO--------------------------------------------
function usuarioCad(event) {
    event.preventDefault();
    //var x = $( "form" ).serialize();


    var name = $("#name").val();
    var cpf = $("#cpf").val();
    var escolaridade = $("#escolaridade").val();
    var data = $("#data").val();
    var sobre = $("#sobre").val();
    var numero = $("#numero").val();
    var email = $("#email").val();
    var password = $("#password").val();
    var cep = $("#cep").val();
    var logradouro = $("#rua").val();
    var bairro = $("#bairro").val();
    var uf = $("#uf").val();
    var cidade = $("#cidade").val();
    var fotoPerfil = $("#uploadImg").val();


    var request = {
        "nome": name,
        "cpf": cpf,
        "escolaridade": escolaridade,
        "data": data,
        "sobre": sobre,
        "telefone": numero,
        "email": email,
        "senha": password,
        "cep": cep,
        "logradouro": logradouro,
        "bairro": bairro,
        "uf": uf,
        "cidade": cidade,
        "fotoBase64": fotoPerfil
    }


    $.ajax({
        url: "http://localhost:8080/usuario",
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
    console.log(" nome "+ name)
    console.log(" cpf "+ cpf)
    console.log(" escolaridade "+ escolaridade)
    console.log(" Data "+ data)
    console.log(" sobre "+ sobre)
    console.log(" telefone "+ numero)
    console.log(" email  "+ email)
    console.log(" senha  "+ password)
    console.log(" cep "+ cep)
    console.log(" logradouro "+ logradouro)
    console.log(" bairro "+ bairro)
    console.log(" uf "+ uf)
    console.log(" cidade "+ cidade)
    console.log(" fotoPerfil "+ fotoPerfil)

}

function uploadImagem(id, event) {

    let foto = document.getElementById("uploadImg").files[0];
    //var file = $('#uploadImg').attr('src', event.target.result);
    var data = new FormData();
        data.append('file', foto);
 

    jQuery.ajax({
        url: 'http://localhost:8080/usuario/v2/image/upload/' + id,
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        method: 'POST',
        type: 'POST', // For jQuery < 1.9
        success: function (data) {
            alert("Usuario cadastrado com sucesso!");
        }
    });
}
