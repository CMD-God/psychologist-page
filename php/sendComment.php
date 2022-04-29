<?php
$name = $email = $comment = "";

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = test_input($_POST["name"]);
    $email = test_input($_POST["email"]);
    $comment = test_input($_POST["comment"]);

    if (strlen($name) > 0 && filter_var($email, FILTER_VALIDATE_EMAIL) && strlen($comment) > 0) {
        echo "SUCCESS";
    } else {
        echo "INVALID_INPUT_ERROR";
    }
} else {
    echo "METHOD_ERROR";
}
?>