<Script>
// Use to load data without refreashing data 
$(document).ready(functiom){
    $("#load-button").on("click",function(e){
       $.ajax({
            url : "ajax-load.php" ,
            type : "POST" ,
            success : function(data){
                $("#tabel-data").html(data);
            }
}) 
    })
}

// Way to insert data using ajax without refreashing data

</Script>
