/*IMAGEM PREVIEW--------------------------------------------*/
function preview() {
    frame.src = URL.createObjectURL(event.target.files[0]);
    console.log(frame.src)
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