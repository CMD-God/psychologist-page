<?php
/* Database credentials. */
define('DB_SERVER', "hunor");
define('DB_USERNAME', "psych_page_user");
define('DB_PASSWORD', null);
define('DB_NAME', "psychologist_page");
 
/* Attempt to connect to MySQL database */
$db = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
 
// Check connection
if($db === false){
    echo "MYSQL_CONNECT_ERROR " . mysqli_connect_error();
    die;
}

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    # $data = mysqli_real_escape_string($data);
    return $data;
}

$is_logged_in = false;
if (isset($_SERVER['PHP_AUTH_USER']) && isset($_SERVER['PHP_AUTH_PW']) && $_SERVER['PHP_AUTH_USER'] == "admin" && $_SERVER['PHP_AUTH_PW'] == "password") {
    $is_logged_in = true;
}

function force_login() {
    header('WWW-Authenticate: Basic realm="My Realm"');
    header('HTTP/1.0 401 Unauthorized');
    exit;
}

?>