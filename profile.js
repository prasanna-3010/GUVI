$(document).ready(function() {
    $("#save-button").click(function() {
        // Collect form data
        var formData = $("#profile-form").serialize();

        // Make AJAX request to save profile details
        $.ajax({
            type: "POST",
            url: "save-profile.php",
            data: formData,
            success: function(response) {
                // Handle the response, e.g., show a success message
                console.log("Profile changes saved:", response);
            },
            error: function(xhr, status, error) {
                console.error("Error saving profile changes:", status, error);
                // Handle errors if needed
            }
        });
    });
});
