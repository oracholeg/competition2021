<?php

	$login = filter_var(trim($_POST['login']), FILTER_SANITIZE_STRING);
	$pass = filter_var(trim($_POST['pass']), FILTER_SANITIZE_STRING);

	$mysql = new mysqli('localhost', 'root', 'root', 'register-bd');
	$mysql->query("INSERT INTO `users` (`login`, `pass`) VALUES('$login', '$pass')");
	$mysql-> close();

	header('Location: /');

?>