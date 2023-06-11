/*ACCEPT COOKIES*/
function aceitouCookies() {
    if (!localStorage.pureJavaScriptCookies) {
        document.querySelector(".box-cookies").classList.remove('hide');
    }

    const acceptCookies = () => {
        document.querySelector(".box-cookies").classList.add('hide');
        localStorage.setItem("pureJavaScriptCookies", "accept");
    };

    const btnCookies = document.querySelector(".btn-cookies");

    btnCookies.addEventListener('click', acceptCookies);

}

/*FIM ACCEPT COOKIES*/


function setCookie(nome, valor, dias) {
    var validade = "";
    if (dias) {
        var date = new Date();
        date.setTime(date.getTime() + (dias * 24 * 60 * 60 * 1000));
        validade = "; expires=" + date.toUTCString();
    }
    document.cookie = nome + "=" + (valor || "") + validade + "; path=/";
}

function getCookie(nome) {
    var nomeCookie = nome + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nomeCookie) == 0) return c.substring(nomeCookie.length, c.length);
    }
    return null;
}

function eraseCookie(nome) {
    document.cookie = nome + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function adicionarCookie(id, idValor) {
    //alert("chegou no cookie")
    //o nome tem que ser o Id, e o valor pode ser o id 
    //tbm para qualquer pesquisa talvez ajude
    var nome = id;
    var valor = idValor;

    var dias = 7; // O cookie será válido por 7 dias
    setCookie(nome, valor, dias);
    alert("Cookie adicionado com sucesso!");

    var idEmpresaLogada = nome;//id da empresa

    localStorage.setItem('idEmpresaLogada', idEmpresaLogada);
}

function exibirCookie(nome) {
    var nome;
    var valor = getCookie(nome);
    if (valor) {
        return (valor);
    } else {
        alert("Cookie não encontrado!");
    }
}
var idMME = ""
function obterIdEmpresaLoginAtual(idEmpresaLogadaAtualmente) {
    idMME = idEmpresaLogadaAtualmente;
    return idMME
}

//alert(idMME)
//NÃO Apaga o cookie!!
function apagarCookie(nome) {
    //alert("id da empresa Apagar cookie= " +idDaEmpresa)

    //alert("nome? " + nome)
    eraseCookie(nome);
    //alert("Cookie apagado com sucesso!");
    location.reload();
}
//id da empresa logada no momento

function manterLogado(id) {
    var idCookieEmpresaLogin = exibirCookie(id);
    var idEmpresaLogin = id;

    localStorage.setItem('idCookieEmpresaLogin', idCookieEmpresaLogin);


    //alert("login = " + idEmpresaLogin)

    if (idCookieEmpresaLogin === idEmpresaLogin) {
        // Mantém o usuário logado

        //alert("login = " + idEmpresaLogin)


    } else {
        // Redireciona para a página de login
        window.location.href = "/z-Novo_TCC/Inicio/inicio.html";
    }
}

var empresaId = localStorage.getItem('idEmpresaLogada');
var idCookieEmpresaLogin = localStorage.getItem('idCookieEmpresaLogin');

function voltarPaginaPerfil() {

    //alert("idCookieEmpresaLogin " + idCookieEmpresaLogin)
    if (idCookieEmpresaLogin != empresaId) {
        alert("não está logado!!")
        location.href = "#";
    } else {
        location.href = "/z-Novo_TCC/Perfil/perfil.html?idEmpresaLogin=" + idCookieEmpresaLogin;
    }
}