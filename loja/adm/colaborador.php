<?php
	session_start();
	echo "Bem vindo ".$_SESSION['usuarioNome'];
?>
<br>
<a href="sair.php">Sair</a>