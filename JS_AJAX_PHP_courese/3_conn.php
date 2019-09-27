<?php
$host = 'localhost';
$username = 'root';
$password = '';
$db_name = 'test';
$con = mysqli_connect('$host', '$username', '$password') or die('cannot connect');
mysqli_select_db('$db_name') or die('cannot select DB');
