// NÚMERO OFICIAL DE KILLARI PACANGUILLA
const TELEFONO_KILLARI = "51960977347";

// 1. Menú móvil desplegable
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// 2. Filtro interactivo de la Carta Digital
const tabButtons = document.querySelectorAll(".tab-btn");
const menuCards = document.querySelectorAll(".menu-card");

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    tabButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.getAttribute("data-category");

    menuCards.forEach(card => {
      if (category === "todos" || card.getAttribute("data-cat") === category) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});

// 3. Fecha mínima de hoy en reservas
const fechaInput = document.getElementById("fecha");
if (fechaInput) {
  const hoy = new Date().toISOString().split("T")[0];
  fechaInput.setAttribute("min", hoy);
}

// 4. Envío de reserva inteligente a WhatsApp
const whatsappForm = document.getElementById("whatsappForm");

whatsappForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const servicio = document.getElementById("servicio").value;
  const fecha = document.getElementById("fecha").value;
  const personas = document.getElementById("personas").value;
  const notas = document.getElementById("notas").value.trim();

  let mensaje = `Hola *Killari Pacanguilla*, mi nombre es *${nombre}*. Quisiera consultar disponibilidad para:\n\n`;
  mensaje += `• *Motivo:* ${servicio}\n`;
  mensaje += `• *Fecha:* ${fecha}\n`;
  mensaje += `• *Cantidad:* ${personas} persona(s)\n`;
  
  if (notas) {
    mensaje += `• *Nota:* ${notas}\n`;
  }

  mensaje += `\nQuedo atento a su confirmación. ¡Gracias!`;

  const url = `https://wa.me/${TELEFONO_KILLARI}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
});