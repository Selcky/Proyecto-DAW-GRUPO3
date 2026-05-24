class SistemaNavegacion {
  constructor() {
    this.usuario = JSON.parse(localStorage.getItem("usuarioActivo"));
    this.inicializarNavbar();
  }

  inicializarNavbar() {
    const navHTML = `
      <nav class="navbar navbar-dark bg-primary px-4 shadow-sm">
        <div class="container-fluid">
          <span class="navbar-brand fw-bold">🎓 Plataforma de Cursos</span>
          <div class="d-flex gap-2 align-items-center">
            <span class="text-light me-3">Bienvenido: <strong>${this.usuario?.nombre || 'Invitado'}</strong></span>
            <a href="${this.obtenerRutaRelativa()}usuarios/lista_usuarios.html" class="btn btn-light btn-sm">👥 Usuarios</a>
            <a href="${this.obtenerRutaRelativa()}cursos/lista_cursos.html" class="btn btn-success btn-sm">📚 Cursos</a>
            <a href="${this.obtenerRutaRelativa()}../dashboard.html" class="btn btn-info btn-sm">🏠 Dashboard</a>
            <button onclick="cerrarSesion()" class="btn btn-danger btn-sm">Cerrar Sesión</button>
          </div>
        </div>
      </nav>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', navHTML);
  }

  obtenerRutaRelativa() {
    const ubicacionActual = window.location.pathname;
    if (ubicacionActual.includes('/usuarios/') || ubicacionActual.includes('/cursos/')) {
      return '../';
    }
    return '';
  }
}

// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  new SistemaNavegacion();
});

function cerrarSesion() {
  if (confirm('¿Está seguro de cerrar sesión?')) {
    localStorage.removeItem("usuarioActivo");
    window.location.href = "index.html";
  }
}