//PARA MODAL FINANCIAMIENTO

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modalAgregarFinanciamiento");
  const btnAbrir = document.getElementById("btnAgregarFinanciamientos");
  const btnCerrar = document.getElementById("btnCerrarModal");
  const form = document.getElementById("frmAgregarFinanciamiento");

  // Abrir modal
  btnAbrir.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  // Cerrar modal
  btnCerrar.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Cerrar al hacer clic fuera del contenido
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Simular envío del formulario
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("inputsModals").value.trim();
    if (!nombre) {
      alert("Por favor ingresa un nuevo financiamiento");
      return;
    }
    alert("Agregado: " + nombre);
    modal.style.display = "none";
    form.reset();
  });
});

//PARA MODAL NUEVO DATO CONTABLE

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modalAgregarDatosC");
  const btnAbrir = document.getElementById("btnAgregarDatosC");
  const btnCerrar = document.getElementById("btnCerrarDatosC");
  const form = document.getElementById("frmAgregarDatosC");

  // Abrir modal
  btnAbrir.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  // Cerrar modal
  btnCerrar.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Cerrar al hacer clic fuera del contenido
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Simular envío del formulario
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("inputsModals").value.trim();
    if (!nombre) {
      alert("Por favor ingrese un nuevo dato contable");
      return;
    }
    alert("Agregado: " + nombre);
    modal.style.display = "none";
    form.reset();
  });
});

//MODAL PARA PERMISOS NUEVOS
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modalPermisos");
  const btnAbrir = document.getElementById("btnAñadirPermiso");
  const btnCerrar = document.getElementById("btnCerrarPermisos");
  const form = document.getElementById("frmAgregarpermisos");

  // Abrir modal
  btnAbrir.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  // Cerrar modal
  btnCerrar.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Cerrar al hacer clic fuera del contenido
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Simular envío del formulario
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("inputsModals").value.trim();
    if (!nombre) {
      alert("Por favor ingrese un nuevo permiso");
      return;
    }
    alert("Agregado: " + nombre);
    modal.style.display = "none";
    form.reset();
  });
});





const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');
const menuOverlay = document.getElementById('menuOverlay');
const menuItems = document.querySelectorAll('.menu-item.has-submenu');

// Toggle del menú principal
function toggleMenu() {
  menuToggle.classList.toggle('active');
  sideMenu.classList.toggle('active');
  menuOverlay.classList.toggle('active');
  document.body.style.overflow = sideMenu.classList.contains('active') ? 'hidden' : 'auto';
}

// Cerrar menú
function closeMenu() {
  menuToggle.classList.remove('active');
  sideMenu.classList.remove('active');
  menuOverlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Event listeners
menuToggle.addEventListener('click', toggleMenu);
menuOverlay.addEventListener('click', closeMenu);

// Submenús desplegables
menuItems.forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault();

    const submenuId = this.getAttribute('data-submenu');
    const submenu = document.getElementById(submenuId);

    // Cerrar otros submenús
    menuItems.forEach(otherItem => {
      if (otherItem !== this) {
        otherItem.classList.remove('active');
        const otherSubmenuId = otherItem.getAttribute('data-submenu');
        if (otherSubmenuId) {
          document.getElementById(otherSubmenuId).classList.remove('active');
        }
      }
    });

    // Toggle del submenú actual
    this.classList.toggle('active');
    submenu.classList.toggle('active');
  });
});

// Cerrar menú con tecla Escape
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeMenu();
  }
});


document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const accordion = header.parentElement;
    accordion.classList.toggle('active');
  });
});

document.getElementById('btncerrarSesion').addEventListener('click', function() {
  window.location.href = 'Login.html';
});


//CRUD
