<?php
$file=fopen("demo.txt","w");

fwrite($file, " P1:Scary and Kindless World<br>");//file create hoko write karta content
fclose($file);
$file = fopen("demo.txt", "r");
echo fread($file, filesize("demo.txt"));
fclose($file);

echo file_get_contents("demo.txt") . "<br>";//Pura file ek dam read karta print karta
file_put_contents("demo.txt", "P2:Why?<br>");//add karta file ku
file_put_contents("demo.txt", "P1:Don't You know about Epstiene Files!<br>");
print_r(file("demo.txt")) . "<br>"; //print karta file ku 
//File Information
echo file_exists("demo.txt") . "<br>";//true
echo filesize("demo.txt") . "<br>";//sizee boltha
echo filetype("demo.txt") . "<br>";// type bolta
echo fileatime("demo.txt") . "<br>";//access time
echo filemtime("demo.txt") . "<br>";//modification time
echo filectime("demo.txt") . "<br>";//change time
echo fileperms("demo.txt") . "<br>";// permission
echo fileowner("demo.txt") . "<br>";
echo filegroup("demo.txt") . "<br>";
echo fileinode("demo.txt") . "<br>";
// File & Folder Management

copy("demo.txt", "copy.txt");
rename("copy.txt", "renamed.txt");
unlink("renamed.txt");

mkdir("testFolder");
rmdir("testFolder");

echo is_file("demo.txt") . "<br>";
echo is_dir("uploads") . "<br>";
//Directory Handling

print_r(scandir("uploads")) . "<br>";

$dir = opendir("uploads");
while ($file = readdir($dir)) {
    echo $file."<br>";
}
closedir($dir);

echo getcwd()  . "<br>";//directory aata
chdir("uploads");//change directory 
echo getcwd();//again directory aata
// File Locking

$file = fopen("lock.txt", "w");
if (flock($file, LOCK_EX)) {
    fwrite($file, "Content is locked");//file create hoko usmey likhta
    flock($file, LOCK_UN);
}
fclose($file);
/*
$var1="password"; 
function global_access() { 
global $var1;
global $var2;
$var2=$var1;
echo "$var1 is correct";
} 
global_access();

Echo "$var2 is acceseed inside the function";*/
?>