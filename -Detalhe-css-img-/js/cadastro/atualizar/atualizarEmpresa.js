//variaveis
const form = document.getElementById("formEmpresa");
const campos = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".exception");
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$/;


const nomeInput = document.querySelector("#name")
const cnpjInput = document.getElementById('cnpj')
const porteSelect = document.getElementById('porte')
const historiaTextarea = document.getElementById('historia')

const cepInput = document.getElementById('cep')
const cepComplemento = document.querySelector('.cep-complemento')

const ruaInput = document.getElementById('rua')
const bairroInput = document.getElementById('bairro')
const cidadeInput = document.getElementById('cidade')
const ufInput = document.getElementById('uf')

const imgInput = document.getElementById('uploadImg')

const numeroInput = document.getElementById('numero')

const emailInput = document.getElementById("email")
const passwordInput = document.getElementById('password')
const confirm_passwordInput = document.getElementById('confirmPassword')


form.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidate()
    cnpjValidate()
    sobreValidate()
    cepValidate()
    emailValidate()
    mainPasswordValidate()
})
function setError(index) {
    campos[index].style.border = '1px solid rgb(218, 21, 21)';
    spans[index].style.opacity = '1';
}
function removeError(index) {
    campos[index].style.border = '';
    spans[index].style.opacity = '0';
}

function nameValidate() {
    if (campos[0].value.length < 3) {

        setError(0);

    } else {

        removeError(0)

    }
}

function cnpjValidate() {
    if (campos[1].value.length < 18) {

        setError(1);

    } else {

        removeError(1)

    }
}

function sobreValidate() {
    if (campos[2].value.length <= 5) {

        setError(2);

    } else {

        removeError(2)

    }
}

function cepValidate() {
    if (campos[3].value.length < 9) {

        setError(3);

    } else {

        removeError(3)

    }
}

function emailValidate() {

    const email = $('#email').val();


    if (!validEmail(email)) {
        setError(4)
    } else {
        removeError(4)
    }
    return false;
}

function validEmail(email) {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function mainPasswordValidate() {
    if (campos[5].value.length < 8) {
        setError(5);
    } else {
        removeError(5);
    }
}

