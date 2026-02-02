<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="index2.php" method="post">
    <label>username</label><br>
    <input type ="text" name="username" ><br>
    <label>Password:</label><br>
    <input type="password" name="password"><br>
    <input type="submit" value="Login">
     <form action="index2.php" method="post">
    <label>Quantity</label><br>
    <input type ="text" name="quantity" ><br>
    <input type="submit" value="total">
</form>
</body>
</html>
<?php 
/*
//Arithmetic operators..
$x=2;
$y=9;
$z=null;
$z=$x+$y;
echo "$z<br>";
//INcrement operator
$counter=0;
$counter+=1;
echo"$counter<br>";

echo $_POST["username"] . "<br>";
echo "{$_POST["password"]}<br>";*/
$item="pizza";
$price=5.90;
$quantity=$_POST["quantity"];
$total=null;
$total=$quantity*$price;

echo"\${$total}";
?>