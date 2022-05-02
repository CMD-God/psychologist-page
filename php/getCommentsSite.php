<?php

require_once "config.php";

class DTO {
    public $body;
    public $name;

    function __construct($name, $body) {
        $this->name = $name;
        $this->body = $body;
    }
}

$query = "SELECT * from comments;";
$result = mysqli_query($db, $query);
if (mysqli_error()) {
    echo "MYSQL_QUERY_ERROR " . mysqli_error();
    die;
}

$json_array = array();
while ($row = mysqli_fetch_assoc($result)) {
    if ($row["isSafe"]) {
        $dto = new DTO($row["name"], $row["body"]);
        $json_array[] = $dto;
    }
}

echo json_encode($json_array);
mysqli_close($db);

?>