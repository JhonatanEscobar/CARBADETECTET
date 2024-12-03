// Navegación responsive
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// Botón de descarga
document.getElementById('download-button').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'CarbaDetectetInstaller.exe'; // Reemplaza con el nombre real del archivo
    link.download = 'CarbaDetectetInstaller.exe'; // Nombre sugerido para la descarga
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
