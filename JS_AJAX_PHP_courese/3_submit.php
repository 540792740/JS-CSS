<?php
require_once ('3_conn.php');
    $errors = array();
    $form_data = array();

    if(empty($_POST['name'])){
        $errors['name'] = 'Name cannot be blank';
    }

    if(empty($_POST['comments'])){
        $errors['comments'] = 'comments cannot be blank';
    }

    if(!empty($errors)){
        $form_data['success'] = false;
        $form_data['errors'] = $errors;
    }   else{
        //submit to databas
        $query = sprintf("INNSERT INTO `testComments` (`name`,`comment`,`created`) VALUES ('%s','%s', '%s')",
                        mysqli_real_escape_string($_POST['name']),
                        mysqli_real_escape_string($_POST['comments']),
                        'NOW()'
        );

if (mysqli_query($query)){
    $form_data['success'] = true;
    $form_data['posted'] = 'Thanks for submitting';
    } else {
    $form_data['success'] = false;
    $form_data['posted'] = 'database error!!!';
    }
}
echo jason_encode($form_data);