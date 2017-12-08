<!DOCTYPE html>
<html>
<body>

<h1>My first PHP page</h1>

<?php


if (!function_exists('mysqli_init') && !extension_loaded('mysqli')) {
    echo 'We don\'t have mysqli!!!';
} else {
    echo 'Phew we have it!';
}



$servername = "localhost";
$username = "root";
$password = "";
$db = "giodb";

$conn = new mysqli($servername, $username, $password, $db) or die();


echo "$conn";
?>

</body>
</html>