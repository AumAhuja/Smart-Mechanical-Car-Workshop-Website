const form = document.getElementById("contactForm");
const queryType = document.getElementById("queryType");
const messageBox = document.getElementById("messageBox");
const submitBtn = document.getElementById("submitBtn");
const successMessage = document.getElementById("successMessage");

function validateForm() {
    const isQuerySelected = queryType.value !== "";
    const isMessageFilled = messageBox.value.trim().length > 0;

    submitBtn.disabled = !(isQuerySelected && isMessageFilled);
}

queryType.addEventListener("change", validateForm);
messageBox.addEventListener("input", validateForm);

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    successMessage.textContent = "✔ Message has been sent successfully!";
    successMessage.style.display = "block";

    form.reset();

    submitBtn.disabled = true;
});
