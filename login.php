<?php

	$login = filter_var(trim($_POST['login']), FILTER_SANITIZE_STRING);
	$pass = filter_var(trim($_POST['pass']), FILTER_SANITIZE_STRING);

	$mysql = new mysqli('postgresql://users_6iez_user:dHgvEXPu5gezKXJ70CbD4cW5zXKonRZ3@dpg-crju1njtq21c73a6f43g-a.oregon-postgres.render.com/users_6iez', 'users_6iez_user', 'dHgvEXPu5gezKXJ70CbD4cW5zXKonRZ3', 'users_6iez');
	$mysql->query("INSERT INTO `users` (`login`, `pass`) VALUES('$login', '$pass')");
	$mysql-> close();

	header('Location: /');

?>
