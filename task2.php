<?php
#--SCOPE AND VARIABLES
/*$int=24;
$str="calarywath";
$float=9.8;
$bool=false;
echo "I am a $str<br>
I am $int old<br> i am a student $bool<br>i got $float percentile in this sem";
function local(){
    $local="I am bored<br>";
    echo "$local";
}
local();
//echo $local;  -----cant access---
$global="Mangalayan";
function gs(){
    global $global;
    echo "$global is one of the  Mars Mission <br>";
}
gs();
Echo "$global is a Indian Mission";
*/
function ss(){
    static $count=0;
    $count++;
    echo "$count<br>";

}
ss();
ss();
ss();
ss();
?>
