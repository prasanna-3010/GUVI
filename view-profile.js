$(document).ready(function() {
    
    $.ajax({
        type: "GET",
        url: "view-profile.php",
        dataType: "json",
        success: function(userData) {
           
            displayProfile(userData);
        },
        error: function(xhr, status, error) {
            console.error("Error fetching profile:", status, error);
            
        }
    });

    
    $("#logout-form").submit(function(e) {
        e.preventDefault();

        $.ajax({
            type: "POST",
            url: "logout.php",
            success: function(response) {
                // Redirect to login page or handle logout success
                window.location.href = "login.html";
            },
            error: function(xhr, status, error) {
                console.error("Error during logout:", status, error);
            }
        });
    });

    function displayProfile(userData) {
        var profileContainer = $("#profile-container");

        if (userData) {
            // Display user profile details
            var profileDetails = $("<table>");
            $.each(userData, function(key, value) {
                profileDetails.append("<tr><th>" + key + "</th><td>" + value + "</td></tr>");
            });

            profileContainer.append(profileDetails);
        } else {
            // Display message when no user data is found
            profileContainer.html("<p>No user data found.</p>");
        }
    }
});
