function descargarArchivo() {
    const link = document.createElement('a');
    link.href = 'archivos/archivo1.txt';  // Ruta del archivo
    link.download = 'archivo1.txt';  // Nombre del archivo
    link.click();
}
