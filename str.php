<?php
$str="I am so bored!";
$var="salma";
$var='salma';
echo 'i am $var';
echo "i am $var";
echo strlen($str);
echo str_word_count($str);
echo strpos($str,"am");
echo str_replace($str,"bored","boring");
echo strlen($str);
echo strtoupper($str);
echo strrev($str);
echo trim("   Helllo  ");
$str1=explode(" ",$str);
echo "$str1";
?>