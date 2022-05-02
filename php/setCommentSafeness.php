<?php

require_once "config.php";

if (!$is_logged_in) {
    echo "UNAUTHORIZED_ERROR";
    exit;
}

if (!($_SERVER["REQUEST_METHOD"] == "POST")) {
    echo "METHOD_ERROR";
    exit;
}

$id = test_input($_POST["id"]);
$isSafe = test_input($_POST["isSafe"]);

$query = "UPDATE comments SET isSafe='$isSafe' WHERE id='$id'";
mysqli_query($db, $query);
if (mysqli_error()) {
    echo "MYSQL_QUERY_ERROR " . mysqli_error();
    exit;
}
echo "SUCCESS";

?>