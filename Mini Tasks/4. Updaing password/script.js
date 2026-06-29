const realUserName = "admin";
let currentPassword = "admin123";

const form = document.getElementById("authForm");
const checkBox = document.querySelector("#changePassword");

const newPasswordInput = document.getElementById("newPassword");
const retypePasswordInput = document.getElementById("retypePassword");
const passwordLabel = document.getElementById("passwordLabel");

const userNameInput = document.getElementById("username");
const passWordInput = document.getElementById("password");
const enableDiv = document.getElementById("successMessage");

checkBox.addEventListener("change", function () {
    const hiddenFields = document.getElementById("newPasswordSection");

    // Clear previous messages and inputs
    userNameInput.value = "";
    passWordInput.value = "";

    if (checkBox.checked) {
        newPasswordInput.value = "";
        retypePasswordInput.value = "";

        hiddenFields.classList.remove("hidden");
        enableDiv.classList.add("hidden");
        passwordLabel.textContent = "Old Password";

        newPasswordInput.required = true;
        retypePasswordInput.required = true;
    } else {
        hiddenFields.classList.add("hidden");
        enableDiv.classList.add("hidden");
        passwordLabel.textContent = "Password";

        newPasswordInput.required = false;
        retypePasswordInput.required = false;
    }
});

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Clear previous messages
    enableDiv.classList.add("hidden");
    enableDiv.classList.remove("success-message");
    enableDiv.classList.add("error-message");

    // Check if username or password is empty
    if (userNameInput.value.trim() === "" || passWordInput.value.trim() === "") {
        enableDiv.classList.remove("hidden");
        enableDiv.classList.remove("success-message");
        enableDiv.classList.add("error-message");
        enableDiv.textContent = "Please fill in all required fields.";
        return; // stop execution
    }

    // Check if username and password are correct
    if (userNameInput.value !== realUserName || passWordInput.value !== currentPassword) {
        enableDiv.classList.remove("hidden");
        enableDiv.classList.remove("success-message");
        enableDiv.classList.add("error-message");
        enableDiv.textContent = "Invalid username or password. Please try again.";
        return;
    }

    // If password change is enabled
    if (checkBox.checked) {
        // Check if new password fields are empty
        if (newPasswordInput.value.trim() === "" || retypePasswordInput.value.trim() === "") {
            enableDiv.classList.remove("hidden");
            enableDiv.classList.remove("success-message");
            enableDiv.classList.add("error-message");
            enableDiv.textContent = "Please enter a new password on both fields.";
            return;
        }

        // Check if new passwords match
        if (newPasswordInput.value !== retypePasswordInput.value) {
            enableDiv.classList.remove("hidden");
            enableDiv.classList.remove("success-message");
            enableDiv.classList.add("error-message");
            enableDiv.textContent = "Passwords didn't match. Please try again.!";
            return;
        }

        // Update password and show success
        currentPassword = newPasswordInput.value;

        // Uncheck checkbox
        checkBox.checked = false;

        // Hide new password fields again
        document.getElementById("newPasswordSection").classList.add("hidden");

        // Reset label
        passwordLabel.textContent = "Password";

        // Remove required validation
        newPasswordInput.required = false;
        retypePasswordInput.required = false;

        // Success message
        enableDiv.classList.remove("hidden");
        enableDiv.classList.remove("error-message");
        enableDiv.classList.add("success-message");
        enableDiv.textContent = "Password Updated successfully...!";

        // Clean up input fields
        userNameInput.value = "";
        passWordInput.value = "";
    } else {
        // Login success
        enableDiv.classList.remove("hidden");
        enableDiv.classList.add("success-message");
        enableDiv.textContent = "Login successful...!";
    }

});