// Prevent page refresh
event.preventDefault();

// Get user details
const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const message = document.getElementById("message").value.trim();

// Check that all fields are filled
if (name === "" || email === "" || message === "") {
    thankYouMessage.textContent = "Please fill in all the fields.";
    thankYouMessage.style.color = "#ff4444";
    return;
}

// Show thank-you message
thankYouMessage.textContent =
    `Thank you, ${name}! We will reach you soon.`;

thankYouMessage.style.color = "#ff6b2c";
thankYouMessage.style.fontSize = "18px";
thankYouMessage.style.fontWeight = "bold";
thankYouMessage.style.marginTop = "20px";

// Clear the form
form.reset();
