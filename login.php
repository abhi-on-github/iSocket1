<?php 
header('Content-Type: application/json');
if($_SERVER["REQUEST_METHOD"] == "POST")
{
	$username=$_POST["username"]; 
	$password=$_POST['password']; 
	if ($username == "isocket" && $password == "password") {
		//Return 200 OK
		echo '{"text":"success"}';
	}
	else{
		//401 unauthorized
		header('HTTP/1.0 401 Unauthorized');
	}
}
?>