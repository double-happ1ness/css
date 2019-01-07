<script src="http://code.jquery.com/jquery-latest.js"></script>
<script language="javascript">
$(function() {
// set a event handler to the button
  $("#btn_login").click(function() {
    // retrieve form data
    var uname = $("#uname").val();
    var pass = $("#pass").val();

    // send form data to the server side php script.
    $.ajax({
        type: "POST",
        url: "checkPassword.php",
        data: { uname:uname, pass:pass }
    }).done(function( data ) {

        // Now the output from PHP is set to 'data'.
        // Check if the 'data' contains 'OK' or 'NG'
        if (data.indexOf("OK") >= 0){

            // you can do something here
            alert("Login Successfull.");
            location.href = "ok.html";

        }else if(data.indexOf("NG") >= 0){

            // you can do something here
            alert("Login Failed.");
            location.href = "ng.html";
        }
    });
  });
});
</script>
