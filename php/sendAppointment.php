<?php

require_once "config.php";

# I know the day and hour should be numeric, but the incoming type is still string. These will be tested later.
$name = $email = $phone_number = $day = $hour = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = test_input($_POST["name"]);
    $email = test_input($_POST["email"]);
    $phone_number = test_input($_POST["phone_number"]);
    $day = test_input($_POST["day"]);
    $hour = test_input($_POST["hour"]);

    if (strlen($name) > 0 && strlen($phone_number) > 0 && filter_var($email, FILTER_VALIDATE_EMAIL) > 0 && is_numeric($day) && is_numeric($hour)) {
        $query = "INSERT INTO appointments (name, phone_number, email, day, hour) VALUES ('$name', '$phone_number', '$email', '$day', '$hour')";
        mysqli_query($db, $query);
        if (mysqli_error()) {
            echo "MYSQL_QUERY_ERROR " . mysqli_error();
            die;
        }
        echo "SUCCESS";
    } else {
        echo "INVALID_INPUT_ERROR";
    }
} else {
    echo "METHOD_ERROR";
}
?>