

//função de logar teste! depois conectar com o banco de dados!
function logar() {

    const login = document.getElementById('email').value;
    const senha = document.getElementById('password').value;

    if (login == "teste@gmail.com" && senha == "12345678") {
        alert('Sucesso');
        //location.href redireciona para a tela escolhida após o submit
        location.href = "/Pag-Inicial/inicio.html";
    } else {
        alert('Usuario ou senha incorretos');
        return emailValidate(),passwordValidate()
        
        /* login.style.border = "1px solid rgb(218, 21, 21)";
        document.getElementById("exception").style.opacity = '1';

        senha.style.border = "1px solid rgb(218, 21, 21)";
        document.getElementById("exception").style.opacity = '1'; */

    }

}

form = document.getElementById('formLogin');
const campos = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".exception");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    emailValidate()
    passwordValidate()
})

function emailValidate() {

    const email = $('#email').val();


    if (!validEmail(email)) {
        campos[0].style.border = '1px solid rgb(218, 21, 21)';
        spans[0].style.opacity = '1';
    } else {
        campos[0].style.border = 'none';
        spans[0].style.opacity = '0';
    }
    return false;
}

function validEmail(email) {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function passwordValidate() {
    //mudar o .length e o 8 para se o valor for igual a senha do banco de dados
    if (campos[1].value.length < 8) {

        campos[1].style.border = '1px solid rgb(218, 21, 21)';
        spans[1].style.opacity = '1';

    } else {

        campos[1].style.border = '';
        spans[1].style.opacity = '0';

    }
}