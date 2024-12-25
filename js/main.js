document.addEventListener("DOMContentLoaded", () => {
  const cardLinks = document.querySelectorAll(".card__link");

  cardLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      const currentCard = link.closest(".card");
      const cardLinksInCard = currentCard.querySelectorAll(".card__link");

      cardLinksInCard.forEach((cardLink) => {
        cardLink.classList.remove("active");
      });

      link.classList.add("active");
    });
  });
});
