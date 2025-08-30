document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".intro__claim__form");
  const inputs = form.querySelectorAll("input");
  const errorLabels = form.querySelectorAll(".err");

  // Email regex pattern for validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    inputs.forEach((input, index) => {
      const errorLabel = errorLabels[index];
      let value = input.value.trim();

      if (value === "") {
        // Empty input validation
        input.classList.add("input-error");
        errorLabel.style.display = "block";
        isValid = false;
      } else {
        if (input.placeholder === "Email Address" && !emailPattern.test(value)) {
          // Invalid email validation
          input.classList.add("input-error");
          errorLabel.style.display = "block";
          isValid = false;
        } else {
          // Valid input
          input.classList.remove("input-error");
          errorLabel.style.display = "none";
        }
      }
    });

    if (isValid) {
      // You can submit the form or show success message here
      alert("Form submitted successfully!");
      form.reset();
    }
  });
});
