<?php
mysqli_query('create(
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(id),
    comments VARCHAR(255)')
    or die(mysqli_error()
);


?>