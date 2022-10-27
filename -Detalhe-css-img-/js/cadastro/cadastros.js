
//EMPRESA--------------------------------------------
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






//VAGAS--------------------------------------------
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








/*IMAGEM PREVIEW--------------------------------------------*/
function preview() {
    frame.src = URL.createObjectURL(event.target.files[0]);
}






/*CEP AUTOMATICO---------------------------------------------*/

function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value = ("");
    document.getElementById('bairro').value = ("");
    document.getElementById('cidade').value = ("");
    document.getElementById('uf').value = ("");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('rua').value = (conteudo.logradouro);
        document.getElementById('bairro').value = (conteudo.bairro);
        document.getElementById('cidade').value = (conteudo.localidade);
        document.getElementById('uf').value = (conteudo.uf);
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

function pesquisacep(valor) {

    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if (validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('rua').value = "...";
            document.getElementById('bairro').value = "...";
            document.getElementById('cidade').value = "...";
            document.getElementById('uf').value = "...";

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
}

//Ocultar ADDRESS
function ocultar() {
    var marcados = document.querySelector("input[type=checkbox]:checked");
    var check = document.getElementById("input-address");
    check.style.display = (marcados != null) ? "block" : "none";
}