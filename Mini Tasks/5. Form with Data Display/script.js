const form = document.getElementById('info-form');

// To display the data on the result page
const displayName = document.getElementById('result-name');
const displayEmail = document.getElementById('result-email');
const displayPhone = document.getElementById('result-phone');
const displayAge = document.getElementById('result-age');
const displayGender = document.getElementById('result-gender');
const displayCity = document.getElementById('result-city');

// For error span
const errorNameInput = document.getElementById('name-error');
const errorEmailInput = document.getElementById('email-error');
const errorPhoneInput = document.getElementById('phone-error');
const errorAgeInput = document.getElementById('age-error');
const errorGenderInput = document.getElementById('gender-error');
const errorCityInput = document.getElementById('city-error');

// Input fields boxes
const nameInputBox = document.getElementById('name');
const emailInputBox = document.getElementById('email');
const phoneInputBox = document.getElementById('phone');
const ageInputBox = document.getElementById('age');
const genderInputBox = document.getElementById('gender');
const cityInputBox = document.getElementById('city');

if (form) {
    form.addEventListener("submit", function (event) {
        // Input fields from index page
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const ageInput = document.getElementById('age');
        const genderInput = document.getElementById('gender');
        const cityInput = document.getElementById('city');


        event.preventDefault();

        let isValid = true;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;      // Simple email validation pattern: example@gmail.com

        if (nameInput.value.trim() === "") {
            nameInputBox.classList.add("invalid");
            errorNameInput.textContent = "Please enter your name.";
            isValid = false;
        } else {
            nameInputBox.classList.remove("invalid");
            errorNameInput.textContent = "";
        }

        if (emailInput.value.trim() === "") {
            emailInputBox.classList.add("invalid");
            errorEmailInput.textContent = "Email must be filled.";
            isValid = false;
        } else if (!emailPattern.test(emailInput.value.trim())) {
            emailInputBox.classList.add("invalid");
            errorEmailInput.textContent = "Please enter a valid email address.";
            isValid = false;
        } else {
            emailInputBox.classList.remove("invalid");
            errorEmailInput.textContent = "";
        }

        if (phoneInput.value.trim() === "") {
            phoneInputBox.classList.add("invalid");
            errorPhoneInput.textContent = "Number field can't be empty.";
            isValid = false;
        } else {
            phoneInputBox.classList.remove("invalid");
            errorPhoneInput.textContent = "";
        }

        if (ageInput.value.trim() === "") {
            ageInputBox.classList.add("invalid");
            errorAgeInput.textContent = "Opps, age must be filled...!";
            isValid = false;
        } else {
            ageInputBox.classList.remove("invalid");
            errorAgeInput.textContent = "";
        }

        if (genderInput.value.trim() === "") {
            genderInputBox.classList.add("invalid");
            errorGenderInput.textContent = "Forgot to select your gender.";
            isValid = false;
        } else {
            genderInputBox.classList.remove("invalid");
            errorGenderInput.textContent = "";
        }

        if (cityInput.value.trim() === "") {
            cityInputBox.classList.add("invalid");
            errorCityInput.textContent = "Please select where you live.";
            isValid = false;
        } else {
            cityInputBox.classList.remove("invalid");
            errorCityInput.textContent = "";
        }

        if (!isValid) {
            return;
        }

        const formData = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            phone: phoneInput.value.trim(),
            age: ageInput.value.trim(),
            gender: genderInput.value.trim(),
            city: cityInput.value.trim()
        };

        // Store the form data in localStorage. Convert to string before storing
        localStorage.setItem('formData', JSON.stringify(formData));

        // Redirect to the result page
        window.location.href = "result.html";
    });
}


if (displayName) {
    const raw = localStorage.getItem('formData');

    if(raw) {
        const data = JSON.parse(raw);       // JSON.parse() converts a JSON string into a JavaScript object

        displayName.textContent = data.name;
        displayEmail.textContent = data.email;
        displayPhone.textContent = data.phone;
        displayAge.textContent = data.age;
        displayGender.textContent = data.gender;
        displayCity.textContent = data.city;
    } else {
        window.location.href = "index.html";  // Redirect to index.html if no data is found
    }
}

const backButton = document.getElementById('back-btn');
if(backButton) {
    backButton.addEventListener('click', function() {
        window.location.href = "index.html";  // Redirect to index.html when the back button is clicked
    });
}