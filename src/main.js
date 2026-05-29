import './style.css';

// =========================================================================
// 🎓 DATOS DE LA ESTUDIANTE (MODIFICA AQUÍ PARA LA ENTREGA OFICIAL)
// =========================================================================
const ESTUDIANTE_NOMBRE = "Tu Nombre Completo";
const ESTUDIANTE_MATRICULA = "Tu Matrícula / ID";
const ESTUDIANTE_CORREO = "tu.correo@institucional.edu";

// =========================================================================
// 🍾 BASE DE DATOS DE PRODUCTOS (IMÁGENES REALES DEL REPOSITORIO)
// =========================================================================
const PRODUCTOS = [
  {
    id: 1,
    nombre: "Dexter Gold Label 12 Years",
    categoria: "whisky",
    precio: 2450,
    imagen: "images/productos/12.jpeg",
    nota: "Madurado en barricas de roble, notas de miel silvestre y brezo ahumado.",
    badge: "Más Vendido"
  },
  {
    id: 2,
    nombre: "Dexter Cabernet Reserve",
    categoria: "vino",
    precio: 1800,
    imagen: "images/productos/13.jpeg",
    nota: "Vino tinto de cuerpo entero, intensas notas a ciruela pasa y frutos del bosque.",
    badge: "Sommelier Pick"
  },
  {
    id: 3,
    nombre: "Double Wood Sherry Cask",
    categoria: "whisky",
    precio: 4200,
    imagen: "images/productos/23.jpeg",
    nota: "Single Malt escocés con doble maduración, toques de pasas y canela.",
    badge: "Premium"
  },
  {
    id: 4,
    nombre: "Dexter Botanical Dry Gin",
    categoria: "gin",
    precio: 1500,
    imagen: "images/productos/3.jpeg",
    nota: "Ginebra estilizada con enebro de la alta montaña y cítricos caribeños.",
    badge: "Fresco"
  },
  {
    id: 5,
    nombre: "Gran Reserva Chardonnay",
    categoria: "vino",
    precio: 1650,
    imagen: "images/productos/34.jpeg",
    nota: "Vino blanco refinado, final de manzana verde crujiente y mantequilla.",
    badge: "Exclusivo"
  },
  {
    id: 6,
    nombre: "Dexter Solera Añejo Especial",
    categoria: "ron",
    precio: 2100,
    imagen: "images/productos/66.jpeg",
    nota: "Ron ultra premium dominicano envejecido, rica vainilla y caramelo tostado.",
    badge: "Local Pride"
  },
  {
    id: 7,
    nombre: "Kentucky Single Barrel",
    categoria: "whisky",
    precio: 3600,
    imagen: "images/productos/768.jpeg",
    nota: "Bourbon robusto embotellado de un solo barril, notas de coco y arce.",
    badge: "Rústico"
  },
  {
    id: 8,
    nombre: "Boutique Tasting Box",
    categoria: "otros",
    precio: 8500,
    imagen: "images/productos/Productosvarios.jpeg",
    nota: "Set selecto con muestras exclusivas de maltas y licores finos Dexter.",
    badge: "Edición Limitada"
  }
];

// =========================================================================
// 🚀 INICIALIZACIÓN DE LA PÁGINA
// =========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // 1. Inyectar datos de la estudiante dinámicamente
  inyectarDatosEstudiante();

  // 2. Control del Reproductor de Video
  inicializarHeroVideo();

  // 3. Menú de Navegación e Island Active Tracker
  inicializarNavegacion();

  // 4. Renderizado y Filtros de la Galería de Productos
  inicializarGaleria();

  // 5. Filtro del Calendario de Contenido
  inicializarCalendario();

  // 6. Math Captcha del Formulario
  inicializarCaptcha();
});

// =========================================================================
// 🎨 FUNCIONES DE LÓGICA E INTERACTIVIDAD
// =========================================================================

