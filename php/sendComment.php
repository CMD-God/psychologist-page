<?php

require_once "config.php";

$name = $email = $comment = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = test_input($_POST["name"]);
    $email = test_input($_POST["email"]);
    $comment = test_input($_POST["comment"]);

    if (strlen($name) > 0 && filter_var($email, FILTER_VALIDATE_EMAIL) && strlen($comment) > 0) {
        $query = "INSERT INTO comments (name, email, body) VALUES ('$name', '$email', '$comment')";
        if (mysqli_error()) {
            echo "MYSQL_QUERY_ERROR " . mysqli_error();
            die;
        }
        mysqli_query($db, $query);
        echo "SUCCESS";
    } else {
        echo "INVALID_INPUT_ERROR";
    }
} else {
    echo "METHOD_ERROR";
}
?>