document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const cardLinks = card.querySelectorAll(".card__link");
    const tabContents = card.querySelectorAll(".item");

    cardLinks.forEach((link) => {
      if (window.innerWidth < 992) {
        link.addEventListener("click", (event) => {
          event.preventDefault();
          event.stopPropagation();

          cardLinks.forEach((cardLink) => cardLink.classList.remove("active"));
          link.classList.add("active");

          const targetTab = link.dataset.tab;
          tabContents.forEach((content) => {
            content.classList.remove("active");
            if (content.dataset.tabContent === targetTab) {
              content.classList.add("active");
            }
          });
        });
      } else if (window.innerWidth > 992) {
        link.addEventListener("mouseover", (event) => {
          event.preventDefault();
          event.stopPropagation();

          cardLinks.forEach((cardLink) => cardLink.classList.remove("active"));
          link.classList.add("active");

          const targetTab = link.dataset.tab;
          tabContents.forEach((content) => {
            content.classList.remove("active");
            if (content.dataset.tabContent === targetTab) {
              content.classList.add("active");
            }
          });
        });
      }
    });
  });
});
