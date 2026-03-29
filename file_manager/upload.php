<!Doctype html>
<html>
    <body>
        <h2>
            File Upload
        </h2>
        <form method="post" enctype="multipart/form-data">
            Select File:
            <input type="file" name="file">
            <input type="submit" name="submit" value="Upload">

        </form>
<?php
   if (isset($_POST['submit']))
    {
        // echo "<pre>";
        // print_r($_FILES);
        // echo "</pre>";

        $name=$_FILES['file']['name']; 
        $tmp=$_FILES['file']['tmp_name'];
    //$folder=__DIR__ . "uploads/" . $name;
        if(move_uploaded_file($tmp,"uploads/".$name)){
            echo"File Uploaded Successfully";
            echo "<a href='download.php? file=$name'>Download</a>";
          }
        else{
            echo "Upload failed";
        }
   }

        ?>
    </body>
</html>