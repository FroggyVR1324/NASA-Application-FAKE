const form = document.querySelector("#application-form");
const formSection = document.querySelector(".form-section");
const confirmation = document.querySelector("#confirmation");
const referenceNumber = document.querySelector("#reference-number");
const backButton = document.querySelector("#back-button");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  // This is a cutscene prop: no personal information is sent or stored.
  const reference = "NASA-" + Math.floor(100000 + Math.random() * 900000);
  referenceNumber.textContent = reference;
  formSection.classList.add("hidden");
  confirmation.classList.remove("hidden");
  confirmation.scrollIntoView({ behavior: "smooth", block: "center" });
});

backButton.addEventListener("click", () => {
  confirmation.classList.add("hidden");
  formSection.classList.remove("hidden");
  form.reset();
  formSection.scrollIntoView({ behavior: "smooth", block: "start" });
});