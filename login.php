<?php 
	if(isset($_POST["username"]) && isset($_POST["password"])){
		$username = $_POST["username"];
		$password = $_POST["password"];
	}
	else{
		echo 'is not set';
	}
	//echo ($username);
	if ($username === 'isocket' && $password === 'password') {
		//Return 200 OK
		die("username and password didn't match");
	}
	else{
		//401 unauthorized
		header('X-PHP-Response-Code: 401', true, 401);
	}
?>