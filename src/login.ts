const form = document.querySelector("form") as HTMLFormElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const passwordInput = document.getElementById("password") as HTMLInputElement;

const resultDiv = document.createElement("div");
resultDiv.classList.add("mt-3");
form.appendChild(resultDiv);

function isValidEmail(email: string): boolean {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (!isValidEmail(emailValue) || passwordValue === "") {
    resultDiv.textContent = "Password yoki Email noto‘g‘ri ❌";
    resultDiv.classList.remove("text-success");
    resultDiv.classList.add("text-danger");
  } else {
    resultDiv.textContent = "To‘g‘ri kiritildi ✅";
    resultDiv.classList.remove("text-danger");
    resultDiv.classList.add("text-success");
  }
});
