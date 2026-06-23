const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

const quoteForm = document.getElementById("quoteForm");
const formMessage = document.getElementById("formMessage");

if (quoteForm && formMessage) {
  quoteForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const privacy = document.getElementById("privacy");

    if (!privacy.checked) {
      formMessage.textContent =
        "Veuillez accepter l’utilisation des informations pour envoyer votre demande.";
      formMessage.style.color = "#d5242a";
      return;
    }

    formMessage.textContent =
      "Votre demande a bien été préparée. Le garage vous recontactera rapidement.";
    formMessage.style.color = "#15803d";

    quoteForm.reset();
  });
}
