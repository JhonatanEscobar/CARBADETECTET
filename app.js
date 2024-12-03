document.getElementById('download-button').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = './CARBADETECTET.zip'; // Asegúrate de que la ruta sea correcta
    link.download = 'CARBADETECTET.zip'; // Nombre sugerido para la descarga
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
