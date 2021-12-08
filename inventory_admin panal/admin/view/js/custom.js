$(document).ready(function(){
    showData();
})
//var error1 = "Please fill up both forms";
/* var error2 = "Please fill up catagory type name.";
var error3 = "Please fill up catagory type code.";
var success = "successfully inserted"; */
var a = "plese fill up the file!"

function Datainsert(){
    var cat_type_name = document.getElementById ("cat_type_name").value;
    var cat_type_code = document.getElementById ("cat_type_code").value;
     if(cat_type_name==" " || cat_type_code== " "){
        if(cat_type_name==" " && cat_type_code==" " ){
         
            document.getElementById("sub_notification1").innerHTML=error2;
           document.getElementById("sub_notification1").style.display="block";
           document.getElementById("sub_notification1").style.color="red";
           document.getElementById("sub_notification2").innerHTML=error3;
           document.getElementById("sub_notification2").style.display="block";
           document.getElementById("sub_notification2").style.color="red";
          
    
        }
        else if(cat_type_name == ""){
            
          document.getElementById("sub_notification1").innerHTML=error2;
           document.getElementById("sub_notification1").style.display="block";
           document.getElementById("sub_notification1").style.color="red";
           document.getElementById("sub_notification2").style.display="none";
           document.getElementById("main_notification").style.display="none";
    
        }
        else if(cat_type_code ==""){
         
            document.getElementById("sub_notification2").innerHTML=error3;
            document.getElementById("sub_notification2").style.display="block";
            document.getElementById("sub_notification2").style.color="red";
            document.getElementById("sub_notification1").style.display="none";
            document.getElementById("main_notification").style.display="none";
        }
       
    }  
    //alert("plese fill up catagory name");
  
    //alert ("cat_type_name");
    else{
            
          
        $.ajax({
            method:"POST",
            url:"insert.php",
            data:{
                name:cat_type_name,
                code:cat_type_code
            },
            success:function(data){
                if (data==1){
                    alert ("both value are already exeisted") 
                }
                else{
                    var success = "successfully inserted";
                     document.getElementById("main_notification").innerHTML=success;
                    document.getElementById("main_notification").style.display="block";
                    document.getElementById("main_notification").style.color="green";
                    document.getElementById("sub_notification1").style.display="none";
                    document.getElementById("sub_notification2").style.display="none"; 
                }
               /*  $('#show_data').html(data); */
               //document .getElementById("show_table_div").style.display="block";
                 
    
                 showData();
                 //alert("Successfully inserted");
   
           }
            
            
              
        }); 
      
      
    } 
    
   
}
function showData(){
    //alert("show");
    $.ajax({
        method:"POST",
        url:"show.php",
        
        success:function(data){
             $('#show_data').html(data);
            document .getElementById("show_table_div").style.display="block";
 
           showData();
           //alert("Successfully inserted");

        }
          
    }); 
}    