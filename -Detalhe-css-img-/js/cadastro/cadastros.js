

//EMPRESA
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

    console.log("chegou aqui 1");

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

    console.log("chegou aqui 2");

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
    
}

//USUARIO
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

//VAGAS
function vagasCad(event) {
    event.preventDefault();
    //var x = $( "form" ).serialize();

    console.log("chegou aqui 0");

    var name = $("#name").val();
    var tipo = $("#type").val();
    var qtda = $("#qtda").val();
    var salario = $("#salario").val();
    var escolaridade = $("#escolaridadeVaga").val();
    var sobre = $("#historia-vaga").val();
    var cnpj = $("#cnpj").val();
    var senha = $("#password").val();
    var cep = $("#cep").val();
    var logradouro = $("#rua").val();
    var bairro = $("#bairro").val();
    var uf = $("#uf").val();
    var cidade = $("#cidade").val();

    console.log("chegou aqui 1");

    var request = {
        "nome": name,
        "tipo": tipo,
        "qtda": qtda,
        "salario": salario,
        "escolaridade": escolaridade,
        "sobre": sobre,
        "cnpj": cnpj,
        "senha": senha,
        "cep": cep,
        "logradouro": logradouro,
        "bairro": bairro,
        "uf": uf,
        "cidade": cidade
    }

    console.log("chegou aqui 2");

    $.ajax({
        url: "http://localhost:8080/vagas",
        type: "POST",
        crossDomain: true,
        data: JSON.stringify(request),
        contentType: "application/json",
        dataType: "json",
        success: function (response) {
            //var resp = JSON.parse(response)
            console.log(response);
            alert("vaga cadastrada com sucesso!! " + response.id)
        },
        error: function (xhr, status) {

            console.log(xhr);
            console.log(status);

        }
    });

    console.log("chegou aqui 3");

}