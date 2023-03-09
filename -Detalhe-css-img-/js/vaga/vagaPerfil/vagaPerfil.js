function perfilVagaParaVisializar() {
    $.ajax({
      url: 'http://localhost:8080/vagas/' + vagaId,
      type: "GET",
      crossDomain: true,
      contentType: "application/json",
      dataType: "json",
      success: function (response) {
        $('.perfil-vaga').append(
          '<div class="detalhe"><div class="bunner"><img src="data:image/png;base64,' + response.fotoBase64 + '" alt="Bunner Vaga"></div><div class="detalhe-vaga"><div class="Info"><div class="all-Info"><div class="title"><h2>Desenvolvedor Full-Stack</h2></div><div class="apresentacao"><div class="status"><div class="statusVaga"><label for="status"><span class="bold">Status da Vaga: </span><span class="disponivel">Disponivel</span></label></div><div class="statusVaga" id="estado"><label for="estado"> <span class="bold">São Paulo - SP</span></label></div><div class="salario-bruto"><label for="salario"><span class="bold">R$ 2.000,00 </span></label></div></div></div></div></div></div></div><div class="detalhe-body"><div class="infVaga"><h2>Informação da vaga</h2><p>Empresa de Autopeças</p><div class="infVaga2"><div class="numVagas space"><label for="numVagas"><span class="bold">Número de vagas:</span> 3</label></div><div class="tipo-contrato space"><label for="tipo"><span class="bold"> Tipo de contrato e Jornada:</span> Efetivo –CLT -Período Integral.</label></div><div class="area-profis space"><label for="area"><span class="bold"> Área Profissional:</span> Analista em Artes -Artes Gráficas.</label></div><div class="exigencia space"><label for="exigencia"><span class="bold"> Exigências: </span></label><ul><li><span class="ex">Escolaridade Mínima: </span>Ensino Médio (2º Grau).</li></ul></div><div class="valorizado space"><label for="valorizado"><span class="bold"> Valorizado: </span></label><ul><li><span class="ex"> Experiência desejada: </span> Entre 1 e 3 anos.</li><li><span class="ex">Gráficos/Web: </span>Adobe Photoshop, Adobe Ilustrator.</li></ul></div></div></div><div class="inf-empresa"><div class="inf-basic"><h2>Empresa:</h2><div class="about"><a href="/z-Novo_TCC/Perfil/PerfilVisivelAosOutros/perfilEmpresaVisivelAoUsuario.html">RADAC</a><div class="historia"><p>A partir da análise das necessidades de seus clientes, a Radac desenvolve</p> </div></div></div></div></div>'
        );
      },
      error: function (xhr, status) {
        console.log(xhr);
        console.log(status);
      }
    });
  }