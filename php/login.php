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
    if ($password==$checkNameOutput[2]){
        echo '1';
    }else{
        echo '0';
    }

}else{
    echo '0';
}

