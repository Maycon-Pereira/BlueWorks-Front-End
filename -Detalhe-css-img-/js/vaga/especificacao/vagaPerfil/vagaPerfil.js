const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const cancelModalButton = document.querySelector("#cancel-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide"); 
};

[openModalButton, closeModalButton,cancelModalButton].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});

function cancelCandidatura () {
    alert("Candidatura canacelada com sucesso! mandar um sinal pro back end")
}


