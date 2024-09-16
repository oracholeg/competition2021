<?php

	$login = filter_var(trim($_POST['login']), FILTER_SANITIZE_STRING);
	$pass = filter_var(trim($_POST['pass']), FILTER_SANITIZE_STRING);

	$mysql = new mysqli('dpg-crju1njtq21c73a6f43g-a', 'users_6iez_user', 'dHgvEXPu5gezKXJ70CbD4cW5zXKonRZ3', 'user-db');
	$mysql->query("INSERT INTO `users` (`login`, `pass`) VALUES('$login', '$pass')");
	$mysql-> close();

	header('Location: /');

?>
