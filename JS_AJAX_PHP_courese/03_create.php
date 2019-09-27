<?php
//mysqli_query('create(
//    id INT NOT NULL AUTO_INCREMENT,
//    PRIMARY KEY(id),
//    comments VARCHAR(255)')
//    or die(mysqli_error()
//);

    $conn=mysqli_connect("localhost","root","root");
    if($conn){
        echo"ok";
    }else{
        echo"error";
    }
?>