// Inyectar datos de la estudiante en las secciones obligatorias del Word
function inyectarDatosEstudiante() {
  // Subtítulo del Banner Principal
  const studentBanner = document.getElementById("hero-student-placeholder");
  if (studentBanner) {
    studentBanner.innerHTML = `Desarrollado por: <span>${ESTUDIANTE_NOMBRE}</span>`;
  }

  // Nombre en el perfil profesional
  const profileName = document.getElementById("student-name-placeholder");
  if (profileName) {
    profileName.innerText = ESTUDIANTE_NOMBRE;
  }

  // Matrícula en el perfil profesional
  const profileId = document.getElementById("student-id-placeholder");
  if (profileId) {
    profileId.innerText = `Matrícula: ${ESTUDIANTE_MATRICULA}`;
  }

  // Correo en el perfil profesional
  const profileEmail = document.getElementById("student-email-placeholder");
  if (profileEmail) {
    profileEmail.innerText = ESTUDIANTE_CORREO;
  }

  // Footer institucional
  const footerData = document.getElementById("footer-student-data-placeholder");
  if (footerData) {
    footerData.innerHTML = `Creado por: <span>${ESTUDIANTE_NOMBRE}</span> &nbsp;|&nbsp; ID: <span>${ESTUDIANTE_MATRICULA}</span>`;
  }
}

// Controlar el comportamiento del video en el Hero
function inicializarHeroVideo() {
  const video = document.querySelector(".hero-video");
  if (video) {
    // Asegurar reproducción automática
    video.muted = true;
    video.play().catch(err => {
      console.log("Auto-play de video bloqueado por navegador, esperando interacción.", err);
    });
  }
}

// Lógica de navegación, ScrollSpy y menú móvil
function inicializarNavegacion() {
  const navbar = document.querySelector(".jw-header");
  const mobileToggle = document.querySelector(".jw-mobile-toggle");
  const mobileOverlay = document.querySelector(".jw-mobile-overlay");
  const navLinks = document.querySelectorAll(".jw-nav-link, .jw-mobile-nav-link");
  const sections = document.querySelectorAll("section[id], footer[id]");

  // Efecto Scroll en la barra flotante (JW Style)
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Scroll Spy: Destacar enlace activo
    let currentId = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      const href = link.getAttribute("href");
      if (href === `#${currentId}`) {
        link.classList.add("active");
      }
    });
  });

  // Toggle Menú Móvil
  if (mobileToggle && mobileOverlay) {
    mobileToggle.addEventListener("click", () => {
      const isOpen = mobileToggle.classList.toggle("open");
      mobileOverlay.classList.toggle("open", isOpen);
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    // Cerrar menú móvil al dar clic a un enlace
    mobileOverlay.addEventListener("click", (e) => {
      if (e.target.classList.contains("jw-mobile-nav-link")) {
        mobileToggle.classList.remove("open");
        mobileOverlay.classList.remove("open");
        document.body.style.overflow = "";
      }
    });
  }
}

// Galería de Productos Interactiva y Lightbox
function inicializarGaleria() {
  const grid = document.getElementById("gallery-grid");
  const filterBtns = document.querySelectorAll(".gallery-filter-btn");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxClose = document.getElementById("lightbox-close");

  let currentCategory = "todos";

  function renderProducts(category) {
    if (!grid) return;
    grid.innerHTML = "";

    const filtered = category === "todos" 
      ? PRODUCTOS 
      : PRODUCTOS.filter(p => p.categoria === category);

    if (filtered.length === 0) {
      grid.innerHTML = `<div class="bento-card-full text-center py-8" style="color: var(--text-muted-light);">No se encontraron productos en esta categoría.</div>`;
      return;
    }

    filtered.forEach((p, index) => {
      const card = document.createElement("div");
      card.className = "product-card double-bezel";
      // Efecto staggered con retardo de resorte
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";
      card.style.transition = `all 600ms var(--spring) ${index * 80}ms`;

      card.innerHTML = `
        <div class="product-card-inner">
          <div class="product-img-wrapper">
            <span class="product-badge">${p.badge}</span>
            <img class="product-img" src="${p.imagen}" alt="${p.nombre}" loading="lazy">
          </div>
          <div class="product-meta">
            <span class="product-category">${p.categoria}</span>
            <h4 class="product-name">${p.nombre}</h4>
            <p class="product-note">${p.nota}</p>
            <div class="product-footer">
              <div class="product-price"><span>RD$</span> ${p.precio.toLocaleString()}</div>
              <button class="product-btn" data-id="${p.id}">Detalles</button>
            </div>
          </div>
        </div>
      `;

      grid.appendChild(card);

      // Trigger de animación staggered en el siguiente repaint
      requestAnimationFrame(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      });
    });

    // Asignar eventos de Lightbox
    const images = grid.querySelectorAll(".product-img, .product-btn");
    images.forEach(el => {
      el.addEventListener("click", (e) => {
        const cardEl = e.target.closest(".product-card-inner");
        const prodName = cardEl.querySelector(".product-name").innerText;
        const prodImgSrc = cardEl.querySelector(".product-img").src;
        abrirLightbox(prodImgSrc, prodName);
      });
    });
  }

  // Filtros de categoría de productos
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-filter");
      renderProducts(currentCategory);
    });
  });

  // Abrir Lightbox
  function abrirLightbox(src, caption) {
    if (!lightbox || !lightboxImg || !lightboxCaption) return;
    lightboxImg.src = src;
    lightboxCaption.innerText = caption;
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  // Cerrar Lightbox
  if (lightboxClose && lightbox) {
    const cerrar = () => {
      lightbox.classList.remove("open");
      document.body.style.overflow = "";
    };

    lightboxClose.addEventListener("click", cerrar);
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) cerrar();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && lightbox.classList.contains("open")) cerrar();
    });
  }

  // Render inicial
  renderProducts("todos");
}

