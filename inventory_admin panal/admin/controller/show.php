<?php
      include_once '../Model/db_confige.php';
      
      $sql= "SELECT * FROM catagore_type   ORDER BY cat_id DESC  ";
      $execute = mysqli_query($link,$sql);
      if($execute->num_rows>0){
            while($row=$execute->fetch_assoc()){
                echo '<tr>';
                echo'<td>'.$row['cat_type_name'].'</td>';
                echo '<td>'.$row['cat_type_code'].'</td>';
                echo '<td><a target=" _blank" href="edit.php?id='.$row['cat_id'].'">'.'Edit'.'</td>';
                echo '<td>'.'Delet'.'</td>';
                echo  '</tr>'; 
            }
            
      }
 
?>