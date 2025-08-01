// Efecto de aparición al hacer scroll (animación simple)
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.1
  });

  cards.forEach(card => {
    card.classList.add("hidden");
    observer.observe(card);
  });
});
