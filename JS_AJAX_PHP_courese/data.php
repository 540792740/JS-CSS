<?php

require_once('3_conn.php');
$var = array();
$sql = 'SELECT * FROM `testComments`';
$result = mysqli_query($sql);
    if(mysqli_num_rows($result)){
        while($row = mysqli_fetch_assoc($result, MYSQLI_ASSOC)){
            $var[] = $row;
        }
    }
echo json_encode($var);