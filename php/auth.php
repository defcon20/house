<?php

$con=mysqli_connect("localhost","defcon_user","smarthouse1","defcon_smartHouse");

// Check connection
if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$username = $_GET['username'];
$password = $_GET['password'];

$checkName="SELECT * FROM auth WHERE username='".$username."'";

$checkNameOutput = mysqli_fetch_array(mysqli_query($con,$checkName));
if(sizeof($checkNameOutput) > 0){
    echo '0';
}else{
    $createSql="INSERT INTO auth (id, username, password) VALUES (null, '". $username ."','". $password ."')";
    if (mysqli_query($con,$createSql)) {
        echo '1';
    } else {
        echo "bad: " . mysqli_error($con);
    }
}