// Filtros interactivos del Calendario de Contenidos
function inicializarCalendario() {
  const tabs = document.querySelectorAll(".calendar-tab");
  const rows = document.querySelectorAll(".calendar-row");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const filter = tab.getAttribute("data-channel");

      rows.forEach(row => {
        const channel = row.getAttribute("data-channel");
        row.style.transition = "var(--transition-smooth)";
        if (filter === "todos" || channel === filter) {
          row.style.display = "";
          row.style.opacity = "1";
        } else {
          row.style.opacity = "0";
          setTimeout(() => {
            if (tab.classList.contains("active") && tab.getAttribute("data-channel") !== "todos" && channel !== filter) {
              row.style.display = "none";
            }
          }, 300);
        }
      });
    });
  });
}

// Inicializar reto de seguridad matemático (Captcha) para formulario de contacto
function inicializarCaptcha() {
  const form = document.getElementById("contacto-form");
  const captchaLabel = document.getElementById("captcha-challenge");
  const captchaInput = document.getElementById("captcha-input");

  if (!form || !captchaLabel || !captchaInput) return;

  let num1, num2, answer;

  function generarCaptcha() {
    num1 = Math.floor(Math.random() * 8) + 2; // Número entre 2 y 9
    num2 = Math.floor(Math.random() * 8) + 2;
    answer = num1 + num2;
    captchaLabel.innerText = `¿Cuánto es ${num1} + ${num2}?`;
    captchaInput.placeholder = "Escribe el resultado de la suma";
    captchaInput.value = "";
  }

  // Generar al cargar
  generarCaptcha();

  // Validar al enviar
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const userAnswer = parseInt(captchaInput.value.trim(), 10);

    if (isNaN(userAnswer) || userAnswer !== answer) {
      alert("❌ Verificación humana incorrecta. Por favor, realiza la suma matemática correctamente.");
      captchaInput.classList.add("border-red-500");
      captchaInput.focus();
      generarCaptcha();
    } else {
      alert(`🎉 ¡Estrategia Recibida con éxito!\n\nMuchas gracias por suscribirte al Plan de Marketing Digital 2026 de Dexter Liquor Store.`);
      form.reset();
      generarCaptcha();
    }
  });
}
