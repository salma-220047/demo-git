<?php
$str="I am so bored!";
$var="salma";
$var='salma';
echo 'i am $var' . "<br>";
echo "i am $var" . "<br>";
echo strlen($str) . "<br>";
echo str_word_count($str). "<br>";
echo strpos($str,"am"). "<br>";
echo str_replace($str,"bored","boring"). "<br>";
echo strlen($str). "<br>";
echo strtoupper($str). "<br>";
echo strrev($str). "<br>";
echo ltrim("   Helllo  ")  . "<br>";
echo rtrim("Helllo  ") . "<br>";
echo trim("   Helllo  ") . "<br>";
echo ucfirst($str) . "<br>";
echo ucwords($str) . "<br>";
$str1=" Kidding";
echo strcmp($str,$str1) . "<br>";
echo strcasecmp($str,$str1) . "<br>";




?>