document.getElementById('download-button').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = './CARBADETECTET.exe'; // Ruta relativa asegurada
    link.download = 'CARBADETECTET.exe'; // Nombre sugerido para la descarga
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});