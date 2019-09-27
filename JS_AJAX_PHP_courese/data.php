<?php

require_once('3_conn.php');
$var = array();
$sql = 'SELECT * FROM `testComments`';
$result = mysql_query($sql);
    if(mysql_num_rows($result)){
        while($row = mysql_fetch_assoc($result, MYSQL_ASSOC)){
            $var[] = $row;
        }
    }
echo json_encode($var);