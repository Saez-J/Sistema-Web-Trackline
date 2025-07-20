        // Elementos del DOM
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
            item.addEventListener('click', function(e) {
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
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeMenu();
            }
        });
        
 
        //PARA LA INTERFAZ PEDIDOS
        const pedidos = [
    {id: 1, fecha: "25/04/2025",progreso: 0},
    {id: 2, fecha: "25/04/2025", progreso: 0},
    {id: 3, fecha: "25/04/2025",progreso: 75},
    {id: 4, fecha: "25/04/2025",progreso: 100},
    {id: 5, fecha: "25/04/2025",progreso: 0},
    { id: 6, fecha: "25/04/2025",progreso: 0 },
    { id: 7, fecha: "27/04/2025",progreso: 25 },
    { id: 8, fecha: "28/04/2025",progreso: 75 },
];
 
function mostrarPedidos() {
  const contenedor = document.getElementById("listaPedidos");
  contenedor.innerHTML = "";
 
  pedidos.forEach(pedido => {
    const div = document.createElement("div");
    div.classList.add("pedido");
 
    div.innerHTML = `
      <div>
      <h3>Pedido #${pedido.id}</h3>
      <p>Iniciado el: ${pedido.fecha}</p>
      <p class="progreso">${pedido.progreso}%</p>
     <a href="ProductTracking.html?id=${pedido.id}&progreso=${pedido.progreso}&estado=${pedido.estado}">Más información</a>
     </div>
 
    `;
 
    contenedor.appendChild(div);
  });
}
 
 
document.addEventListener("DOMContentLoaded", mostrarPedidos);
 
//PARA LA INTERFAZ DE SEGUIMIENTO DE PRODUCTOS
document.addEventListener('DOMContentLoaded', () => {
  // Variables base
  const steps = document.querySelectorAll('.step');
  const progressCircle = document.querySelector('.progress-ring-fill');
  const progressText = document.querySelector('.progress-text');
  const progressContainer = document.querySelector('.progress-container');
 
  const radius = 100;
  const circumference = 2 * Math.PI * radius;
 
  // Configuración inicial del círculo
  progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
  progressCircle.style.strokeDashoffset = circumference;
 
  // Función principal
  function actualizarProgreso() {
    const total = steps.length;
    const completados = [...steps].filter(step => step.checked).length;
    const porcentaje = Math.round((completados / total) * 100);
 
    // Cálculo de animación del círculo
    const offset = circumference - (porcentaje / 100) * circumference;
    progressCircle.style.strokeDashoffset = offset;
 
    // Determinar estado textual
    let estado = "";
    if (porcentaje === 0) estado = "Pendiente";
    else if (porcentaje < 50) estado = "En Proceso";
    else if (porcentaje < 100) estado = "Progresando";
    else estado = "Entregado";
 
    // Actualizar el texto del progreso
    progressText.innerHTML = `${porcentaje}%<br><span><b>${estado}</b></span>`;
 
 
    progressContainer.style.borderColor = colores[estado];
  }
 
  // Vincular eventos a cada checkbox
  steps.forEach(step => {
    step.addEventListener('change', actualizarProgreso);
  });
 
  // Ejecutar una vez al inicio
  actualizarProgreso();
});
 
document.getElementById('btncerrarSesion').addEventListener('click', function() {
  window.location.href = 'Login.html';
});