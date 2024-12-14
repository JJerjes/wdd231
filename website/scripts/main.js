import { openModal, closeModal, setupModalEvents } from './modal.js'; // Corregí la ruta aquí
import { toggleMenu } from './menu.js';

document.addEventListener('DOMContentLoaded', () => {
    openModal();  // Esto abrirá el modal automáticamente al cargar la página, si lo deseas
    setupModalEvents();  // Configura los eventos del modal
    toggleMenu();  // Configura el menú
});
