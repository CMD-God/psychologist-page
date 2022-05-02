<?php

require_once "config.php";

if (!$is_logged_in) {
    echo "UNAUTHORIZED_ERROR";
    exit;
}

$query = "SELECT * from appointments;";
$result = mysqli_query($db, $query);
if (mysqli_error()) {
    echo "MYSQL_QUERY_ERROR " . mysqli_error();
    die;
}

$json_array = array();
while ($row = mysqli_fetch_assoc($result)) {
    $json_array[] = $row;
}

echo json_encode($json_array);
mysqli_close($db);

?>