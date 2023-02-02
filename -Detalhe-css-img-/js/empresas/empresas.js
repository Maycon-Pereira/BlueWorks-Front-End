//get all de empresas

function empresaGetAll() {

  $.ajax({
      url: "http://localhost:8080/empresa",
      type: "GET",
      crossDomain: true,
      contentType: "application/json",
      dataType: "json",
      success: function (response) {


          for (var i = 0; i < response.length; i++) {

              $('.empresas').append(' <div class="empresas-box"><div class="img-empresas"><div class="empresa"><a id="img" href="/Empresa/perfil-Empresa/perfilEmpresaVisivelAoUsuario.html"><img class="img" src="data:image/png;base64,' + response[i].fotoBase64 + '" /></a></div></div><div class="empresas-box-info"><div class="inf-empresas"><div class="bold name">'+ response[i].nome +'</div><div class="email"><span class="bold">Email: </span> '+ response[i].email +'</div><div class="info-empresa"><span class="bold"> Sobre: </span><p>'+ response[i].sobre +'</p></div></div></div></div> ');
          }

      },
      error: function (xhr, status) {

          console.log(xhr);
          console.log(status);

      }
  });

}


//========================================================
/*
const inputFile = document.querySelector("#picture__input");
const pictureImage = document.querySelector(".picture__image");
const pictureImageTxt = "Choose an image";
pictureImage.innerHTML = pictureImageTxt;

inputFile.addEventListener("change", function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("picture__img");

      pictureImage.innerHTML = "";
      pictureImage.appendChild(img);
    });

    reader.readAsDataURL(file);
  } else {
    pictureImage.innerHTML = pictureImageTxt;
  }
});
*/