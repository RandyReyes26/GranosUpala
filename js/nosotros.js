document.addEventListener("DOMContentLoaded", () => { // Espera a que cargue el DOM
  const cards = document.querySelectorAll('.card-custom'); // Selecciona todas las tarjetas

  const observer = new IntersectionObserver(entries => { // Observador para detectar visibilidad
    entries.forEach(entry => {
      if (entry.isIntersecting) { // Si la tarjeta entra en pantalla
        entry.target.classList.add('reveal'); // Agrega la clase para animar
      }
    });
  }, { threshold: 0.1 }); // Se activa al ver el 10% de la tarjeta

  cards.forEach(card => observer.observe(card)); // Observa cada tarjeta
});
