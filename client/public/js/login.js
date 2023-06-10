$(document).ready(function () {
    // Get the login button
    let loginButton = $("#loginButton");

    // Get the email and password inputs
    let emailInput = $("input[type='email']");
    let passwordInput = $("input[type='password']");
    // When the button is clicked
    loginButton.click(function (e) {
        e.preventDefault();
        // Get the values of the inputs
        let emailValue = emailInput.val();
        let passwordValue = passwordInput.val();
        // If either input is empty
        if (emailValue == "" || passwordValue == "") {
            // Show an error message
            alert("Please enter your email and password.");
        } else {
            // Otherwise, simulate a successful login
            $("#loginModal").modal("show");
            // Reset the form
            emailInput.val("");
            passwordInput.val("");
        }
    });
});