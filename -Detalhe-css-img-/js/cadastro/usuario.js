//USUARIO--------------------------------------------
function usuarioCad(event) {
    event.preventDefault();
    //var x = $( "form" ).serialize();

    console.log("chegou aqui 0");

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

    console.log("chegou aqui 1");

    var request = {
        "nome": name,
        "cpf": cpf,
        "escolaridade": escolaridade,
        "Data": data,
        "sobre": sobre,
        "telefone": numero,
        "email": email,
        "senha": password,
        "cep": cep,
        "logradouro": logradouro,
        "bairro": bairro,
        "uf": uf,
        "cidade": cidade
    }

    console.log("chegou aqui 2");

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
            alert("usuario cadastrado com sucesso!! " + response.id)
        },
        error: function (xhr, status) {

            console.log(xhr);
            console.log(status);

        }
    });

    console.log("chegou aqui 3");

}