// =====================
//  Element References
// =====================

const form = document.querySelector("#registerForm");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const successMsg = document.querySelector("#successMsg");

// Strength bar elements
const strengthFill = document.querySelector("#strengthFill");
const strengthLabel = document.querySelector("#strengthLabel");


// =====================
//  Show / Clear Error
// =====================

// Marks a field as invalid — red border + error message below
function showError(field, errorId, message) {
    field.classList.add("invalid");
    field.classList.remove("valid");
    document.querySelector(`#${errorId}`).textContent = message;
}

// Marks a field as valid — green border + clears error message
function clearError(field, errorId) {
    field.classList.remove("invalid");
    field.classList.add("valid");
    document.querySelector(`#${errorId}`).textContent = "";
}


// =====================
//  Username Validation
// =====================

function validateUsername() {

    const val = username.value.trim();

    // Rule 1 — cannot be empty
    if (!val) {
        showError(username, "usernameError", "Username is required.");
        return false;
    }

    // Rule 2 — minimum 3 characters
    if (val.length < 3) {
        showError(username, "usernameError", "At least 3 characters required.");
        return false;
    }

    // Rule 3 — only letters, numbers, and underscores
    // \w matches [a-zA-Z0-9_]. ^ and $ anchor to start/end of string.
    if (!/^\w+$/.test(val)) {
        showError(username, "usernameError", "Only letters, numbers, and _ allowed.");
        return false;
    }

    // All rules passed
    clearError(username, "usernameError");
    return true;
}


// =====================
//  Password Validation
// =====================

function validatePassword() {

    const val = password.value;

    // Rule 1 — cannot be empty
    if (!val) {
        showError(password, "passwordError", "Password is required.");
        updateStrength(0);    // reset bar
        return false;
    }

    // Rule 2 — minimum 8 characters
    if (val.length < 8) {
        showError(password, "passwordError", "At least 8 characters required.");
        updateStrength(val.length);
        return false;
    }

    // All rules passed
    clearError(password, "passwordError");
    updateStrength(val.length);
    return true;
}


// =====================
//  Password Strength Bar
// =====================

// Gives visual feedback on how strong the password is
// Based purely on length — simple but effective for learning
function updateStrength(length) {

    let width = 0;
    let color = "";
    let label = "";

    if (length === 0) {
        width = 0;
        color = "";
        label = "";
    } else if (length < 6) {
        width = 25;
        color = "#f87171";    // red — weak
        label = "Weak";
    } else if (length < 9) {
        width = 50;
        color = "#fb923c";    // orange — fair
        label = "Fair";
    } else if (length < 12) {
        width = 75;
        color = "#facc15";    // yellow — good
        label = "Good";
    } else {
        width = 100;
        color = "#4ade80";    // green — strong
        label = "Strong";
    }

    strengthFill.style.width = `${width}%`;
    strengthFill.style.background = color;
    strengthLabel.textContent = label;
    strengthLabel.style.color = color;
}


// =====================
//  Event Listeners
// =====================

// "blur" fires when user clicks OUT of the field (leaves it)
// Good for showing errors after user has had a chance to type
username.addEventListener("blur", validateUsername);
password.addEventListener("blur", validatePassword);

// "input" fires on every keystroke — gives live feedback
username.addEventListener("input", validateUsername);
password.addEventListener("input", validatePassword);

// Also update strength bar live as user types password
password.addEventListener("input", () => {
    updateStrength(password.value.length);
});


// =====================
//  Form Submit
// =====================

form.addEventListener("submit", (e) => {

    // Stop browser from reloading the page
    e.preventDefault();

    // IMPORTANT: single & not double &&
    // && (logical AND) short-circuits — if validateUsername() returns false,
    //     validatePassword() never runs → password field shows no error
    // &  (bitwise AND)  does NOT short-circuit — BOTH functions always run
    //     so both fields show their errors at the same time
    const isValid = validateUsername() & validatePassword();

    if (isValid) {

        // Show success message
        successMsg.style.display = "block";

        // Log submitted data (in real app you'd send this to a server)
        console.log("Form submitted!", {
            username: username.value.trim(),
            password: password.value
        });

        // Reset form after short delay
        setTimeout(() => {
            form.reset();
            username.classList.remove("valid");
            password.classList.remove("valid");
            updateStrength(0);
            successMsg.style.display = "none";
        }, 2500);

    } else {

        // Hide success message if it was showing
        successMsg.style.display = "none";
    }

});