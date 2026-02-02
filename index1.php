<?php
echo "Hello, PHP is running!<br>";
//---Variable Declaration----
$name="Salma";
echo " $name<br>";
echo"Hi {$name}<br>";
$age =19;
$quantity=3;
$price=2.4;
echo"Your bill is \${$price}<br>";
echo"You are {$age} years old<br>";
$present=true;
$absent=false;
echo "you are present {$present} and he is absent{$absent}<br>";//False dont diaply anything
$total=null;
$total=$quantity *$price;
echo "your tataal is \${$total}<br>";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button>Click</button>
</body>
</html>
