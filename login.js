$(document).ready(function() {
    $("#login-form").submit(function(e) {
        e.preventDefault(); // Prevent the form from submitting traditionally
        
        // Get form data
        var formData = $(this).serialize();
        
        // Make AJAX request
        $.ajax({
            type: "POST",
            url: "process-login.php",
            data: formData,
            success: function(response) {
                // Handle the response from the server
                if (response === "success") {
                    // Redirect to index.php or do any other action
                    window.location.href = "index.php";
                } else {
                    // Update your HTML to show an error message
                    $("#error-message").text("Invalid email or password");
                }
            }
        });
    });
});
