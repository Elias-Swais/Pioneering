const copy = document.querySelector(".slide-items").cloneNode(true);
document.querySelector(".clients").appendChild(copy);

const form = document.getElementById("contact-form");
const successModal = document.getElementById("success-modal");
const failureModal = document.getElementById("failure-modal");
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener("submit", function (e) {
  e.preventDefault();

  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";

  emailjs
    .sendForm("service_hhm145s", "template_79cie4e", this)
    .then(() => {
      successModal.style.display = "block";
      form.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = "Send";
    })
    .catch(() => {
      failureModal.style.display = "block";
      submitBtn.disabled = false;
      submitBtn.textContent = "Send";
    });
});

document.getElementById("close-success").onclick = () =>
  (successModal.style.display = "none");
document.getElementById("close-failure").onclick = () =>
  (failureModal.style.display = "none");

window.onclick = (event) => {
  if (event.target == successModal) successModal.style.display = "none";
  if (event.target == failureModal) failureModal.style.display = "none";
};
